

const App = () => {
  const Submit = (e) => {
   e.preventDefault()
    console.log("Submitted");
    
  }
  return (
    <div>
       <form onSubmit={ (e) => {
        Submit(e)
       }
        
       }>
        <input type="text" />
        <button>Submit</button>
      </form> 
    </div>
  )
}

export default App