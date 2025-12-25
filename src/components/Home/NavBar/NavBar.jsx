import { GraduationCap,Menu,ShoppingBasket,X } from "lucide-react"
import { useState } from "react"
import MobileNav from "../MobileNav/MobileNav"
export  const List=['Home','Courses',<ShoppingBasket className="hover:text-emerald-300 "/>]

const NavBar = () => {
 
    const [active, setActive] = useState(0)

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
                        <li className={`cursor-pointer hover:bg-linear-to-br hover:from-emerald-600 hover:to-teal-600 hover:bg-clip-text hover:text-transparent self-center
                             ${active===index?'bg-linear-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent':'text-gray-500'}`}
                        onClick={()=>setActive(index)}
                        key={index}>
                            {item}
                            </li>
                            ))
                        }
                    </ul>
            </div>
            <div className="text-white sm:block hidden bg-linear-to-br from-emerald-600 to-teal-600 p-2 rounded-lg">
                    <button>LogIn</button>
            </div>
            
            <MobileNav />
        </div>
    </nav>
  )
}

export default NavBar
