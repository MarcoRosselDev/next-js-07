import './App.css'
import Header from './components/header/Header'
import Main from './components/main/Main'

function App() {

  return (
    <>
      <Header />
      <p className="mt-3">
        This is some content that will change appearance with the theme.
      </p>
      <Main />
    </>
  )
}

export default App
