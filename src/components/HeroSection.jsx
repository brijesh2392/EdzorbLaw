import React from 'react';
import HeroImage from "../assets/HeroImage.png";
import AppStore from "../assets/AppStore.png";
import PlayStore from "../assets/PlayStore.png";

const HeroSection = () => {
  return (
    <div>
        <div className=' max-w-[1240px] mx-auto md:flex  justify-between mt-10'>
            {/* Text section */}
            <div className=' flex flex-col justify-center items-center px-10 md:w-[70%]'>
                <div className=''>
                    <h1 className=' text-5xl font-bold my-5'>Turn Your Judiciary Dream Into Reality</h1>
                    <div className=' text-lg max-w-md font-bold ' >Revolutionize Your Prelims + Mains + Interview Preparation in an Integrated Manner.</div>
                    <div className=' font-bold p-4 border-2 border-black rounded mr-[30%] my-5'>#1 Most Downloaded Judicial Services App</div>
                    
                    <div className=' flex gap-5'>
                    <a href="https://play.google.com/store/search?q=edzorb+law+app&c=apps&hl=en&gl=US" target="blank"> <img src={PlayStore} alt="download from Playstore"  className=' h-10' /> </a>
                    <a href="https://apps.apple.com/us/app/edzorb-law-judiciary-law/id1519148879" target="blank"> <img src={AppStore} alt="download from Appstore" className=' h-10' /> </a>                        
                    </div>
                </div>
            </div>
            {/* Picture section */}
            <div className=' md:flex items-center justify-center h-full hidden '>
                <img src={HeroImage} alt="HeroImage" />
            </div>
        </div>
    </div>
  )
}

export default HeroSection