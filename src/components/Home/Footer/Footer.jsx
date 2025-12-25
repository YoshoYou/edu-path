

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white p-10">
        <div className=" flex sm:justify-between sm:items-center flex-col gap-10 ">
            <div className="">
                <span className="text-2xl font-bold">EduPath</span>
                <p>Empwering learners worldwide with quality education and expert-led courses.</p>
            </div>
            <div className="flex flex-col">
                <span className="text-2xl font-bold">Company</span>
                <span>About Us</span>
                <span>Careers</span>
                <span>Press</span>
            </div>

        </div>
        <hr className="bg-gray-200 mt-10" />
        <div className="flex items-center justify-center mt-15">2024 EduPath. All rights reserved Done by Aya</div>
      
    </footer>
  )
}

export default Footer
