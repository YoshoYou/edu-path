import { AlignStartHorizontalIcon, StarIcon, Stars } from "lucide-react"
import { reviewList } from "../data/data"
import { ListStart } from "lucide"

const StudentsReview = () => {
  const stars=<StarIcon className="fill-yellow-200" />
  return (
    <div className="bg-emerald-100  px-4 h-full py-20 flex  my-10 flex-col gap-20">
        <div className="flex flex-col items-center gap-2">
    <h3 className="font-bold text-4xl">What  People say about <span className="text-transparent bg-linear-to-r from-emerald-600 to-teal-600 bg-clip-text">EduPath?</span> </h3>
    <p className="text-gray-600">Join thousands of satisfied learners who transformed their careers</p>
    </div>
    <div className="grid items-center grid-cols-3 gap-6 ">
        {reviewList.map((item,index)=>(
            <div className=" flex flex-col lg:col-span-1 gap-3 col-span-3  justify-between border border-emerald-200 rounded-xl p-6 bg-white h-full " key={index}>
                <p className="text-gray-500 text-xl">{item.review}</p>
                <span className="mt-5  text-xl font-semibold flex  gap-3 items-center"> <img src={item.img} className="w-10 h-10 rounded-full" alt="" /> {item.name}</span>
                {index === 0 ?<span className="flex gap-3 ">{stars}{stars}{stars}{stars}</span>
                :index===1 ?<span className="flex gap-3 ">{stars}{stars}{stars}</span>:
                <span className="flex gap-3 ">{stars}{stars}{stars}{stars}{stars}</span>
                }    
                <span className="text-gray-500 text-lg mt-2">{item.job}</span>
            </div>
        ))}
    </div>
      
    </div>
  )
}

export default StudentsReview
