import { GraduationCap } from 'lucide-react'
import { check } from '../assets/images/export'
import { useEffect, useState } from 'react'
import { useCourse } from '../Context/ChosenCourse'
import { Navigate, useNavigate } from 'react-router-dom'


const LogIn = () => {
    const logInfo=[{
        title:'10,000+ Courses',
        des:'Learn anything, anytime'
    },{
        title:'10,000+ Courses',
        des:'Learn anything, anytime'
    },{
        title:'10,000+ Courses',
        des:'Learn anything, anytime'
    },]
    const {logged,setLog}=useCourse()
    const navigate= useNavigate()
    const handleClick=()=>{
      setLog(true)
      navigate('/')
    }
   
  return (
    <div className="w-full grid grid-cols-4 h-screen">
      <div className='lg:col-span-2 flex flex-col justify-self-center pt-30  gap-20 col-span-4'>
        <div className=" flex gap-3  items-center">
            <div className="bg-linear-to-br from-emerald-600 to-teal-600 p-2 rounded-lg w-fit">
                <GraduationCap className="text-white w-6 h-6" />
            </div>
        <span className="text-xl font-bold bg-linear-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">EduPath</span>
      </div>
      <div className=''>
        <h3 className='text-2xl text-black font-bold'>Welcome back</h3>
        <p className='text-gray-500'>Enter your credentials to access your account</p>
        <form action="" className='flex flex-col items-start gap-3 mt-5'>
            <label htmlFor="" className='text-lg '>Email</label>
            <input type="text" name="1" id="" placeholder='name@example.com' className='bg-gray-200 w-full px-2 py-1 rounded-lg text-gray-800 outline-emerald-400'/>
            <label htmlFor="" className='text-lg'>Password</label>
            <input type="password" name="" id="2" placeholder='Enter Your password' className='bg-gray-200 w-full px-2 py-1 rounded-lg text-gray-800 outline-emerald-400' />
            <input type="button" value="LogIn" className='rounded-lg bg-emerald-500 w-full px-2 py-1 cursor-pointer text-white hover:bg-emerald-300' onClick={handleClick} />
        </form>
      </div>
      </div>
      <div className=" lg:flex flex-col gap-5 hidden bg-linear-to-r from-emerald-600 to-teal-600 w-full h-full col-span-2 p-30">
        <h2 className='text-white text-3xl font-bold pb-5'>Start Your Learning Adventure</h2>
        <p className='text-neutral-50 text-xl'>Join thousands of students worldwide and unlock your potential with expert-led courses.</p>
        {
            logInfo.map((item,index)=>(
            <div className="backdrop-blur-lg bg-gray-200/20 rounded-md flex justify-start gap-4 mb-2 p-4 items-center " key={index}>
                <div className=""> <img src={check} className='w-5 h-5' alt="" /></div>
               <div className="flex flex-col ">
                    <span className='text-neutral-50'>{item.title}</span>
                <span className='text-neutral-50'>{item.des}</span>
               </div>
                </div>
            ))
        }
      </div>
    </div>
  )
}

export default LogIn
