import { useState, type FormEvent } from "react"

const Ejercicio_2 = () => {

  const [favoriteColor, setFavoriteColor] = useState("")
  const [username, setUsername] = useState("")
  const [terminos, setTerminos] = useState(false)
  const [blur, setBlur] = useState({
    favoriteColor: false,
    username: false,
    terminos: false
  })

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault()
    // activar todos los validadores para enviar su respectivo mensaje
    setBlur({
      favoriteColor: true,
      username: true,
      terminos: true
    })
    if (username.length <=3) return
    if (!terminos) return
    if (favoriteColor === "") return
    console.log({favoriteColor, username, terminos});
  }

  type Property = "favoriteColor" | "username" | "terminos"

  const handlerBlur = (p: Property) => {
    setBlur(prev => ({
      ...prev,
      [p]: true
    }))
  }

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        {/* input nombre de usuario */}
        <div className="mb-3">
          <label className="form-label">Nombre de usuario
          <input 
          type="text" 
          className={`form-control ${blur.username && (username.length >= 4? "is-valid": "is-invalid")}`}
          aria-describedby="usernameHelp"
          placeholder="nombre..."
          onChange={(event) => setUsername(event.target.value)}
          onBlur={() => handlerBlur("username")}
          />
          <div className="valid-feedback">Bien!</div>
          <div className="invalid-feedback">Porfavor escoje un nombre de usuario.</div>
          <div id="usernameHelp" className="form-text">Tu informacion esta a salvo.</div>
          </label>
        </div>

        {/* selection */}
        <label> color favorito

        <select 
        className={`form-select ${blur.favoriteColor && (favoriteColor !== ""? "is-valid": "is-invalid")}`} 
        aria-label="Default select example"
        value={favoriteColor}
        onChange={(event) => setFavoriteColor(event.target.value)}
        onBlur={() => handlerBlur("favoriteColor")}
        >
          <option value=""defaultValue="" disabled>Selecciona tu color favorito</option>
          <option value="rojo">rojo</option>
          <option value="azul">azul</option>
          <option value="verde">verde</option>
        </select>
        <div className="valid-feedback">Bien!</div>
        <div className="invalid-feedback">Porfavor escoje tu color favorito.</div>
        </label>
        
        {/* input type checkbox */}
        <div className="form-check">
          <label className="form-check-label">
          <input 
          className={`form-check-input ${blur.terminos &&(terminos? "is-valid": "is-invalid")}`}
          type="checkbox" 
          value=""
          onChange={() => setTerminos(prev => !prev)}
          onBlur={() => handlerBlur("terminos")}
          />
            aceptar terminos y condiciones
            <div className="valid-feedback">Bien!</div>
            <div className="invalid-feedback">Porfavor acepta los terminos y condiciones.</div>
          </label>
        </div>

        {/* btn enviar */}
        <button
         className="btn btn-primary"
         type="submit">enviar</button>
      </form>
      <p>{username}</p>
      <p>{favoriteColor}</p>
      <p>{terminos.toString()}</p>
    </div>
  )
}
export default Ejercicio_2

/* crear el formulario de ayer sin mirar nunguna ayuda */