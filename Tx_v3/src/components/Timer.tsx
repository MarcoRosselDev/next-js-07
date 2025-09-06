import { useState } from "react"
import Card from "./Card"
import formatTime from "../utils/formatTime"

const Timer = () => {
  //const [timer, setTimer] = useState(count * 60)

  const [count, setCount] = useState(25*60) // 25 minutos * 60 segundos = 1500
  const timeFormated = formatTime(count)

  setInterval(() => {
    //setTimer(() => timer - 1)
  }, 1000);

  return (
    <Card>
      <div id="timer-label" className="card-body">
        <p className='card-text'>Break Length</p>
        <p className="card-text">{timeFormated}</p>
        <button onClick={() => setCount(prev => prev + 1)} >play</button>
        <button onClick={() => setCount(prev => prev - 1)}>pause</button>
        <button onClick={() => setCount(prev => prev - 1)}>reset</button>
      </div>
    </Card>
  )
}
export default Timer