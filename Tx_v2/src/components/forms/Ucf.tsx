import { useRef, type FormEvent } from "react"

const Ucf = () => {

  const myRef = useRef<null|HTMLFormElement>(null)
  
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    if (!myRef.current) return

    const formData =  new FormData(myRef.current)
    const username = formData.get("name")
    const terms = !!formData.get("terms")
    const option = formData.get("option")
    console.log({username, terms, option});
  }

  return (
    <div>
      <h1>Uncontroled form</h1>
    <form 
    onSubmit={handleSubmit}
    ref={myRef}
    className="container">

      {/* name */}
      <div className="mb-3">
        <label htmlFor="usernameId" className="form-label">User name</label>
        <input 
        type="text" 
        className="form-control" 
        id="usernameId" 
        aria-describedby="username_input"
        name="name" 
        />
        {/* <div id="username_input" className="form-text">hola mundo</div> */}
      </div>
      
      {/* favorite color */}
      <label htmlFor="optionId" className="form-label">Select an option</label>
      <select 
      className="form-select form-select-sm mb-3" 
      aria-label="Small select example"
      name="option"
      id="optionId"
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
        id="checkDefault" />
        <label className="form-check-label" htmlFor="checkDefault">
          Accept terms and conditions
        </label>
      </div>
      
      {/* submit button */}
      <button type="submit" className="btn btn-primary">send</button>
    </form>
    </div>
  )
}
export default Ucf