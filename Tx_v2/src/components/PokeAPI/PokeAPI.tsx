import { useEffect, useState } from "react"
import random_number from "../../utils/random_number"
import validation_input_strings_equal from "../../utils/validation_input_strings_equal"

const PokeAPI = () => {

  const [err, setErr] = useState<null|string>(null)
  const [loading, setLoading] = useState(true)
  const [art, setArt] = useState("")
  const [poke_name, setPoke_name] = useState("")
  const [playing, setPlaying] = useState(false)
  const [userInput, setUserInput] = useState("")
  const [result, setResult] = useState(false)
  
  useEffect(() => {
    const number = random_number(1, 145)
    fetch(`https://pokeapi.co/api/v2/pokemon/${number}`)
    .then(response => {
      if (!response.ok) throw new Error("404 pokemon not founded")
      return response.json()
    })
    .then((data) => {
      const urlImg = data.sprites.other["official-artwork"]["front_default"]
      const name = data.name
      setPoke_name(name)
      // to test the game!
      console.log(name, "hola")
      setArt(urlImg)
    })
    .catch((e : unknown) => {
      if (e instanceof Error) return setErr(e.message)
      return setErr("error desconosido")
    })
    .finally(() => {
      setLoading(false)
    })
  }, [])

  const handler_player = () => {
    const check = validation_input_strings_equal(userInput, poke_name)
    setPlaying(prev => !prev)
    return check ? setResult(true): setResult(false)
  }

  if (loading) return <p>loading...</p>
  if (err) return <p>{err}</p>

  return (
    <div>
      <img 
      src={art}
      alt="pokemon image" 
      style={{
        width: 300,
        filter: playing?  "none": "brightness(0)",
        transition: "filter 0.3s ease-in-out"
      }}
      />
      <h1>{playing? `es ${poke_name}`: "quien es ese pokemon?"}</h1>
      <div>
        <input 
        onChange={(e) => setUserInput(e.target.value)}
        type="text"
         />
        <button className="btn btn-primary" onClick={() => handler_player()}>show pokemon</button>
      </div>
      {playing && (result ? <p>ganaste</p>:  <p>perdiste</p>)}
      {/* {err ? <p>{err}</p>: <pre>{JSON.stringify(d, null, 2)}</pre>} */}
      {/* fetch api */}
      {/* select the image to print just the shadow of the pokemon */}
      {/* then whit a button and input look if match the name */}
      {/* optional: add a count of wining and lusing matches */}
    </div>
  )
}
export default PokeAPI