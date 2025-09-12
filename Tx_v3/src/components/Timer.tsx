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
  const [localSession, setLocalSession] = useState(25*60)
  const [localBreak, setLocalBreak] = useState(5*60)

  useEffect(() => {
    const audio = new Audio(mp3);
    audio.currentTime = 0
    const intervalId = setInterval(() => {
    if (stop) {
      return () => clearInterval(intervalId);
    }
    if (count < 0) {
      setCount(0)
      console.log("cero");
      setSession("break")
      audio.play()
      audio.currentTime = 0
      return () => clearInterval(intervalId);
    }
    if (myBreak < 0) {
      console.log("cero break");
      setBreak(0)
      audio.play()
      audio.currentTime = 0
      setStop(true)
      return () => clearInterval(intervalId);
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

  const handleReset = () => {
    // mojorar esto
    setCount(25*60)
    setBreak(5*60)
    setLocalSession(25*60)
    setLocalBreak(5*60)
    setSession("count")
    handlePause()
  }


  return (
    <>
    <div className="row align-items-center">
      <Card>
        <p className='card-text'>Session</p>
        <Session setCount={setCount} stop={stop} localSession={localSession} setLocalSession={setLocalSession} />
      </Card>
      <Card>
        <p className='card-text'>break</p>
        <BreakComponent setBreak={setBreak} stop={stop} localBreak={localBreak} setLocalBreak={setLocalBreak} />
      </Card>
    </div>
    <Card>
      <div id="timer-label" className="card-body">
        <p className='card-text'>{session === "count"? "Session" : "break session"}</p>
        <p className="card-text">{session === "count" ? timeFormatedCount : timeFormatedBreak}</p>
        <button className="btn btn-primary" onClick={handlePlay} >play</button>
        <button className="btn btn-primary" onClick={handlePause}>pause</button>
        <button className="btn btn-primary" onClick={handleReset}>reset</button>
      </div>
    </Card>
    </>
  )
}
export default Timer