import { Link } from 'react-router-dom'
import logo from '../assets/Safe Travels_LOGO FINAL.png'

const Navbar = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 shadow-md justify-center">
      <div className="flex justify-center items-center">
        <img className="h-20 w-50" src={logo}></img>
      </div>
      <div className="md:col-span-2 flex justify-center items-center gap-2">
        <Link to="/">Home</Link>
      </div>
    </div>
  )
}

export default Navbar
