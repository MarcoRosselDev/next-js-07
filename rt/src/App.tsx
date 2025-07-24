/** @format */

import { useRef, type FormEvent } from "react";
import "./App.css";

function App() {

  // input ref
  const iref = useRef<HTMLInputElement>(null);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const input = iref.current?.value;
    console.log(input);
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="patapin" ref={iref} />
      <button type="submit">send</button>
    </form>
  )
}

export default App;
