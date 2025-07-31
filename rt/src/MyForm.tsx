import type { FormEvent } from "react"

export default function MyForm () {

  const handleSubmit = (e :FormEvent) => {
    e.preventDefault()
    console.log();
  }

  return (
    <form onSubmit={handleSubmit}>
      <select className="form-select" aria-label="Default select example">
        <option selected>Open this select menu</option>
        <option value="1">One</option>
        <option value="2">Two</option>
        <option value="3">Three</option>
      </select>
    </form>
  )
}