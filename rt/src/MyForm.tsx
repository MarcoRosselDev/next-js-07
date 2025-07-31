import { useRef, type FormEvent } from "react"

export default function MyForm () {

  const formRef = useRef(null)

  const handleSubmit = (e :FormEvent) => {
    e.preventDefault()

    if (!formRef.current) return
    const formData = new FormData(formRef.current)

    const color = formData.get("color")
    const inpt = formData.get("patapin")
    // !! o doble negacion se utilza para convertir cualquier valor en su equivalente booleano
    const terminos = !!formData.get("terminos") // !! convierte automaticamente cualquier type en booleano
    // la idea es no enviar un null or "on" en la respuesta al servidor

    console.log(color,inpt, terminos); // blue marco false
    console.log({color,inpt, terminos})
  }

  return (
    <form onSubmit={handleSubmit} ref={formRef} className="content-xl text-center">
      <label className="row justify-content-md-center mb-3">write sometying...
        <input type="text" name="patapin" className="form-control me-2"  />
      </label>
      
      <label className="row justify-content-md-center mb-3">
        <select className="form-select form-select-sm" defaultValue={""} aria-label="Default select example" name="color">
          <option disabled value="">what's your favorite color?</option>
          <option value="red">red</option>
          <option value="blue">blue</option>
          <option value="green">green</option>
        </select>
      </label>

      {/* checkbox aceptar terminos */}
      <label className="container-fluid d-flex mb-3">
        Aceptar terminos y condiciones
        <input type="checkbox" name="terminos"/>
      </label>

      <label className="row justify-content-md-center mb-3">
      <button type="submit" className="btn btn-outline-success">send</button>
      </label>
    </form>
  )
}