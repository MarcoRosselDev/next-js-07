import { useEffect, useState } from "react"
import Card from "./Card"
import formatTime from "../utils/formatTime"
import mp3 from "../assets/audio.mp3"
import type { SessionType } from "../types/SessionType"
import Session from "./Session"
import BreakComponent from "./BreakComponent"

const Timer = () => {

  const [count, setCount] = useState(6) // 25 minutos * 60 segundos = 1500
  const [myBreak, setBreak] = useState(10) // 25 minutos * 60 segundos = 1500
  const [session, setSession] = useState<SessionType>("count")
  const [stop, setStop] = useState(true)
  const timeFormatedCount = formatTime(count)
  const timeFormatedBreak = formatTime(myBreak)

  useEffect(() => {
    const audio = new Audio(mp3);
    audio.currentTime = 0
    const intervalId = setInterval(() => {
    if (stop) {
      return () => clearInterval(intervalId);
    }
    console.log({
      session,count, myBreak
    });
    if (count === 0) {
      setCount(prevCount => prevCount - 1)
      console.log("cero");
      setSession("break")
      audio.play()
      audio.currentTime = 0
      return () => clearInterval(intervalId);
    }
    if (myBreak === 0) {
      console.log("cero break");
      audio.play()
      audio.currentTime = 0
      setStop(true)
      //setBreak(prevCout => prevCout - 1)
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
    setCount(10)
    setBreak(5)
    setSession("count")
    handlePause()
  }

 const handleUp = (time:SessionType) => {
  if (time === "break") {
    setBreak(prev => prev + 60)
  }
  if (time === "count") {
    setCount(prev => prev + 60)
  }
    
 }
 const handleDown = (time : SessionType) => {

  if (count <= 0 || myBreak <= 0) {
    return
  }
  if (time === "break") {
    setBreak(prev => prev - 60)
  }
  if (time === "count") {
    setCount(prev => prev - 60)
  }
 }

  return (
    <>
    <div className="row align-items-center">
      <Card>
        <p className='card-text'>Session</p>
        <Session count={count} handleDown={handleDown} handleUp={handleUp} stop={stop}/>
      </Card>
      <Card>
        <p className='card-text'>break</p>
        <BreakComponent myBreak={myBreak} handleDown={handleDown} handleUp={handleUp} stop={stop}/>
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