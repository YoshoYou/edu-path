
import Hero from "./Hero/Hero"
import NavBar from "./NavBar/NavBar"
import LogIn from "../LogIn/LogIn"
import About from "./About/About"
import NotFound from "../NotFound/NotFound"
import Courses from "../Courses/Courses"
import Footer from "./Footer/Footer"
const Home = () => {
  return (
    <div>
      <NavBar />
      <Hero />
      <About />
      <Courses/>
      <NotFound/>
      {/* <LogIn /> */}
      <Footer />
    </div>
  )
}

export default Home
