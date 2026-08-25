import { useEffect } from "react"
import { useState } from "react"


const App = () => {

  const [num1, setNum1] = useState(0)
  const [num2, setNum2] = useState(100)

  useEffect(function(){
    console.log("useEffect is running...");
    
  },[num2])

  return (
    <div>
      <h1>Num 1 {num1}</h1>
      <h1>Num 2 {num2}</h1>
      <button 
      onMouseEnter={()=>{
        setNum1(num1+1)
      }} 
      onMouseLeave={()=> {
        setNum2(num2+10)
      }}
      >Hover
      </button>
    </div>
  )
}

export default App