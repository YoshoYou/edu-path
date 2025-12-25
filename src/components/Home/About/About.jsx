import { Book, BookAIcon, GraduationCapIcon, LampDeskIcon, PersonStandingIcon } from "lucide-react"


const About = () => {
  
  const AboutList=[
    {
      title:'Expert-Led Courses',
      des:"Learn from industry professionals with years of real-world experience.",
      img:<BookAIcon  />
   },
   {
    title:'Global Community',
    des:'Join thousands of learners from around the world on their journey',
    img:<PersonStandingIcon />
   },
   {
    title:'Certified Learning',
    des:'Earn recognized certificates upon completing your courses.',
    img:<GraduationCapIcon />
   },
   {
    title:'Learn at your Place',
    des:'Flexible learning schedules that fit your lifestyle and goals.',
    img:<LampDeskIcon />
   }
  ]
  return (
    <div className="flex  py-20 flex-col items-center gap-20 px-4">
      <div className="flex flex-col items-center gap-2">
        <h3 className="font-bold text-4xl">Why Choose <span className="text-transparent bg-linear-to-r from-emerald-600 to-teal-600 bg-clip-text">EduPath?</span> </h3>
        <p className="text-gray-600">We offer courses in many fields that help you to crack your way into the future of development
          Front-End,back-End,Business,PhotoShop,UI/UX...</p>
      </div>
      <div className="grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 items-center gap-4">
          {
            AboutList.map((item,index)=>(
              <div className="flex flex-col gap-2 border-2 border-gray-300 rounded-xl p-4 col-span-1" key={index}>
                <span className="bg-emerald-300 p-2 rounded w-fit">{item.img}</span>
                <span className="text-xl font-semibold">{item.title}</span>
                <p className="text-md text-gray-500 ">{item.des}</p>
              </div>
            ))
          }
      </div>
    </div>
  )
}

export default About
