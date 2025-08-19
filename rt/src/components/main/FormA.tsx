import type { FormEvent } from "react"

const FormA = () => {
  
  const handleSubmit = (event : FormEvent) => {
    event.preventDefault()
    console.log("no lo envies ahun!");
    
  }
  
  return (
    <div className="container mx-auto">
      <form onSubmit={handleSubmit}>
        {/* username */}
        <div className="mb-3">
          <label htmlFor="userName" className="form-label">nombre de usuario</label>
          <input type="text" className="form-control" id="userName" aria-describedby="usernameHelp" />
          <div id="usernameHelp" className="form-text">Algun mensaje de prueba, ingresa tu nombre de usuario madafaka.</div>
        </div>

        {/* select option */}
        <select className="form-select" aria-label="Default select example">
          <option selected disabled>Open this select menu</option>
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
        </select>

        {/* checkbox */}
        <div className="form-check">
          <input className="form-check-input" type="checkbox" value="" id="checkChecked"  />
          <label className="form-check-label" htmlFor="checkChecked">
            Checked checkbox
          </label>
        </div>
        <button className="btn btn-primary" type="submit">enviar</button>
      </form>
    </div>
  )
}
export default FormA