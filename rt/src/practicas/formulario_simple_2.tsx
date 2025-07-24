/** @format */
import { useRef, type FormEvent } from "react";
import "./App.css";

function App() {

  const refInput = useRef<HTMLInputElement>(null)
  
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const inputValue = refInput.current?.value;
    console.log(inputValue);
  }

  return (
  <form onSubmit={handleSubmit}>
    <input type="text" name="patapin" ref={refInput}/>
    <button type="submit">send</button>
  </form>
  )
}

export default App;
