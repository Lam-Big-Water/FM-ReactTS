import { CharacterType, fetchCharacter } from './util/characters';
import Card from './components/Card';
import './style.scss';
import { useEffect, useState } from 'react';




const App = () => {
    const [character, setCharacter] = useState<CharacterType | null>(null);

    useEffect(() => {
        fetchCharacter().then(c => setCharacter(c))
    }, [])

    return (
      <div className='app'>
        {
           character ? <Card character={character}/> : <p>Loading...</p>
        }
      </div>
    )
  }

export default App