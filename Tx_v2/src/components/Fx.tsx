import FxHook from "./FxHook"

type Z = {
  userId : number
  id: number
  title: string
  completed: boolean
}

const Fx = () => {

  const {data, loading, Er} = FxHook<Z>("https://jsonplaceholder.typicode.com/todos/7")
  
  if(loading) return <div><h1>Loading...</h1></div>

  return (
    <div>
      <h1>Fetch using a custom hook</h1>
      {Er ? (<p>{Er}</p>) : (<pre>{JSON.stringify(data, null, 2)}</pre>)}
    </div>
  )
}
export default Fx