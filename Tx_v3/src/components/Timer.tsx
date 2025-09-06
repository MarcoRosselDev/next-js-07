import { useState } from "react"
import Card from "./Card"

const Timer = () => {
  const [count, setCount] = useState(25)
  return (
    <Card>
      <div id="timer-label" className="card-body">
        <p className='card-text'>Break Length</p>
        <button onClick={() => setCount(prev => prev + 1)} >up</button>
        {count}
        <button onClick={() => setCount(prev => prev - 1)}>down</button>
      </div>
    </Card>
  )
}
export default Timer