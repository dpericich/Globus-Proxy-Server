import { Link } from 'react-router-dom'
import logo from '../assets/Safe Travels_LOGO FINAL.png'

const Navbar = () => {
  return (
    <div className="flex justify-center items-center shadow-md bg-white pb-4">
      <Link to="/">
        {' '}
        <img className="h-[55px] md:h-[85px]" src={logo}></img>
      </Link>
    </div>
  )
}

export default Navbar
