import { useEffect, useState } from "react"
import Card from "./Card"
import formatTime from "../utils/formatTime"
import mp3 from "../assets/audio.mp3"
import type { SessionType } from "../types/SessionType"
import Session from "./Session"
import BreakComponent from "./BreakComponent"

const Timer = () => {

  const [count, setCount] = useState(25*60) // 25 minutos * 60 segundos = 1500
  const [myBreak, setBreak] = useState(5*60) // 25 minutos * 60 segundos = 1500
  const [session, setSession] = useState<SessionType>("count")
  const [stop, setStop] = useState(true)
  const timeFormatedCount = formatTime(count)
  const timeFormatedBreak = formatTime(myBreak)
  const [localSession, setLocalSession] = useState(25)
  const [localBreak, setLocalBreak] = useState(5)

  useEffect(() => {
    const audio = new Audio(mp3);
    audio.currentTime = 0
    audio.id = "beep"
    const intervalId = setInterval(() => {
    if (stop) {
      return () => clearInterval(intervalId);
    }
    if (count === 0) {
      setCount(localSession*60)
      setSession("break")
      audio.play()
      audio.currentTime = 0
      return () => clearInterval(intervalId);
    }
    if (myBreak === 0) {
      setBreak(localBreak*60)
      setSession("count")
      audio.play()
      audio.currentTime = 0
      return () => clearInterval(intervalId);
    }
    
    if (session === "count" && count > 0) {
      setCount(prevCount => prevCount - 1); // Usa la forma funcional para obtener el estado anterior
    }
    if (session === "break" && myBreak > 0) {
      setBreak(prevCout => prevCout - 1)
    }
    }, 1000); // Actualiza cada segundo

    // Limpia el intervalo cuando el componente se desmonta
    return () => clearInterval(intervalId);
  }, [stop, session, count, myBreak, localSession, localBreak]);

  const handleReset = () => {
    // mojorar esto
    setCount(25*60)
    setBreak(5*60)
    setLocalSession(25)
    setLocalBreak(5)
    setSession("count")
    setStop(true)
  }


  return (
    <>
    <div className="row align-items-center">
      <Card>
        <BreakComponent
        myBreak={myBreak}
        setBreak={setBreak} 
        stop={stop} 
        localBreak={localBreak} 
        setLocalBreak={setLocalBreak} />
      </Card>
      <Card>
        <Session
        count={count} 
        setCount={setCount} 
        stop={stop} 
        localSession={localSession} 
        setLocalSession={setLocalSession} />
      </Card>
    </div>
    <Card>
      <div className="card-body">
        <p id="timer-label" className='card-text'>{session === "count"? "Session" : "Break"}</p>
        <p id="time-left" className="card-text">{session === "count" ? timeFormatedCount : timeFormatedBreak}</p>
        <button className="btn btn-primary" id="start_stop" onClick={() => setStop(prev => !prev)} >play or pause</button>
        <button className="btn btn-primary" id="reset" onClick={handleReset}>reset</button>
      </div>
    </Card>
    </>
  )
}
export default Timer