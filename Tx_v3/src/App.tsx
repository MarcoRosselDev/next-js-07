import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
//import Break from './components/Break';
//import Session from './components/Session';
import Head from './components/header/Head';
import Timer from './components/Timer';
//import './App.css'

function App() {

  return (
    <div className='container text-center'>
      <Head />
      <h1>25 + 5 Clock</h1>
      <div className="row">
        {/* <Break />
        <Session /> */}
      </div>
      <div className="row">
        <Timer />
      </div>
    </div>
  )
}

export default App
