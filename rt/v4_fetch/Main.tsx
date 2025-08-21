import { useEffect, useState } from "react"

type Info = {
  complete: boolean
  id: number
  title: string
  userId: number
}

const Main = () => {

  const [info, setInfo] = useState<null | Info>(null)
  const [loading, setLoading] = useState(true)
  
  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then(response => response.json())
      .then(json => {
        setInfo(json)
        setLoading(false)
      })
  },[])

  const Loading = () => (<p>loading...</p>)
  if (loading || info === null) <Loading />

  return (
    <main className="container">
      <p>{info?.complete ? "complatado": "incompleto"}</p>
      <p>{info?.id}</p>
      <p>{info?.title}</p>
      <p>{info?.userId}</p>
    </main>
  )
}
export default Main