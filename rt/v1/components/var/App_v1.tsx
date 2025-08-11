import './App.css'
import Header from './components/header/Header'
import Main from './components/main/Main'
import Tablas from './components/tablas'

function App() {

  return (
    <>
      <Header />
      <p className="mt-3">
        This is some content that will change appearance with the theme.
      </p>
      <p className="text-danger">
        {/* visually : visually-hidden
        * para ser manejados con algun evento como focus o previo a una edicion */}
        <span className="visually-hidden">Danger: </span>
        This action is not reversible
      </p>
      <a className="visually-hidden-focusable" href="#content">Skip to main content</a>
      <Main />
      <div className="container text-center">
        <div className="row gy-5">
          <div className="col">
            1 of 3
          </div>
          <div className="col-6">
            2 of 3 (wider)
          </div>
          <div className="col">
            3 of 3
          </div>
        </div>
        <div className="row gy-5">
          <div className="col">
            1 of 3
          </div>
          <div className="col-5">
            2 of 3 (wider)
          </div>
          <div className="col">
            3 of 3
          </div>
        </div>
      </div>
      {/* another one */}
      <div className="container overflow-hidden text-center">
        <div className="row gy-5">
          <div className="col-6">
            <div className="p-3">Custom column padding</div>
          </div>
          <div className="col-6">
            <div className="p-3">Custom column padding</div>
          </div>
          <div className="col-6">
            <div className="p-3">Custom column padding</div>
          </div>
          <div className="col-6">
            <div className="p-3">Custom column padding</div>
          </div>
        </div>
      </div>
      {/* fugure */}
      <figure className="text-end">
        <blockquote className="blockquote">
        <p>A well-known quote, contained in a blockquote element.</p>
        </blockquote>
        <figcaption className="blockquote-footer">
        Someone famous in <cite title="Source Title">Source Title</cite>
        </figcaption>
      </figure>

      <Tablas />
    </>
  )
}

export default App
