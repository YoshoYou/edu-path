import { ShoppingBasket } from "lucide-react"
import { courseData, filterDate } from "../data/data"
import { useNavigate } from "react-router-dom"
import { useCourse } from "../Context/ChosenCourse"
import { useEffect, useState } from "react"

const Courses = () => {
  const navigate = useNavigate();
  const [active, setActive] = useState('all');
   const filters = courseData.filter(item=>{
    if (active ==='all')
      return courseData;
    else if  (item.filterCategory===active){
      return item;
 }})
  useEffect(() => {
      console.log(filters)
  }, [active])
 
  const {cartInfo,setCartInfo,logged}=useCourse();
  const handleViewDetails = (item) => {
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
        <div className="flex flex-col  md:flex-row md:gap-20 mt-20 items-center md:items-start">
          <div className="bg-gray-200  pl-4 pr-4 md:w-60 w-fit pt-5 rounded-xl h-fit md:pb-30 pb-10 mb-20 ">
            <span className="text-3xl  font-bold">Filters</span>
            <div className="mt-5 text-xl  flex flex-col ">
              <span className="">Category :</span>
              <div className="mt-7 font-semibold text-gray-600  ">
                <form name="" id="" className="flex md:flex-col flex-row gap-4 flex-wrap">
                  {
                    filterDate.map((item,index)=>(
                     <div className="flex flex-row gap-2" key={index}>
                      <input type="checkbox" name="" id={item.id} className=""  />
                      <label htmlFor={`${item.id}`} className={`inlilne hover:text-black cursor-pointer ${active===item.id ?'text-black':''} `} onClick={()=>setActive(`${item.id}`)}>{item.title}</label>
                  </div>
                    ))
                  }
                 </form>
              </div>
            </div>
          </div>

        <div className=" grid xl:grid-cols-3  lg:grid-cols-2 grid-cols-1 place-items-center  gap-5  sm:gap-20 w-fit">
      {filters.map((item,index)=>(
        <div className="border  border-gray-400 bg-gray-100 rounded-xl w-60 sm:w-70 h-full shadow-2xl shadow-gray-400 cursor-pointer hover:shadow-gray-500 " key={index}>
            <img className="w-100 h-50 rounded-tr-xl rounded-tl-xl  " src={item.img} alt="" />
           <div className="p-5 ">
             <span className="text-blue-600 text-xl font-semibold">{item.title}</span>
            <p className=" text-gray-500  w-full">{item.des}</p>
            <div className="w-fit  my-5 flex gap-5">
                <button  className="border sm:text-lg text-[15px] font-semibold border-emerald-500 bg-emerald-300 hover:bg-emerald-200 cursor-pointer rounded-xl sm:p-2 p-0.5 " onClick={() => handleViewDetails(item)} > Details</button>
               {logged ? <button className="flex font-semibold  border sm:text-lg text-[15px] border-emerald-500 bg-emerald-300 hover:bg-emerald-200 cursor-pointer rounded-xl sm:p-2 p-1 " onClick={()=>handleAdd(item)}>Add to Cart <ShoppingBasket className="self-center mx-2 w-5 "/></button>:
              <button className="flex  font-semibold  border sm:text-lg text-[15px] border-emerald-500 bg-emerald-300 hover:bg-emerald-200 cursor-pointer rounded-xl sm:p-2  " >Log in to purshase</button> }
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
    </div>
  )
}

export default Courses
