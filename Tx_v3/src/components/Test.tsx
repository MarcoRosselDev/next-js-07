import mp3 from "../assets/audio.mp3"
console.log(mp3, "from component");


const Test = () => {

  const audio = new Audio(mp3)

  function handle_play() {
    audio.play()
  }

  return (
    <div>
      <button onClick={handle_play} >play</button>
    </div>
  )
}
export default Test