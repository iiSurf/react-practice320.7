import { useState } from 'react'
import { useEffect } from 'react'
import './App.css'

function App() {
const [counter, setCounter] = useState(0);
const [state, setState] = useState(0);

// useEffect
  useEffect(()=> {
      //All the logic you want to run with your useEffect
      let rand =Math.random();
      console.log(rand);
    console.log('I have loaded');
  }, [counter, state])
  return (
    <>
      <h1> My Application</h1>
      <button onClick={()=>{setCounter(x=> x + 1)}}>Click Me</button>
      <h1>{counter}</h1>
    </>
  )
}

export default App
