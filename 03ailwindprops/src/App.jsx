import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import Card from './components/card'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
 

  return (
    <>
    
     <h1 className='bg-blue-400 text-black rounded-4xl text-2xl'  >Tailwind CSS</h1>
       <Card heading="Maths" content="math is op"/>
       <Card heading="physics" content="physics is op"/>
       <Card heading="chemistry" />
    </>
  )
}

export default App
