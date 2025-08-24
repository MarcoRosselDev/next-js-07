import { useEffect, useState } from "react"

type MyData = {
userId : number
id: number
title: string
completed: boolean
}

const useFetch = async (setData:(d:MyData)=>void, setError: ()=> void) => {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/todos/2")
    if (response.ok) {
      const json : MyData = await response.json()
      setData(json)
    }
    throw new Error("404 not found")
  } catch (e) {
    if(e instanceof Error) setError()
  }

}

const Main_fetch_async = () => {

  const [error, setError] = useState<null| string>(null)
  const [data, setData] = useState<null| MyData>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    useFetch(setData, setError)
  },[])

  return (
    <div>
      {error? (<p>{error}</p>): <pre>{JSON.stringify(data, null, 2)}</pre>}
    </div>
  )
}
export default Main_fetch_async