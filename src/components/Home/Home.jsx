
import Hero from "./Hero/Hero"
import NavBar from "./NavBar/NavBar"
import LogIn from "../LogIn/LogIn"
import About from "./About/About"
import NotFound from "../NotFound/NotFound"
import Courses from "../Courses/Courses"
import Footer from "./Footer/Footer"
import { Outlet, Routes } from "react-router-dom"
import StudentsReview from "../StudentsReview/StudentsReview"
import Layout from "../Layout/Layout"
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
