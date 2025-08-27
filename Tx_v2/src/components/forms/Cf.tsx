import { useState, type FormEvent } from "react"

const Cf = () => {
  const [username, setUsername] = useState("")
  const [option, setOption] = useState("")
  const [terms, setTerms] = useState(false)
  
  const handleSubmit = (e:FormEvent) => {
    e.preventDefault();
    console.log({username, option, terms});
  }

  return (
    <div>
      <h1>Controled form</h1>
      <form onSubmit={handleSubmit}>

        {/* name */}
      <div className="mb-3">
        <label htmlFor="usernameId" className="form-label">User name</label>
        <input 
        type="text" 
        className="form-control" 
        id="usernameId" 
        aria-describedby="username_input"
        onChange={(e) => setUsername(e.target.value)}
        />
        {/* <div id="username_input" className="form-text">hola mundo</div> */}
      </div>
      
      {/* favorite color */}
      <label htmlFor="optionId" className="form-label">Select an option</label>
      <select 
      className="form-select form-select-sm mb-3" 
      aria-label="Small select example"
      id="optionId"
      onChange={(e) => setOption(e.target.value)}
      >
        <option defaultChecked value="" >Open this select menu</option>
        <option value="1">One</option>
        <option value="2">Two</option>
        <option value="3">Three</option>
      </select>

      {/* terms */}
      <div className="form-check mb-3">
        <input 
        className="form-check-input" 
        type="checkbox" 
        name="terms"
        id="checkDefault" 
        onChange={() => setTerms(prev => !prev)}
        />
        <label className="form-check-label" htmlFor="checkDefault">
          Accept terms and conditions
        </label>
      </div>

      <button className="btn btn-primary">send</button>
      </form>
    <div>
      <pre>{JSON.stringify({username, terms, option}, null, 2)}</pre>
    </div>
    </div>
  )
}
export default Cf