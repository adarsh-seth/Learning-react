import { useState, useCallback,useEffect,useRef } from 'react'



function App() {
  const [length, setLength] = useState(8)
  const [number, setNumber] = useState(false)
  const [character, setCharacter] = useState(false)
  const [password, setPassword] = useState("")
  const [copied, setCopied] = useState(false)

  // useRef hook 
  const passwordRef = useRef(null)

  const passwordGenerator = useCallback(() => {
  let pass = ""
  let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

  if (number) str += "0123456789"
  if (character) str += "!@#$%&*^(){}:?><"

  for (let i = 0; i < length; i++) {
    let char = Math.floor(Math.random() * str.length)
    pass += str.charAt(char)
  }

  setPassword(pass)

}, [length, number, character])
 const copyPasswordToClipboard = useCallback(() => {
  passwordRef.current?.select()
  passwordRef.current?.setSelectionRange(0, 999)

  window.navigator.clipboard.writeText(password)

  setCopied(true)

  setTimeout(() => {
    setCopied(false)
  }, 1500)
}, [password])

  useEffect(()=> {
    passwordGenerator()
  }, [length,number,character,passwordGenerator ])


  return (
    <>
      <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-5 bg-gray-700 my-8 text-white '> 
        <h1 className='text-white text-center my-3'>Password Generator</h1>
        <div className='flex shadow rounded-lg overflow-hidden mb-4'>
         <input 
           type="text"
           value={password}
           className='outline-none w-full py-1 px-3 bg-white text-black '
           placeholder='Password'
           readOnly
           ref={passwordRef}
         />
         <button
         onClick= {copyPasswordToClipboard}
         
         className='bg-blue-500 text-white px-3 
               transition duration-150 
               hover:bg-blue-600 
               active:scale-95'>{copied ? "Copied!" : "Copy"}</button>
        </div>
        <div className='flex text-sm gap-x-2'>
          <div className='flex items-center gap-x-1'>
            <input
              type="range"
              min={6}
              max={50}
              value={length}
              className='cursor-pointer'
              onChange={(e) => {setLength(e.target.value)}}
             />
             <label>Length:{length}</label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input
             type="checkbox"
             defaultChecked={number} 
             id='numberInput'
             onChange={() => {
              setNumber((prev) => !prev)
             }}
              />
              <label htmlFor="numberInput">Numbers</label>
          </div>
           <div className='flex items-center gap-x-1'>
            <input
             type="checkbox"
             defaultChecked={character} 
             id='cahracterInput'
             onChange={() => {
              setCharacter((prev) => !prev)
             }}
              />
              <label htmlFor="characterInput">Characters</label>
          </div>
        </div>
      </div>
    </>
  )
}

export default App  
