import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import Break from './components/Break';
//import './App.css'

function App() {

  return (
    <div className='container'>
      <div className="row">
        <Break />
        <div className="col card" style={{width: '18rem', padding: 0}}>
          <div className='card-body'>

          </div>
        </div>
      </div>
      <div className="row">
        <div className="col card">
          Column
        </div>
      </div>
      {/* <div className="card" style={{width: "18rem;"}}>
        <img src="..." className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card’s content.</p>
        </div>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">An item</li>
          <li className="list-group-item">A second item</li>
          <li className="list-group-item">A third item</li>
        </ul>
        <div className="card-body">
          <a href="#" className="card-link">Card link</a>
          <a href="#" className="card-link">Another link</a>
        </div> 
      </div> */}
    </div>
  )
}

export default App
