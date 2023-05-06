import React,{useState} from 'react'

export default function Counter() {
  let [counter, setCounter] = useState(0) 

  function increment() {
     setCounter(counter + 1)
  }

  function decrement() {
    setCounter(counter - 1)
 }

  return (
    <>
    <h1>{counter}</h1>
    <h2>{new Date().toString()}</h2>
    <button onClick={increment}>Increment</button>
    <button onClick={decrement}>Decrement</button>
    <button>Reset</button>
    </>
    
  )
}
