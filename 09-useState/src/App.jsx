import React, { useState } from 'react'

const App = () => {

 const [num, setNum] = useState(0)


 function increaseNum(){
    setNum(num+1)
 }
 function decreaseNum(){
    setNum(num-1)
 }
 function resetNum(){
    setNum(0)
 }
 function jumpNum(){
    setNum(num+100)
 }
  return (
    <div className='container'>
        <div className="counterContainer">
          <h1>Counter : {num}</h1>
        </div>
      <div className='buttonContainer'>
        <button onClick={increaseNum}>Increase</button>
        <button onClick={decreaseNum}>Decrease</button>
        <button onClick={resetNum}>Reset</button>
        <button onClick={jumpNum}>Jump by 100</button>
      </div>
    </div>
  )
}

export default App