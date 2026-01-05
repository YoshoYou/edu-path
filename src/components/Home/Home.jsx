import NavBar from "./NavBar/NavBar"
import Footer from "./Footer/Footer"
import { Outlet } from "react-router-dom"

const Home = () => {
  return (
    <div>
      <NavBar />
       <Outlet />
      <Footer />
    </div>
  )
}

export default Home
