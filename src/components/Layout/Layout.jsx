import { Outlet } from "react-router-dom"
import NavBar from "../Home/NavBar/NavBar"
import Footer from "../Home/Footer/Footer"


const Layout = () => {
  return (
    <div>
      <NavBar />
      <Outlet />
      <Footer />
    </div>
  )
}

export default Layout
