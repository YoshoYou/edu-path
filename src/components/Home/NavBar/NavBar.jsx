import { GraduationCap,ShoppingBasket } from "lucide-react"
import { useEffect, useState } from "react"
import MobileNav from "../MobileNav/MobileNav"
import { NavLink, useNavigate } from "react-router-dom"
import { useCourse } from "../../Context/ChosenCourse"
export  const List=['Home','Courses',<ShoppingBasket className="hover:text-emerald-400  "/>]
export  const listLink=['home','courses','cart']
const NavBar = () => {
   
    const navigate= useNavigate();
    const [active, setActive] = useState(0)
    const {logged}=useCourse()
    const handleRouteChange=()=>{
      navigate('/login');
    }   
    useEffect(()=>{
        if(active===0){
            navigate('/home')
        }

    },[])

  return (
    <nav className="bg-white border-b border-gray-300 shadow-gray-300  sticky top-0 z-50 shadow-2xs  ">
        <div className=" p-4 flex  justify-between  items-center w-full ">
            <div className=" flex items-center gap-3">
                <div className="bg-linear-to-br from-emerald-600 to-teal-600 p-2 rounded-lg w-fit ">
                    <GraduationCap className="text-white w-6 h-6" />
                </div>
                    <span className="text-xl font-bold bg-linear-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">EduPath</span>
            </div>
            <div className=" ">
                    <ul className={`sm:flex hidden sm:gap-5 md:gap-20 text-2xl  `}>
                        {
                            List.map((item,index)=>(
                        <NavLink to={`${listLink[index]}`} className={`cursor-pointer hover:text-emerald-400 self-center
                             ${active===index?'text-emerald-400  ':'text-gray-500'}`}
                        onClick={()=>setActive(index)}
                        key={index}>
                            {item}
                            </NavLink>
                            ))
                        }
                    </ul>
            </div>
            <div className=" text-white sm:block hidden bg-linear-to-br from-emerald-600 to-teal-600
             p-2 rounded-lg cursor-pointer  hover:from-emerald-500 hover:to-teal-500" onClick={handleRouteChange}>
                    <button className="cursor-pointer" >{logged?'Log Out':"Log In"}</button>
            </div>
            <MobileNav />
        </div>
    </nav>
  )
}

export default NavBar
