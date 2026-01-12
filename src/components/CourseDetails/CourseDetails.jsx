import {  Navigate, useParams } from "react-router-dom";
import { courseData, courseDetails } from "../data/data";
import { CalendarDays, Check, CheckCheck, CheckCheckIcon, CheckCircle, CheckCircle2, CheckCircle2Icon, Clock, Languages, Timer, TimerReset } from "lucide-react";

const CourseDetails = () => {
  const { id } = useParams();
const course = courseData.find(c => c.id == id);
  const detailsList =[
    {title:'Days of the course:',
      img: <CalendarDays className="" />,
      purpose:course.day
    },
    {title:'Timing:',
      img: <Clock className=""/>,
      purpose:course.time
    },
    {title:'Duration:',
      img:  <TimerReset className="w-5 h-5"/>,
      purpose:course.duration
    },
    {title:' Language of the course:',
      img: <Languages className="w-5 h-5" />,
      purpose:course.language
    },
  ]

  if (!course) {
    return <Navigate to="*"  />
  }

  return (
    <div className="h-full  bg-gray-300 flex flex-col relative items-center justify-start py-5">
      <div className="bg-emerald-100 sm:w-150 w-70 rounded-t-xl my-5">
        <img src={course.img} alt="course image" className="w-full h-60 rounded-t-xl" />
              <div className="flex flex-col p-3">
               <span className="text-2xl font-black">{course.title}</span>
               <span className="text-lg text-blue-600">{course.category}</span>
               <p className="text-xl font-semibold m-1">{course.des}</p>
               {detailsList.map((item,index)=>(
                  <span key={index} className="mt-1  flex flex-row justify-between  py-3 sm:text-lg text-[14px]" >{item.title} {item.purpose} {item.img}</span>
               ))}
                <div className="flex justify-between text-blue-600 font-semibold sm:text-2xl text-lg mt-3">
                  <span >{course.lessonCount}</span>
                <span  >{course.price}$</span>
                </div>
                <div className="flex flex-col  my-6 ">
                  <span className="sm:text-4xl text-xl font-semibold ">What you'll gain :</span>
                  <div className="grid grid-cols-2 content-start   my-6 gap-4">
                  {courseDetails.map((item ,index)=>(
                    <span key={index} className="flex flex-row  gap-3 text-[12px] sm:text-xl"><CheckCircle2Icon className="fill-emerald-500 sm:block hidden  w-6 h-6" /> {item}</span>
                  ))}
                  </div>
                </div>
               </div>
      </div>
    </div>
  )
}

export default CourseDetails
