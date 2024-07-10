// import { useState } from 'react'
// import { useEffect } from 'react'
// import './App.css'

// function App() {
// const [counter, setCounter] = useState(0);
// const [state, setState] = useState(0);

// // useEffect
//   useEffect(()=> {
//       //All the logic you want to run with your useEffect
//       let rand =Math.random();
//       console.log(rand);
//     console.log('I have loaded');
//   }, [counter, state])
//   return (
//     <>
//       <h1> My Application</h1>
//       <button onClick={()=>{setCounter(x=> x + 1)}}>Click Me</button>
//       <h1>{counter}</h1>
//     </>
//   )
// }

// export default App

import { useState, useEffect } from "react";

export default function App() {
  const [position, setPosition] = useState({ x: 50, y: 50 });
  const [canMove, setCanMove] = useState(true);

  useEffect(() => {
    function handleMove(e) {
      setPosition({ x: e.clientX, y: e.clientY})}
      if (canMove) {
        window.addEventListener('pointermove', handleMove);
      }
      return () => { window.removeEventListener('pointermove', handleMove)};
    }, [canMove]);

  return (
    <div onClick={() => setCanMove(!canMove)} className="container">
      <h1>Click to {canMove ? "Stop Following" : "Follow"} Cursor</h1>
      <div
        style={{
          position: "absolute",
          backgroundColor: "blue",
          borderRadius: "50%",
          opacity: 0.6,
          transform: `translate(${position.x}px, ${position.y}px)`,
          pointerEvents: "none",
          left: -20,
          top: -20,
          width: 40,
          height: 40
        }}
      />
    </div>
  );
}
