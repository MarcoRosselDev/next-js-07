import { useEffect, useState } from "react"
import Card from "./Card"
import formatTime from "../utils/formatTime"

type Session = "count" | "break"

const Timer = () => {
  //const [timer, setTimer] = useState(count * 60)

  const [count, setCount] = useState(10) // 25 minutos * 60 segundos = 1500
  const [myBreak, setBreak] = useState(5) // 25 minutos * 60 segundos = 1500
  const [session, setSession] = useState<Session>("count")
  const [stop, setStop] = useState(true)
  const timeFormatedCount = formatTime(count)
  const timeFormatedBreak = formatTime(myBreak)

  useEffect(() => {
    const intervalId = setInterval(() => {
    if (stop) {
      return () => clearInterval(intervalId);
    }
    if (count <= 0) {
      setSession("break")
    }
    if (myBreak <= 0) {
      setStop(true)
      // do more staf
    }
    if (session === "count") {
      setCount(prevCount => prevCount - 1); // Usa la forma funcional para obtener el estado anterior
    } 
    if (session === "break") {
      setBreak(prevCout => prevCout - 1)
    }
    }, 1000); // Actualiza cada segundo

    // Limpia el intervalo cuando el componente se desmonta
    return () => clearInterval(intervalId);
  }, [stop, session, count, myBreak]);
  
  const handlePause = () => {
    setStop(true)
  }

  const handlePlay = () => {
    setStop(false)
  }

  return (
    <Card>
      <div id="timer-label" className="card-body">
        <p className='card-text'>Break Length</p>
        <p className="card-text">{session === "count" ? timeFormatedCount : timeFormatedBreak}</p>
        <button onClick={handlePlay} >play</button>
        <button onClick={handlePause}>pause</button>
        <button onClick={() => setCount(25*60)}>reset</button>
      </div>
    </Card>
  )
}
export default Timer