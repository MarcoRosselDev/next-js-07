import { useState } from "react"
import Card from "./Card"
import formatTime from "../utils/formatTime"

const Session = () => {

  
  return (
    <Card>
      <div id="break-label" className="card-body">
        <p className='card-text'>Break Length</p>
        <button onClick={() => setCount(prev => prev + 1)} >up</button>
        {timeFormated}
        {count + "count"}
        <button onClick={() => setCount(prev => prev - 1)}>down</button>
      </div>
    </Card>
  )
}
export default Session