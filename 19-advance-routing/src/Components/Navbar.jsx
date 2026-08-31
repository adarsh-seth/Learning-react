import { Link } from "react-router-dom"


const Navbar = () => {
  return (
    <div className="flex justify-between items-center px-6 py-6 bg-yellow-300 text-black">
      <h3 className="font-bold text-lg">Adarsh Seth</h3>
      <div className="flex gap-6">
        
        <Link to="/Home">Home</Link>
        <Link to="/About">About</Link>
        <Link to="/Contact">Contact</Link>
        <Link to="/Courses">Courses</Link>
        <Link to="/Product">Product</Link>
      </div>
    </div>
  )
}

export default Navbar