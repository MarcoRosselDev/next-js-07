import type { FormEvent } from "react"

export default function MyForm() {

  function handleSubmit(event:FormEvent) {
    event.preventDefault();
    console.log("click event");
  }

  return (
  <form onSubmit={handleSubmit} className="container-fluid container-sm">
    {/* select */}
    <select className="form-select" aria-label="Default select example">
      <option selected>Open this select menu</option>
      <option value="1">One</option>
      <option value="2">Two</option>
      <option value="3">Three</option>
    </select>
    {/* terminos y condiciones check-box */}
    <div className="form-check">
    <label className="form-check-label"  htmlFor="checkChecked">
      terminos y condiciones
    <input className="form-check-input" type="checkbox" value="" id="checkChecked" />
    </label>
    </div>
    {/* input normal */}
    <input type="text" className="form-control" placeholder="Username" aria-label="Username"></input>
    {/* boton enviar */}
    <button type="submit" className="btn btn-success">Success</button>
  </form>

  )
}