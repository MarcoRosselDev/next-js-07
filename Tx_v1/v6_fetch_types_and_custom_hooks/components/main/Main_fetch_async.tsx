import {useFetchS} from "../../hooks/useFetch_async"

type MyData = {
  userId : number
  id: number
  title: string
  completed: boolean
}



const Main_fetch_async = () => {
  const {data, loading, error} = useFetchS<MyData>("https://jsonplaceholder.typicode.com/todos/4")

  //"https://jsonplaceholder.typicode.com/todos/2"

  if (loading) return <p>loading...</p>

  return (
    <div>
      {error? (<p>{error}</p>): <pre>{JSON.stringify(data, null, 2)}</pre>}
    </div>
  )
}
export default Main_fetch_async