import { LogIn } from "lucide-react";
import { useCourse } from "../Context/ChosenCourse"
import { useNavigate } from "react-router-dom";
import { useState } from "react";


const Cart = () => {
    const {cartInfo,setCartInfo}=useCourse()
    const navigate=useNavigate()

    const handleRemove=(id)=>{
      setCartInfo((prev) => {
        const updatedCart = prev.filter(cartItem => cartItem.id !== id);
        localStorage.setItem('cartInfo', JSON.stringify(updatedCart));
        console.log(+(prev.price))
        return updatedCart;
      });
    }
  return (
    <div className="bg-emerald-100  w-full min-h-screen px-10 py-5  relative ">
        <div className="flex sm:justify-between sm:flex-row flex-col gap-5 "><h3 className="text-2xl font-bold">Cart Details </h3>
         <span className="text-xl font-semibold">Total price: {cartInfo.reduce((total, item) =>{ return total =total + item.price}, 0)} $</span>
         </div>
        <div className="flex flex-col gap-10 justify-center items-center my-20">
     {cartInfo?.map((item)=>(
        <div className="flex sm:justify-between sm:flex-row flex-col gap-5 w-[80%] border border-emerald-300 rounded-xl p-5 items-center bg-white" key={item.id}>
            <span className="sm:text-lg text-md">Course title: <span className=" text-blue-500">{item.name}</span></span>
            <span className="sm:text-lg text-md">Course Price: <span className="text-blue-500"> {item.price} $</span></span>
            <button className="border-2 rounded-xl p-2 border-emerald-300  text-xl bg-emerald-200 hover:bg-emerald-100 cursor-pointer" onClick={() => handleRemove(item.id)}>remove</button>
        </div>
     ))}
     </div>
    </div>
  )
}

export default Cart
