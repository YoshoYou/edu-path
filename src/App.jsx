
import { Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './components/Home/Home'
import NavBar from './components/Home/NavBar/NavBar'
import LogIn from './components/LogIn/LogIn'
import NotFound from './components/NotFound/NotFound'
import CourseDetails from './components/CourseDetails/CourseDetails'
import Courses from './components/Courses/Courses'
import Cart from './components/Cart/Cart'
import Layout from './components/Layout/Layout'

function App() {

  return (
    <div className="App">
     <Routes>
      <Route path='/' element={<Home/>}>
      <Route path='layout' index element={<Layout/>} />
       <Route path='courses' element={<Courses/>}/>
       <Route path='cart' element={<Cart/>}/>
        <Route path='/courses/card/:id' element={<CourseDetails/>}/>
      </Route>
      <Route path='/login' element={<LogIn/>}/> 
      <Route path='*' element={<NotFound/>}/>
     </Routes>
      </div>

  )
}

export default App
