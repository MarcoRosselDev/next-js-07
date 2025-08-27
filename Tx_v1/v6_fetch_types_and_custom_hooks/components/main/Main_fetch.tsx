import { useEffect, useState } from "react"

type MyData = {
  userId : number
  id: number
  title: string
  completed: boolean
}

const Main_fetch = () => {

  const [error, setError] = useState<null| string>(null)
  const [data, setData] = useState<null| MyData>(null)
  const [loading, setLoading] = useState(true)
  // el useEffect no puede resivir una funcion async "promesa"
  // solo puede retornar una funcion de limpieza o vacio
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos/2")
    .then(response => {
      if (response.ok) return response.json()
        throw new Error("404 error del sistema")
    })
    .then((d:MyData) => setData(d))
    .catch(event => {
      if (event instanceof Error) {
        return setError(event.message)
      }
      setError("error mas grave!")
    })
    .finally(() => setLoading(false))
  },[])

  if (loading) return <p>Loading...</p>

  return (
    <div>
      {error? (<p>{error}</p>): <pre>{JSON.stringify(data, null, 2)}</pre>}
    </div>
  )
}
export default Main_fetch