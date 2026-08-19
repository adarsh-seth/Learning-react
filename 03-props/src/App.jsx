import React from 'react'
import Card from './components/card'
const App = () => {
  return (
    <div className="parent">
      <Card user = 'Adarsh' age={20}/>
      <Card user = 'Sarthak' age ={19}/>
      
    </div>

  )
}

export default App