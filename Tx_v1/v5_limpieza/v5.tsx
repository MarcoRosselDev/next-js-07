import { useEffect, useState } from "react"

type Doc = {
  userId : number
  id: number
  title: string
  completed: boolean
}

const Main = () => {
  const [doc, setDoc] = useState<null|Doc>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() =>{
    fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then(response => {
        console.log(response);
        if (response.status === 200) {
          return response.json()
        }
        throw new Error(`la media cagaita,--status : ${response.status}`)
      })
      .then(json => {
        setDoc(json)
      })
      .catch(error => console.log(error))
      .finally(() => setLoading(false))
  },[])

  if (loading) return <p>Loading...</p>

  return (
     <div className="container mx-auto">
      <h1>Fetch y useEffect</h1>
      <pre>{JSON.stringify(doc, null, 2)}</pre>
    </div>
  )
}
export default Main