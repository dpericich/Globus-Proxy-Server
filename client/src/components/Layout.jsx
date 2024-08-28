import { Outlet } from 'react-router-dom'
import Navbar from './Navbar'
import Footer from './Footer'

const Layout = () => {
  return (
    <div className="">
      <Navbar />

      <div>
        <Outlet />
      </div>
      <Footer />
    </div>
  )
}

export default Layout
