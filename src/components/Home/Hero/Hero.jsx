import {BadgeDollarSignIcon, LucideGraduationCap, Medal, StarIcon} from 'lucide-react'
import { heroInfo } from '../../data/data'
import { skill } from '../../assets/images/export'
import { useEffect, useRef, useState } from 'react'

const Hero = () => {




  return (
    <div className="grid bg-emerald-50   sm:px-10 px-4 py-30  grid-cols-3 xl:grid-cols-4 gap-30">
    {/* <BadgeDollarSignIcon className={`absolute top-40 fill-emerald-400 scroll-smooth duration-40 left-[50%] z-100`} ref={icon}/> */}
      <div className="hero-slide-left-reverse flex flex-col  gap-10 w-fit   col-span-3 xl:col-span-2">
            <span className='flex w-fit bg-emerald-100  rounded-xl p-1 text-sm text-emerald-600'>
                <LucideGraduationCap className='pr-1 text-black'/> Join 50,000+ students learning today
            </span>
            <h1 className='sm:text-7xl  text-3xl font-bold '>Learn Skills That <span className='text-transparent bg-linear-to-r from-emerald-600 to-teal-600 bg-clip-text'>Transform</span> Your Future</h1>
            <p className='text-gray-600 md:text-xl  text-lg  justify-center '>Access world-class courses taught by industry experts.Achieve your goals with our comprehensive platform.</p>
            <div className="grid grid-cols-4 items-center m-5  gap-10 w-full">
                {heroInfo.map((item,index)=>(
                  <div className='flex flex-col  sm:col-span-1 col-span-2 w-fit' key={index}>
                    <span className='font-bold md:text-3xl text-xl'>{item.num}</span>
                    <span className='text-gray-600 md:text-md text-sm self-center'>{item.des}</span>
                  </div>
                ))}
            </div>
      </div>
        <div className=" hero-slide-left xl:col-span-2 col-span-3  py-5 relative flex flex-col items-center ">
            <img src={skill} className='sm:w-full lg:h-100 lg:w-250 rounded-lg ' alt="" />
            <div className='absolute flex gap-5 sm:bottom-0 -bottom-13 left-0  lg:left-20  xl:bottom-10 xl:-left-5  rounded-2xl  z-20  px-6 py-3 w-full sm:w-fit bg-white shadow-2xl  shadow-gray-500  '>
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
