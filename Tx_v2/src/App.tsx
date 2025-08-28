import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import H from './components/header/H'
import Ucf from './components/forms/Ucf';
import Cf from './components/forms/Cf';
import Fx from './components/Fx';

function App() {

  return (
    <div className='container-sm  container-fluid text-left'>
      <H />
      <h1>Goals</h1>
      <p>I would like to rebuild the controlled and uncontrolled forms, by building them again</p>
      <p>Then, I would like to work with the fetch API again, and practice all from scratch</p>
      <p>Finally, build a custom Hook for that fetch funcionality.</p>
      <div className="container">
        <div className="row">
          <div className="col">
          {/* Fetch */}
          <Fx />
          </div>
          <div className="col">
          {/* Uncontrolled Form */}
          <Ucf />
          </div>
          <div className="col">
          {/* Controlled Form */}
          <Cf />
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
