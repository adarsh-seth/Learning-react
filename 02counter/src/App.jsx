import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from './assets/vite.svg'
// import heroImg from './assets/hero.png'
import './App.css'

function App() {
  let [counter, setCounter] = useState(15)
  // let counter = 15
  const addValue = () => {
    if(counter <= 20)
    { setCounter(counter++)}
  }
  const removeValue = () => {
    if(counter >= 0)
   { setCounter(counter--)}
  }
  return (
    <>
     <h1>Chai aur code</h1>
     <h3>Counter value: {counter}</h3>

     <button onClick={addValue} >Add value{counter}</button>
     <br />
     <button onClick={removeValue}>Remove value{counter}</button>
    </>
  )
}

export default App
