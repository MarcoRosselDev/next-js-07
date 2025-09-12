//import { useState } from "react"
import Card from "./Card"
import type { BreakProps } from "../types/BreakProps"
import formatTime from "../utils/formatTime"

const BreakComponent = ({ setBreak, stop, localBreak, setLocalBreak}: BreakProps) => {
  
  //const [localBreak, setmystate] = useState(myBreak)
  const myStateFormated = formatTime(localBreak)

  const handleUpLocal = () => {
  setLocalBreak(prev => {
    if (localBreak < 60 || localBreak == 0) {
      return 60
    }
    const modulo = localBreak % 60        
    if (modulo != 0) {
      return Math.round(localBreak/60) + 60
    }
    return prev + 60
  })
  setBreak(localBreak + 60)
}

const handleDownLocal = () => {
  setLocalBreak(prev => {
    if (localBreak < 60 || localBreak == 0) {
      return 0
    }
    const modulo = localBreak % 60        
    if (modulo != 0) {
      return Math.round(localBreak/60) - 60
    }
    return prev - 60
  })

  if (localBreak <= 60) {
      return setBreak(0)
    }
  setBreak(localBreak - 60)
}

  return (
    <Card>
      <div className="container text-center">
      <div className="row align-items-center">
        <button className={`btn btn-outline-primary col ${stop? "" : "disabled"}`} onClick={() => {          
          handleUpLocal()

        }}>up</button>
        <p className="card-text col">{myStateFormated}</p>
        <button className={`btn btn-outline-primary col ${stop? "" : "disabled"}`} onClick={() => {
          handleDownLocal()
        }}>down</button>
      </div>
      </div>
    </Card>
  )
}
export default BreakComponent