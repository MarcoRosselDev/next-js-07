import { useState, type FormEvent } from "react"

const FormA = () => {

  const [username, setUsername] = useState("")
  const [favColor, setFavColor] = useState("")
  const [check, setCheck] = useState(false)

  const [blur, setBlur] = useState({
    username: false,
    favColor: false,
    check: false
  })

  const handleSubmit = (event : FormEvent) => {
    event.preventDefault()
    // marcar todos los inputs como blur (visitados)
    setBlur({
      username: true,
      favColor: true,
      check: true,
    });
    // validacion previa al envio
    if (username.length >= 4 && favColor !== "" && check) {
      //alert("Formulario enviado correctamente");
      console.log("Formulario enviado correctamente al backend!");
      console.log({username, favColor, check});  
    }
  }

  type Blur = "username" | "favColor"| "check"

  const handlerBlur = (fld:Blur) => {
    setBlur(prev => ({
      ...prev,
      [fld]: true
    }))
  }
  
  return (
    <div className="container mx-auto">
      <form onSubmit={handleSubmit}>
        {/* username */}
        <div className="mb-3">
          <label htmlFor="userName" className="form-label">nombre de usuario</label>
          <input 
          type="text" 
          className={`form-control ${blur.username && (username.length >= 4 ? "is-valid" : "is-invalid")}`}
          id="userName" 
          aria-describedby="usernameHelp"
          onChange={(event) => setUsername(event.target.value)}
          onBlur={() => handlerBlur("username")}
          />
          <div id="usernameHelp" className="valid-feedback">
            Looks good!
          </div>
          <div id="usernameHelp" className="invalid-feedback">
            en nombre deve ser igual o mayor a 4 caracteres.
          </div>
        </div>

        {/* select option */}
        <label className="mb-3">color favorito:
          <select 
          className={`form-select ${blur.favColor && (favColor === ""? "is-invalid": "is-valid")}`} 
          aria-label="Default select example"
          onChange={(event) => setFavColor(event.target.value)}
          onBlur={() => handlerBlur("favColor")}
          >
            <option disabled>Open this select menu</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </select>
          <div className="valid-feedback">
            no tenias colores para hombre?
          </div>
          <div className="invalid-feedback">
            tienes que elegir una opcion, madafaka.
          </div>
        </label>

        {/* checkbox */}
        <div className="form-check">
          <input 
          className={`form-check-input ${blur.check && (check? "is-valid": "is-invalid")}`} 
          type="checkbox" 
          value="" 
          id="checkChecked"
          onChange={() => setCheck((prev) => !prev)}
          onBlur={() => handlerBlur("check")}
            />
          <label className="form-check-label" htmlFor="checkChecked">
            Checked checkbox
            <div className="invalid-feedback">
              deves aceptar los terminos y condiciones.
            </div>
          </label>
        </div>

        {/* btn enviar */}
        <button className="btn btn-primary" type="submit">enviar</button>
      </form>
    </div>
  )
}
export default FormA