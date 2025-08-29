import { useEffect, useState } from "react"

const PokeAPI = () => {

  const [d, setData] = useState(null)
  const [err, setErr] = useState<null|string>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon/1")
    .then(response => {
      if (!response.ok) throw new Error("404 pokemon not founded")
      return response.json()
    })
    .then((data) => setData(data))
    .catch((e : unknown) => {
      if (e instanceof Error) return setErr(e.message)
      return setErr("error desconosido")
    })
    .finally(() => setLoading(false))
  }, [])

  if (loading) return <p>loading...</p>

  return (
    <div>
      {err ? <p>{err}</p>: <pre>{JSON.stringify(d, null, 2)}</pre>}
      {/* fetch api */}
      {/* select the image to print just the shadow of the pokemon */}
      {/* then whit a button and input look if match the name */}
      {/* optional: add a count of wining and lusing matches */}
    </div>
  )
}
export default PokeAPI