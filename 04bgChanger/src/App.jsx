import { useState } from "react"

function App() {
  const [color,setColor] = useState("olive")
  

  return (
    <div className="w-full h-screen duration-200"
    style={{backgroundColor: color}}
    >
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-5 shadow-lg bg-purple-200  rounded-3xl px-3 py-2">
          <button onClick={() => setColor("red")} className="text-black outline-none px-4 rounded-full shadow-2xl " style={{backgroundColor: "red"}}>Red</button>
          <button onClick={() => setColor("green")}className="text-black outline-none px-4 rounded-full shadow-2xl" style={{backgroundColor: "Green"}}>Green</button>
          <button onClick={() => setColor("blue")}className="text-black outline-none px-4 rounded-full shadow-2xl" style={{backgroundColor: "Blue"}}>Blue</button>
          <button onClick={() => setColor("yellow")}className="text-black outline-none px-4 rounded-full shadow-2xl" style={{backgroundColor: "Yellow"}}>Yellow</button>
          <button onClick={() => setColor("brown")}className="text-black outline-none px-4 rounded-full shadow-2xl" style={{backgroundColor: "Brown"}}>Brown</button>
           </div>
      </div>
    </div>
  )
}

export default App
