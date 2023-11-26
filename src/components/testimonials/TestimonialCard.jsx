import React from 'react';
import { FaStar } from "react-icons/fa6";


const TestimonialCard = ({name, avatar, testimony}) => {
  return (
    <>

        
     <div className=' border-2 border-gray-300 w-[90%] rounded-lg flex flex-col items-center justify-center text-xs md:text-base h-[400px] md:h-[450px] px-5 gap-5 my-10 shadow-xl hover:shadow-2xl'>
        <img src={avatar} alt="testimonial image" />
        <div className=' flex'><FaStar /><FaStar /><FaStar /><FaStar /><FaStar /></div>
        <p>{testimony} <span className=' text-blue-700'>Read more</span></p>
        <div className=' text-base md:text-lg font-bold text-blue-800'>{name}</div>
        
    </div>   
    </>
  )
}

export default TestimonialCard