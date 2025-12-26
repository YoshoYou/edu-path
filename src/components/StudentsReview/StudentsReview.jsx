import { reviewList } from "../data/data"


const StudentsReview = () => {
  return (
    <div className="bg-emerald-100  px-4 sm:h-screen py-20 flex justify-center flex-col gap-20">
        <div className="flex flex-col items-center gap-2">
    <h3 className="font-bold text-4xl">What  People say about <span className="text-transparent bg-linear-to-r from-emerald-600 to-teal-600 bg-clip-text">EduPath?</span> </h3>
    <p className="text-gray-600">Join thousands of satisfied learners who transformed their careers</p>
    </div>
    <div className="grid items-center grid-cols-3 gap-6 ">
        {reviewList.map((item,idex)=>(
            <div className=" flex flex-col sm:col-span-1 col-span-3  justify-between border border-emerald-200 rounded-xl p-6 bg-white h-full">
                <p className="text-gray-500 text-xl">{item.review}</p>
                <span className="mt-5">{item.name}</span>
            </div>
        ))}
    </div>
      
    </div>
  )
}

export default StudentsReview
