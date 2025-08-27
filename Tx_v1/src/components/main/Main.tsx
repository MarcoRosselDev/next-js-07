import useFetchTx from "../../hooks/useFetchTx"

type Tx = {
  userId : number
  id: number
  title: string
  completed: boolean
}

const App = () => {

  const {data, loading, error} = useFetchTx<Tx>("https://jsonplaceholder.typicode.com/todos/3")
  
  if (loading) return <p>loading...</p>
  
  return (
    <div className="container mx-auto">
      {error? (<p>{error}</p>): <pre>{JSON.stringify(data, null, 2)}</pre>}
    </div>
  );
};

export default App;