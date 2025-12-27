import { LogIn } from "lucide-react"
import { useNavigate } from "react-router-dom"


const NotFound = () => {
  const navigate= useNavigate();
  const handleRoute = ()=>{
    navigate('/layout');
  }
  return (
    <div className="bg-emerald-300 w-full h-screen flex flex-col  justify-center items-center gap-10 ">
      <p className="text-xl md:text-5xl font-bold w-[50%] text-white">HMmmmmmm, Something went wrong , please try again later....</p>
      <button className="text-3xl font-semibold flex cursor-pointer  gap-4 border-2 border-emerald-600 rounded-xl p-4 backdrop-blur-2xl bg-emerald-400 hover:bg-white/50" onClick={handleRoute}> Home Page <LogIn className="self-center w-10 h-10" /></button>
    </div>
  )
}

export default NotFound
