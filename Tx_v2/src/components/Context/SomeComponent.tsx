import { useContext, type FormEvent } from "react"
import { LevelContext } from "./LevelContext"

const SomeComponent = () => {

  const {user, setUser} = useContext(LevelContext)
  
  const changeUser = (e : FormEvent) => {
    e.preventDefault()
    setUser({
      username: "pancho",
      age: 22
    })
  }

  return (
    <div>
      <p>{user.username}</p>
      <p>{user.age}</p>
      <button onClick={changeUser}>click me</button>
    </div>
  )
}
export default SomeComponent