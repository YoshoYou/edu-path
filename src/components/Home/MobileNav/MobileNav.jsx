import { Link, LucideMenu, LucideMenuSquare, LucideSquareMenu, MenuIcon, SquareMenuIcon, X } from "lucide-react"
import { List, listLink } from "../NavBar/NavBar"
import { useEffect, useState } from "react"
import { NavLink, useNavigate } from "react-router-dom"
import { useCourse } from "../../Context/ChosenCourse"
const MobileNav = () => {
    const [menuOpen, toggleMenu] = useState('default')
    const navigate=useNavigate()
    const {logged}=useCourse()
    const handleRoute=()=>{
      navigate('/login')
    }
    let menuAnimation='';
    if(menuOpen==='open'){
      menuAnimation="slide-left";
    }
    else if(menuOpen==='close'){
      menuAnimation='slide-left-reverse';
    }
    else if(menuOpen==='default')
       {menuAnimation=''}
  return (
    <div className="sm:hidden block  ">
      {menuOpen==='default'? <LucideMenuSquare className="w-8 h-8 text-emerald-600 cursor-pointer hover:text-emerald-400 " onClick={()=>{toggleMenu('open')}} />:
      menuOpen==='open'?  <X className="w-8 h-8 text-emerald-600 cursor-pointer hover:text-emerald-400" onClick={()=>{toggleMenu('close')}}/>:<LucideMenuSquare className="w-8 h-8 text-emerald-600 cursor-pointer hover:text-emerald-400 " onClick={()=>{toggleMenu('open')}} />
        }
     
        <ul className={`fixed top-19 bg-gray-50 -right-150 ${menuAnimation}    text-2xl font-bold flex flex-col gap-10 w-full pt-5 px-5 border-b border-gray-300 shadow-gray-300  pb-8 shadow-2xs`}>
                            {
                                List.map((item,index)=>(
                            <NavLink to={`${listLink[index]}`} className={`cursor-pointer text-gray-500  hover:bg-linear-to-br hover:from-emerald-600 hover:to-teal-600 hover:bg-clip-text hover:text-transparent`}
                            key={index}>
                                {item}
                                </NavLink>
                                ))
                            }
                            <span className="w-full bg-gray-300 h-0.5 m-2"></span>
                            <div className="text-white text-center   bg-linear-to-br from-emerald-600 to-teal-600 p-2 rounded-lg hover:from-emerald-400 cursor-pointer" onClick={handleRoute}>
                                    <button className="cursor-pointer"  >{logged?'Log out':'Log In'}</button>
                            </div>
        </ul>
    </div>

  )
}

export default MobileNav
