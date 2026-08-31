import { useNavigate } from "react-router-dom"


const Navbar2 = () => {
    let navigate = useNavigate()
  return (
    <div className="flex gap-6 justify-center py-4 text-black">
      <button onClick={() =>{
        navigate('/home')
      }}  className="py-2 px-6 rounded-2xl bg-amber-300 cursor-pointer active:scale-95">Return to home page</button>
      <button onClick={() =>{
        navigate(-1)
      }} className="py-2 px-6 rounded-2xl bg-amber-300 cursor-pointer active:scale-95">Back</button>
      <button onClick={() =>{
        navigate(+1)
      }} className="py-2 px-6 rounded-2xl bg-amber-300 cursor-pointer active:scale-95">Next</button>
    </div>
  )
}

export default Navbar2