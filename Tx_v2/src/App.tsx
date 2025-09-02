import type { OptionType } from './types/options';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import H from './components/header/H'
import { useState } from 'react';
import Forms from './components/forms/Forms';
import PokeAPI from './components/PokeAPI/PokeAPI';
import Next from './components/Next/Next';
import Context from './components/Context/Context';

function App() {

  const [content, setContent] = useState<OptionType>("context")

  function handleContent(n:OptionType) {
    setContent(n)
  }

  const ContentButton = ({n}: {n:OptionType}) => {
  return (
    <button className='btn btn-sm btn-primary me-2' onClick={() => handleContent(n)}>{n}</button>
  )
  }

  return (
    <div className='container-sm  container-fluid text-left'>
      <div className='container-fluid'>
        <H />
        <ContentButton n="forms" />
        <ContentButton n="pokeAPI" />
        <ContentButton n="next" />
        <ContentButton n="context" />
      </div>
      <div className='container-fluid'>
        <h1>{content} content</h1>
        {content === "forms"? <Forms /> : content === "pokeAPI" ? <PokeAPI /> : content === "context"? <Context /> : <Next /> }
      </div>
    </div>
  )
}

export default App
