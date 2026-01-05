import {  Navigate, useParams } from "react-router-dom";
import { courseData } from "../data/data";

const CourseDetails = () => {
const { id } = useParams();
const course = courseData.find(c => c.id == id);
  if (!course) {
    return <Navigate to="*"  />
  }

  return (
    <div className="h-full bg-gray-300 flex flex-col relative items-center justify-start py-5">
       <h2 className=" mb-10 text-4xl font-bold ">Course Details Page</h2>
      <div className="bg-emerald-100 sm:w-100 w-70 rounded-t-xl">
        <img src={course.img} alt="course image" className="w-100 h-60 rounded-t-xl" />
              <div className="flex flex-col p-3">
               <span className="text-2xl font-black">{course.title}</span>
               <span className="text-lg text-blue-600">{course.category}</span>
               <p className="text-xl font-semibold m-1">{course.des}</p>
               <span className="mt-1" >Days of the course: {course.day}</span>
               <span className="mt-1" >Timing: {course.time}</span>
                <span className="mt-1" > Duration: {course.duration}</span>
                <span className="mt-1" > Language of the course: {course.language}</span>
                <div className="flex justify-between text-blue-600 font-semibold mt-3">
                  <span >{course.lessonCount}</span>
                <span >{course.price}$</span>
                </div>
               </div>
      </div>
    </div>
  )
}

export default CourseDetails
