import React from 'react'
import { Link } from 'react-router-dom'


const Nav = () => {
  return (
    <div>
        <div className='nav'>
        <h3>Hello Baccho !!!</h3>
        <div className='tags'>
          <Link to ='/'>Home</Link>
          <Link to ='/about'>About</Link>
          <Link to ='/contact'>Contact</Link>
          <Link to = '/product'>Product</Link>
        </div>
      </div>
    </div>
  )
}

export default Nav