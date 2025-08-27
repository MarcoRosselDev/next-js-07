/** @format */

import { useRef, type FormEvent } from "react";
import "./App.css";

// uncontrolled components
function App() {

  const formRef = useRef(null)
  
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return
    const formData = new FormData(formRef.current)

    const color = formData.get("color")
    const inpt = formData.get("patapin")
    // !! o doble negacion se utilza para convertir cualquier valor en su equivalente booleano
    const terminos = !!formData.get("terminos") // !! convierte automaticamente cualquier type en booleano
    // la idea es no enviar un null or "on" en la respuesta al servidor

    console.log(color,inpt, terminos); // blue marco false
    console.log({color,inpt, terminos}); // {color: 'blue', inpt: 'marco', terminos: false}
    
    //const input = iref.current?.value; // optional chaining operator | es | Operador de encadenamiento opcional
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
