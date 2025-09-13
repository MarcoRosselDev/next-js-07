//import { useState } from "react"
import type { SessionProps } from "../types/SessionProps"
import Card from "./Card"
//import formatTime from "../utils/formatTime"


const Session = ({ stop , localSession, setLocalSession, setCount, count}: SessionProps) => {

  //const [localSession, setLocalSession] = useState(count)
  //const myStateFormated = formatTime(localSession)

  const handleUpLocal = () => {
    // si es menor o igual a 0 actualizar a 1
    if (count < 60 || count == 0) {
      setLocalSession(1)
      setCount(60)
      return
    }
    const modulo = count % 60
    if (modulo != 0) {
      if (localSession >= 60) {
        setLocalSession(60)
        setCount(60*60)
        return
      }
      setLocalSession(localSession + 1)
      setCount(Math.round(localSession*60) + 60)
      return
    }
    if (localSession >= 60) {
      setLocalSession(60)
      setCount(60*60)
      return
    }
    setLocalSession(localSession + 1)
    setCount(localSession*60 + 60)
  }

  const handleDownLocal = () => {

    if (localSession <= 1) {
      setLocalSession(1)
      setCount(60)
      return
    }

    if (count < 60 || count == 0) {
      setLocalSession(1)
      setCount(60)
      return
    }
    const modulo = count % 60
    if (modulo != 0) {
      setLocalSession(localSession - 1)
      setCount(Math.round(localSession*60) - 60)
      return
    }
    setLocalSession(localSession - 1)
    setCount(localSession*60 - 60)
  }
  return (
    <Card>
      <div className="container text-center">
        <p id="session-label">Session Length</p>
        <div className="row align-items-center">

          <button 
            className={`btn btn-outline-primary col ${stop? "" : "disabled"}`} 
            onClick={() => handleUpLocal()}
            id="session-increment"
            >up</button>
          
          <p className="card-text col " id="session-length">{localSession}</p>

          <button 
            className={`btn btn-outline-primary col ${stop? "" : "disabled"}`} 
            onClick={() =>handleDownLocal()}
            id="session-decrement"
            >down</button>
          
        </div>
      </div>
    </Card>
  )
}
export default Session