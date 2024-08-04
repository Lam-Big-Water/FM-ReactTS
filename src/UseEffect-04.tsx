import {useState, useEffect} from 'react';

const App = () => {
  return (
    <div>
      <h1>TS-useEffect</h1>
      <Counter />
    </div>
  )
}

const Counter = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      setCount(count + 1)
    }, 1000)
  }, [count])


  return (
    <h2>{count}</h2>
  )
}

export default App