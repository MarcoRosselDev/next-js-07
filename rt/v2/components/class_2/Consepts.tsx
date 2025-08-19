const Concepts = () => {

  const myObject = {
    username: "Marco",
    frutas: [
      {title: "🍑", key : 1}, 
      {title: "🍎", key: 2},
      {title: "🍊", key: 3}],
    age: 32
  }

  return (
    <div>
      <p>{myObject.username}</p>
      <ul>
        {myObject.frutas.map(({key, title}) => (<li key={key}>{title}</li>))}
      </ul>
      <p>{myObject.age}</p>
    </div>
  )
}
export default Concepts