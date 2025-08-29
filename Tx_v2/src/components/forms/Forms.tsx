import Cf from "./Cf"
import Ucf from "./Ucf"
import Fx from "./Fx"

const Forms = () => {
  return (
    <>
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
    </>
  )
}
export default Forms