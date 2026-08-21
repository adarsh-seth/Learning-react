

import Section1 from './components/Section 1/Section1'
import Section2 from './components/Section 2/Section2'

const App = () => {

  const users = [
    {
      img : "https://images.unsplash.com/photo-1600275669283-4bf2bb8a990c?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      description : "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Amet eligendi omnis, fugiat quis voluptatibus dolores quibusdam eos error doloribus nam!",
      tag : "Satisfied"
    },
    {
      img : "https://images.unsplash.com/photo-1521737711867-e3b97375f902?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      description : "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Amet eligendi omnis, fugiat quis voluptatibus dolores quibusdam eos error doloribus nam!",
      tag : "Underserved"
    },
    {
      img : "https://images.unsplash.com/photo-1752170080622-18196de87763?q=80&w=749&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      description : "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Amet eligendi omnis, fugiat quis voluptatibus dolores quibusdam eos error doloribus nam!",
      tag : "Underbanked"
    },
    {
      img : "https://images.unsplash.com/photo-1541560052-5e137f229371?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      description : "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Amet eligendi omnis, fugiat quis voluptatibus dolores quibusdam eos error doloribus nam!",
      tag : "Undeserving"
    }
  ]


  return (
    <div >
      <Section1 users = {users}/>
      <Section2 />
    </div>
  )
}

export default App


