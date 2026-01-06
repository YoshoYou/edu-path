import { ArrowBigLeft, ArrowBigRight } from "lucide-react"
import { FAquestion, reviewList } from "../data/data"

const FAQsection = () => {
  return (
  <div className="bg-white  px-4 h-full  py-20 flex  flex-col gap-20">
        <div className="flex flex-col items-center gap-2">
    <h3 className="font-bold text-4xl">Frequently Asked  <span className="text-transparent bg-linear-to-r from-emerald-600 to-teal-600 bg-clip-text">Question?</span> </h3>
    <p className="text-gray-600">The most common question our students and reviwers ask us about</p>
    </div>
    <div className="grid items-center grid-cols-3  gap-6 ">
        {FAquestion.map((item,index)=>(
            <div className=" flex flex-col lg:col-span-1 col-span-3  gap-5 border border-emerald-200 rounded-xl p-6 bg-emerald-50 h-full " key={index}>
                <p className="font-bold text-xl">{item.question}</p>
                <p className="text-gray-500 text-xl">{item.answer}</p>

            </div>
        ))}
    
    </div>
      <div className="flex flex-col gap-10">
        <p className="font-bold md:text-3xl text-xl">Still have a question?</p>
        <button className="flex items-center justify-center  text-white  text-xl self-center bg-linear-to-br from-emerald-600 to-teal-600 gap-4 rounded-md p-2 hover:from-emerald-500 hover:to-teal-500 cursor-pointer border-none outline-none">Contact our support team <ArrowBigRight className="fill-emerald-600 border-emerald-300 h-8 w-8" /></button>
      </div>
    </div>
  )
}

export default FAQsection
