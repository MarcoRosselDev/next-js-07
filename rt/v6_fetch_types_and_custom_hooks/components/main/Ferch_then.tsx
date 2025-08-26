//import {useFetchS} from "../../hooks/useFetch_async"
import {useFetchT} from "../../hooks/useFetch_then"

type Typ = {
  userId : number
  id: number
  title: string
  completed: boolean
}

const Ferch_then = () => {

  const {data, loading, error} = useFetchT<Typ>("https://jsonplaceholder.typicode.com/todos/60000000")

  if (loading) return <p>loading...</p>

  return (
    <div>
      {error? (<p>{error}</p>): <pre>{JSON.stringify(data, null, 2)}</pre>}
    </div>
  )
}
export default Ferch_then