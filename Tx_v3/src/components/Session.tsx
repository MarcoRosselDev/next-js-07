//import { useState } from "react"
import type { SessionProps } from "../types/SessionProps"
import Card from "./Card"
import formatTime from "../utils/formatTime"


const Session = ({ stop , localSession, setLocalSession, setCount}: SessionProps) => {

  //const [localSession, setLocalSession] = useState(count)
  const myStateFormated = formatTime(localSession)

    const handleUpLocal = () => {
      setLocalSession(prev => {
        if (localSession < 60 || localSession == 0) {
          return 60
        }
        const modulo = localSession % 60        
        if (modulo != 0) {
          return Math.round(localSession/60) + 60
        }
        return prev + 60
      })
      
      setCount(localSession + 60)
    }

    const handleDownLocal = () => {
      setLocalSession(prev => {
        if (localSession < 60 || localSession == 0) {
          return 0
        }
        const modulo = localSession % 60        
        if (modulo != 0) {
          return Math.round(localSession/60) - 60
        }
        return prev - 60
      })
      
      console.log(localSession);
      if (localSession <= 60) {
        return setCount(0)
      }
      setCount(localSession - 60)
    }
  return (
    <Card>
      <div className="container text-center">
      <div className="row align-items-center">
        <button className={`btn btn-outline-primary col ${stop? "" : "disabled"}`} onClick={() => {
          //setmystate(prev => prev + 60)
          //handleUp("count")
          handleUpLocal()
        }}>up</button>
        <p className="card-text col">{myStateFormated}</p>
        <button className={`btn btn-outline-primary col ${stop? "" : "disabled"}`} onClick={() => {
          //handleDown("count")
          handleDownLocal()
          //setmystate(prev => prev - 60)
        }}>down</button>
      </div>
      </div>
    </Card>
  )
}
export default Session