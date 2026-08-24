import { useState } from "react";


const App = () => {

  const [title, setTitle] = useState('')

  const Submit = (e) => {
   e.preventDefault()
    console.log("Submitted");

    setTitle('')
    
  }
  return (
    <div>
       <form onSubmit={ (e) => {
        Submit(e)
       }
        
       }>
        <input type="text" placeholder="Enter your name" value={title} onChange={(e) => {
          setTitle(e.target.value)
        }}/>
        <button>Submit</button>
      </form> 
    </div>
  )
}

export default App