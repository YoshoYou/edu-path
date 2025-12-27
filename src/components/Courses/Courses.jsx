import { LogIn, ShoppingBag, ShoppingBasket } from "lucide-react"
import { courseData } from "../data/data"
import { Outlet, useNavigate } from "react-router-dom"
import { useCourse } from "../Context/ChosenCourse"
import { useEffect, useState } from "react"


const Courses = () => {
  const navigate = useNavigate();
  const {chosenCourse,setChosenCourse,cartInfo,setCartInfo,logged}=useCourse();
  const handleViewDetails = (item) => {
    setChosenCourse(item);
    navigate(`card/${item.id}`);
  };
 
  const handleAdd=(item)=>{
    const newcartInfo={
      id: item.id,
      name:item.title,
      price:item.price,
    }
    setCartInfo((prev)=>{
      if (prev.some(cartItem => cartItem.id === item.id)) {
        return prev; 
      }
      const updatedCart = [...prev, newcartInfo];
      localStorage.setItem('cartInfo', JSON.stringify(updatedCart));
      return updatedCart;
    });
  }
  useEffect(()=>{
    console.log(cartInfo)
  },[cartInfo])

  return (
    <div className="bg-emerald-50 relative py-20 px-4">
        <h3 className="font-black sm:text-4xl text-2xl  mb-8">6 Courses Availabe </h3>
        <p className="text-gray-500 sm:text-2xl text-lg ">Explore our comprehensive catalog of professional courses</p>
        <div className="flex  justify-center ">
        <div className=" grid xl:grid-cols-3 sm:grid-cols-2 grid-cols-1 place-items-center   mt-20 gap-20 w-fit">
      {courseData.map((item,index)=>(
        <div className="border border-gray-400 bg-gray-100 rounded-xl w-[85%] shadow-2xl shadow-gray-400 cursor-pointer hover:shadow-gray-500 " key={index}>
            <img className="w-100 h-50 rounded-tr-xl rounded-tl-xl  " src={item.img} alt="" />
           <div className="p-5">
             <span className="text-blue-600 text-xl font-semibold">{item.title}</span>
            <p className=" text-gray-500 w-60">{item.des}</p>
            <div className="w-fit  my-5 flex gap-5">
                <button  className="border sm:text-lg text-[20px] border-emerald-500 bg-emerald-300 hover:bg-emerald-200 cursor-pointer rounded-xl sm:p-2 p-0.5" onClick={() => handleViewDetails(item)} >View Details</button>
               {logged ? <button className="flex  border sm:text-lg text-[20px] border-emerald-500 bg-emerald-300 hover:bg-emerald-200 cursor-pointer rounded-xl sm:p-2 p-0.5 " onClick={()=>handleAdd(item)}>Add to Cart <ShoppingBasket className="self-center mx-2 w-5 "/></button>:
              <button className="flex  border sm:text-lg text-[20px] border-emerald-500 bg-emerald-300 hover:bg-emerald-200 cursor-pointer rounded-xl sm:p-2 p-0.5 " >Log in to add to cart</button> }
            </div>
            <div className="flex justify-between ">
                <span className="text-blue-600 font-semibold text-lg p-2">{item.price} $</span>
                <span className="text-lg bg-gray-200 rounded-xl p-2">{item.level}</span>
            </div>
           </div>
        </div>
      ))}
      </div>
      </div>
      <Outlet />
    </div>
  )
}

export default Courses
