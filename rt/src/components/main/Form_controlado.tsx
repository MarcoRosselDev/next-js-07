import { useState, type FormEvent } from "react"

export default function Form_controlado() {

// Estado para saber si el usuario ya interactuó con cada campo
const [touched, setTouched] = useState({
  username: false,
  color: false,
  accept: false,
});

// Función para marcar como campo "tocado"
// (field: keyof typeof touched) -> forma automática
type Field = "username" | "color" | "accept";
const handleBlur = (field: Field) => {
  setTouched((prev) => ({
    ...prev,
    [field]: true,
  }));
};

const [acc, setAcc] = useState(false)
const [fc, setfc] = useState("")
const [username, setUsername] = useState("")

const handleSubmit = (e: FormEvent) => {
  e.preventDefault();

  // Marca todos como tocados al intentar enviar
  setTouched({
    username: true,
    color: true,
    accept: true,
  });

  // procesar el formulario
  if (username.length >= 3 && fc !== "" && acc) {
    //alert("Formulario enviado correctamente");
    console.log("Formulario enviado correctamente al backend!");
    console.log({acc, fc,username});
  }
};

return (
<div className="container mx-auto">
<form onSubmit={handleSubmit}>

  <label className="mb-3">username:
    <input 
    type="text"
    onChange={event => setUsername(event.target.value)}
    onBlur={() => handleBlur("username")}
    className={ `form-control
    ${
    touched.username &&
    (username.length >= 3 ? "is-valid" : "is-invalid")
    }
    `} 
    />

    <div className="invalid-feedback">
    El nombre de usuario tiene que tener mínimo 3 carácteres
    </div>

  </label>
  
  <label className="mb-3">favorite color
    <select
    onBlur={() => handleBlur("color")}
    onChange={event => setfc(event.target.value)}
    value={fc}
    className={`form-select ${
      touched.color && (fc !== "" ? "is-valid" : "is-invalid")
    }`}
    >
      <option value="" disabled> Choose a color</option>
      <option value="red">Red</option>
      <option value="blue">Blue</option>
      <option value="green">Green</option>
    </select>
    <div className="invalid-feedback">Seleccionar un color</div>
  </label>
  
  
  <label className="mb-3 form-check">accept
    <input 
    type="checkbox"
    onBlur={() => handleBlur("accept")}
    onChange={() => setAcc(prev => !prev)} 
    className={`form-check-input ${
      touched.accept && (acc ? "is-valid" : "is-invalid")
    }`}
    />
  </label>
  <label className="form-check-label">I accept the terms</label>

  <div className="invalid-feedback">Accepta los términos</div>
  <div className="mb-3">
  <button type="submit" className="btn btn-primary">send</button>
  </div>
</form>
<div>
  <p>fc :{fc}</p>
  <p>un: {username}</p>
  <p>acc :{acc.toString()}</p>
</div>
</div>
)
}