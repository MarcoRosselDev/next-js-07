//import { useState } from "react"
import Card from "./Card"
import type { BreakProps } from "../types/BreakProps"
//import formatTime from "../utils/formatTime"

const BreakComponent = ({ setBreak, stop, localBreak, setLocalBreak, myBreak}: BreakProps) => {
  
  //const [localBreak, setmystate] = useState(myBreak)
  //const myStateFormated = formatTime(localBreak)

  const handleUpLocal = () => {
    if (myBreak < 60 || myBreak == 0) {
      setLocalBreak(1)
      setBreak(60)
      return
    }
    const modulo = myBreak % 60
    if (modulo != 0) {
      if (localBreak >= 60) {
        setLocalBreak(60)
        setBreak(60*60)
        return
      }
      setLocalBreak(localBreak + 1)
      setBreak(Math.round(localBreak*60) + 60)
      return
    }
    if (localBreak >= 60) {
      setLocalBreak(60)
      setBreak(60*60)
      return
    }
    setLocalBreak(localBreak + 1)
    setBreak(localBreak*60 + 60)
  }

const handleDownLocal = () => {
  if (localBreak <= 1) {
    setLocalBreak(1)
    setBreak(60)
    return
  }

  if (myBreak < 60 || myBreak == 0) {
    setLocalBreak(1)
    setBreak(60)
    return
  }
  const modulo = myBreak % 60
  if (modulo != 0) {
    setLocalBreak(localBreak - 1)
    setBreak(Math.round(localBreak*60) - 60)
    return
  }
  setLocalBreak(localBreak - 1)
  setBreak(localBreak*60 - 60)
}

  return (
    <Card>
      <div className="container text-center" id="break-label">
        <p id="break-label">Break Length</p>
        <div className="row align-items-center">

          <button 
            className={`btn btn-outline-primary col ${stop? "" : "disabled"}`} 
            onClick={() => handleUpLocal()}
            id="break-increment"
            >up</button>

          <p className="card-text col" id="break-length">{localBreak}</p>
          
          <button 
            className={`btn btn-outline-primary col ${stop? "" : "disabled"}`} 
            onClick={() => handleDownLocal()}
            id="break-decrement"
            >down</button>
        
        </div>
      </div>
    </Card>
  )
}
export default BreakComponent