/** @format */
import { useState, type FormEvent } from "react";
import "./App.css";

// controlled components (useState to do that)
function App() {  
  // estados controlados (useState)
  const [color, setcolor] = useState("")
  const [ch, setch] = useState(false)
  const [name, setname] = useState("")

  const hs = (e: FormEvent) => {
    e.preventDefault()
    console.log(color, ch, name);
  }

  return (
    <>
      {/* veneficio:
          podemos realizar validaciones inmediatas cuando el usuario este escribiendo en un input
          por ejemplo si el lenght es menor a 6 le enviamos un mensaje inmediato de que escriba mas caracteres
          tambien podemos validar el correo valido
          o podemos relisar una busqueda en la db mientras esta tipeando.
      */}
      <form onSubmit={hs}>
        <label>
          name:
          <input type="text" onChange={e => setname(e.target.value)} value={name} />
        </label>
        <label>
          favorite color:
          <select onChange={e => setcolor(e.target.value)} value={color}>
            <option disabled value="">select ... </option>
            <option value="red" >red</option>
            <option value="blue" >blue</option>
            <option value="green" >green</option>
          </select>
        </label>
        <label>
          accept terms
          {/* value={ch} xxx el type checkbox acepta checked en su lugar
          vendria siendo el unico type input diferente */}
          <input 
          type="checkbox" 
          checked={ch}
          onChange={() => setch(prev => !prev)}
          />
        </label>
        <button type="submit">send</button>
      </form>
      <div>
        <p>name: {name}</p>
        <p>color: {color}</p>
        <p>accept: {ch.toString()}</p>
      </div>
    </>
  )
}

export default App;
