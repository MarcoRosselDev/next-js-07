/** @format */

import { useRef, type FormEvent } from "react";
import "./App.css";

type FormDataEntryValueBoolean = string | File | boolean

// uncontrolled components
function App() {

  const formRef = useRef(null)
  
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return
    const formData = new FormData(formRef.current)

    //console.log(formData, typeof formData);

    // O puedes trabajar con él como un objecto plano:
    const formJson = Object.fromEntries<FormDataEntryValue | FormDataEntryValueBoolean >(formData.entries());
    //const formJson = formData.entries().forEach(d => console.log(d));
    //formJson.terminos = !!formJson.terminos
  
    const condition = !!formJson.terminos;

    if (!formJson.terminos) {
      formJson.terminos = condition   
    }
    formJson.terminos = condition   

    console.log(formJson);

  }

  return (
    <form onSubmit={handleSubmit} ref={formRef}>
      <input type="text" name="patapin"  />

      {/* opciones de color */}
      <select name="color" defaultValue={""}>
        <option value="" disabled>seleccióna un color</option>
        <option value="red">rojo</option>
        <option value="green">verde</option>
        <option value="blue">azul</option>
      </select>
      {/* checkbox aceptar terminos */}
        <label htmlFor="ch">Aceptar terminos y condiciones.</label>
        <input type="checkbox" id="ch" name="terminos"/>
      <button type="submit">send</button>
    </form>
  )
}

export default App;
