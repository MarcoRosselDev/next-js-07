import { useState, type FormEvent } from "react"

const Cf = () => {
  const [username, setUsername] = useState("")
  const [option, setOption] = useState("")
  const [terms, setTerms] = useState(false)

  const [blur, setBlur] = useState({
    username: false,
    option: false,
    terms: false
  })
  
  const handleSubmit = (e:FormEvent) => {
    e.preventDefault();
    setBlur({
      username: true,
      option: true,
      terms: true
    })
    
    if (username.length < 4) return
    if (!terms) return
    if (option === "") return
    console.log({username, option, terms});
  }

  const handlerBlur = (t: string) => {
    setBlur(prev => ({
      ...prev,
      [t]: true
    }))
  }

  return (
    <div>
      <h1>Controled form</h1>
      <form onSubmit={handleSubmit}>

        {/* username */}
      <div className="mb-3">
        <label htmlFor="usernameId" className="form-label">User name</label>
        <input 
        
        type="text" 
        className={`form-control ${blur.username && (username.length >= 4 ?  "is-valid": "is-invalid")}`}
        id="usernameId" 
        aria-describedby="username_input"
        onChange={(e) => setUsername(e.target.value)}
        onBlur={() => handlerBlur("username")}
        />
        <div className="valid-feedback">Looks good!</div>
        <div className="invalid-feedback">Your username is too chort, it has to be almost 4 characters longer.</div>
      </div>
      
      {/* favorite color */}
      <label htmlFor="optionId" className="form-label">Select an option
      <select 
      
      className={`form-select form-select-sm mb-3 ${blur.option && (option != "" ? "is-valid": "is-invalid")}`} 
      aria-label="Small select example"
      id="optionId"
      onChange={(e) => setOption(e.target.value)}
      onBlur={() => handlerBlur("option")}
      >
        <option defaultChecked value="" >Open this select menu</option>
        <option value="1">One</option>
        <option value="2">Two</option>
        <option value="3">Three</option>
      </select>
      <div className="invalid-feedback">Please choose a username.</div>
      <div className="valid-feedback">Looks good!</div>
      <div className="invalid-feedback">Your should select one option.</div>
      </label>

      {/* terms */}
      <div className="form-check mb-3">
        <input 
        
        className={`form-check-input ${blur.terms && (terms? "is-valid": "is-invalid")}`} 
        type="checkbox" 
        name="terms"
        id="termsCheckId" 
        onChange={() => setTerms(prev => !prev)}
        onBlur={() => handlerBlur("terms")}
        />
        <label className="form-check-label" htmlFor="termsCheckId">Accept terms and conditions</label>
        <div className="valid-feedback">Looks good!</div>
        <div className="invalid-feedback">Your should accept the terms to continue.</div>
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