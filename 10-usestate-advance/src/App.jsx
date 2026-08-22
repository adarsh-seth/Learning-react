
import { useState } from 'react'

const App = () => {
  const [num, setNum] = useState(0)

  const Clicked = ()=>{
    setNum(prev => prev +1)
    setNum(prev => prev +1)
    setNum(prev => prev +3)
  }

  return (
    <div>
      <h1>{num}</h1>
      <button onClick={Clicked}>Click</button>
    </div>
  )
}

export default App