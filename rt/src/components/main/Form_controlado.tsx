import { useState, type FormEvent } from "react"

export default function Form_controlado() {

  const [acc, setAcc] = useState(false)
  const [fc, setfc] = useState("red")
  const [username, setUsername] = useState("")

  function handleSubmit(event:FormEvent) {
    event.preventDefault();
    console.log({username, fc, acc});
    
  }

  return (
    <>
    <form onSubmit={handleSubmit}>
      <label>username:
        <input type="text" name="username" onChange={event => setUsername(event.target.value)} />
      </label>
      <label>favorite color
        <select name="color" onChange={event => setfc(event.target.value)}>
          <option value="red">red</option>
          <option value="blue">blue</option>
        </select>
      </label>
      <label>accept
        <input type="checkbox" name="accept" onChange={() => setAcc(prev => !prev)} />
      </label>
      <button type="submit">send</button>
    </form>
    <div>
      <p>fc :{fc}</p>
      <p>un: {username}</p>
      <p>acc :{acc.toString()}</p>
    </div>
    </>
  )
}