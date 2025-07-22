/** @format */

/* ejemplo de formulario no controlado

constrolado y no controlado significa que utilizamos o no el estado de los inputs
para mostrar inmediatamente algo al usuario mientras esta completando el form
el form no controlado es util para forms largos donde se hace muy pasado mantener el 
estado de todos los inputs.
el controlado es util para mostrar lo que se esta ingresando.

function App() {
  return (
    <form>
      <input type='text' name='tutum-sahur' />
      <button type='submit'>sumbit</button>
    </form>
  );
}

este codigo simple envia los datos form a una url que no se encuentra  
por lo tanto se envian aqui mismo:
  http://localhost:5173/?tutum-sahur=aaa

*/

import { useRef, type FormEvent } from "react";
import "./App.css";

function App() {
  const miReff = useRef<HTMLInputElement>(null);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // the ? esta preguntndo si existe current entonce acceder a .value
    const data = miReff.current?.value; 
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type='text' name='tutum-sahur' ref={miReff} />
      <button type='submit'>sumbit</button>
    </form>
  );
}

export default App;
