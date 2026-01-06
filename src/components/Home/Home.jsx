import Hero from "./Hero/Hero"
import About from "./About/About"
import StudentsReview from "../StudentsReview/StudentsReview"
import FAQsection from "../FAQsection/FAQsection"

const Home = () => {
  return (
    <div>
      <Hero />
      <About />
      <StudentsReview />
      <FAQsection />
    </div>
  )
}

export default Home
