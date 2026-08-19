
import React from 'react'
import { createRoot } from 'react-dom/client'

// import App from './App.jsx'
// function MyApp(){
//     return(
//         <div>
//             <h1>Custom React | adarsh is good boy</h1>
//         </div>
//     )
// }
// const anotherElement = (
//     <a href="htttps://google.com" target='_blank'>Visit Google</a>
// )
const anotherUser = "chai aur react"

const reactElement = React.createElement(
    'a',
    {href: 'https://instagram.com',target: '_blank'},
    'click me to visit google',
    anotherUser  // -> evaluatedd expression 

)

createRoot(document.getElementById('root')).render(
 
    reactElement

)
