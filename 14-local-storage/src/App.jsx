
const App = () => {

  const user = {
    username : 'adarsh',
    age : '18',
    city : 'Mirzapur'
  }
  localStorage.setItem('user', 'Adarsh ')
  const usera = localStorage.getItem(user) 


  console.log(JSON.parse(usera));
  
  
  return (

    <div>App</div>
  )
}

export default App