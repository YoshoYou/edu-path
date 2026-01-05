import FAQsection from "../FAQsection/FAQsection"
import About from "../Home/About/About"
import Hero from "../Home/Hero/Hero"
import StudentsReview from "../StudentsReview/StudentsReview"


const Layout = () => {
  return (
    <div>
      <Hero />
      <About />
      <StudentsReview />
      <FAQsection />
    </div>
  )
}

export default Layout
