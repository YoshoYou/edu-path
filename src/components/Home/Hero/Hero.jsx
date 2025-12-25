import { GraduationCap, GraduationCapIcon, LucideGraduationCap, Medal } from 'lucide-react'
import {skill}from '../../assets/images/export'

const Hero = () => {
  const heroInfo=[
    {
      num:'50K+',
      des:'Active Students'
    },
    {
      num:'500+',
      des:'Online Courses'
    },
    {
      num:'100+',
      des:'Experts instructors'
    },
    {
      num:'95%',
      des:'Success Rate'
    },
  ]
  return (
    <div className="grid bg-emerald-50 xl:px-4 px-10 py-30 pt-10 grid-cols-4 gap-40 ">
      <div className="flex flex-col justify-center gap-10 sm:w-full  w-[60%] col-span-4 xl:col-span-2">
        <span className='flex w-fit  bg-emerald-100  rounded-xl p-1 text-sm text-emerald-600'>
            <LucideGraduationCap  className='pr-1 text-black'/> Join 50,000+ students learning today
        </span>
        <h1 className='md:text-7xl w-full text-3xl font-bold '>Learn Skills That <span className='text-transparent bg-linear-to-r from-emerald-600 to-teal-600 bg-clip-text'>Transform</span> Your Future</h1>
        <p className='text-gray-600 md:text-xl w-full text-lg '>Access world-class courses taught by industry experts.Achieve your goals with our comprehensive platform.</p>
        <div className="grid grid-cols-4  gap-15">
        {heroInfo.map((item,index)=>(
          <div className='flex flex-col sm:col-span-1 col-span-2' key={index}>
          <span className='font-bold md:text-3xl text-xl'>{item.num}</span>
          <span className='text-gray-600 md:text-md text-sm'>{item.des}</span>
          </div>
        ))}
        </div>
      </div>
      <div className="xl:col-span-2 col-span-4 w-[50%] sm:w-full py-5 relative flex lg:justify-center  ">
        <img src={skill} className='sm:w-full   lg:h-100 rounded-lg  w-75 h-50 ' alt="" />
        <div className='absolute flex gap-5 sm:bottom-0 -bottom-10 left-0  sm:left-20  xl:bottom-10 xl:-left-5  rounded-2xl  z-20  px-6 py-3 w-fit bg-white shadow-2xl  shadow-gray-500  '>
        <Medal className='bg-emerald-200 w-10 h-10 rounded-4xl' /> 
        <div className=" flex flex-col">
              <span className='  text-2xl text-bold'> Certificate Ready </span>
              <span className='  text-md text-gray-600'> Complete & Earn </span>
        </div>
    
        
         
        </div>

      </div>
    </div>
  )
}

export default Hero
