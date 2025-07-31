import './App.css'
import Header from './components/header/Header'
import MyForm from './MyForm'

function App() {

  return (
    <>
      <Header />
      <p className="mt-3">
        This is some content that will change appearance with the theme.
      </p>
      <MyForm />
    </>
  )
}

export default App
