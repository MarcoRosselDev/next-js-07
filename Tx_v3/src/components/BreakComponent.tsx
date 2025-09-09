import { useState } from "react"
import Card from "./Card"
import type { BreakProps } from "../types/BreakProps"
import formatTime from "../utils/formatTime"

const BreakComponent = ({ handleUp, handleDown, myBreak, stop}: BreakProps) => {
  
  const [mystate, setmystate] = useState(myBreak)
  const myStateFormated = formatTime(mystate)

  return (
    <Card>
      <div className="container text-center">
      <div className="row align-items-center">
        <button className={`btn btn-outline-primary col ${stop? "" : "disabled"}`} onClick={() => {
          setmystate(prev => prev + 60)
          handleUp("break")
        }}>up</button>
        <p className="card-text col">{myStateFormated}</p>
        <button className={`btn btn-outline-primary col ${stop? "" : "disabled"}`} onClick={() => {
          handleDown("break")
          setmystate(prev => prev - 60)
        }}>down</button>
      </div>
      </div>
    </Card>
  )
}
export default BreakComponent