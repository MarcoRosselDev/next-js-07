/** @format */
import { useState, type FormEvent } from "react";
import "./App.css";

// controlled components (useState to do that)
function App() {

  const [pr, setpr] = useState("hi")

  const handleSubmit = (e : FormEvent) => {
    e.preventDefault();
    console.log(pr);
  }

  return (
  <>
    <form onSubmit={handleSubmit}>
      <input type="text" onChange={e => setpr(e.target.value)} value={pr}/>
      <button type="submit">send</button>
    </form>
    <p>{pr}</p>
  </>
  )
}

export default App;
