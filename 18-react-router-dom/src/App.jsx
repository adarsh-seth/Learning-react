
import {Route, Routes} from 'react-router-dom'
import About from './pages/About'
import Contact from './pages/Contact'
import Home from './pages/Home'
import Product from './pages/Product'
import Nav from './Components/Nav'



const App = () => {
  return (
    <div>
      <Nav />
      
      <Routes>
        <Route path='/' element={<Home />} /> 
        <Route path='/about' element={<About />} /> 
        <Route path='/contact' element={<Contact />} /> 
        <Route path='/product' element={<Product />} /> 
      </Routes>
    </div>
  )
}

export default App