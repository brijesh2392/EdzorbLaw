import React, { useState } from "react";
import { HiOutlineMail } from "react-icons/hi";
import {
  BsFillArrowRightCircleFill,
  BsWhatsapp,
  BsLinkedin,
} from "react-icons/bs";
import { FaRankingStar } from "react-icons/fa6";
import { PiStudentBold } from "react-icons/pi";
import { IoShield } from "react-icons/io5";


const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [project, setProject] = useState("");

  const onSubmit = () => {
    window.location.href = `mailto:2392brijesh@gmail.com?subject=Project Inquiry !! &body=Name: ${name}%0AEmail: ${email}%0AProject: ${project}`;
    setName(""), setEmail(""), setProject("");
  };

  return (
    <div className="max-w-[1024px] mx-auto">
      <div className=" text-center pt-24">
        <h1 className=" gradient-text text-4xl text-center font-bold pb-2 ">
          {" "}
          Contact Us{" "}
        </h1>
        
      </div>

      <div className="  md:flex md:justify-around md:gap-10">
        
        {/* =============== Why Edzorb Law ============ */}
        <div className=" w-[90%] my-5 text-sm mx-8 text-justify md:text-xl">
        <p className=" text-center font-bold text-xl "> Why Edzorb  Law</p>
          <p className=" py-5 text-lg">Edzorb’s mission: Equal access to top-notch study materials for aspiring judicial exam candidates, achieving top 10 ranks through our guidance and your dedication</p>
          <p className=" text-lg">We want to make sure that every aspirant gets access to the best study material there is.</p>
          <p className=" py-5 text-lg">Give learners access to the highest quality digital learning materials and resources.</p>
          <p className=" text-lg">Edzorb Law’s Guidance + Your Dedication = A rank in Top 10!</p>

            <div className=" h-52 rounded-xl flex justify-center items-center gap-10 ">
                <span className=" border-2 border-gray-300 px-4 flex flex-col items-center text-center py-2 rounded-xl text-base" > <FaRankingStar size={40} /> 1000+ Ranks </span>
                <span className=" border-2 border-gray-300 px-4 flex flex-col items-center text-center py-2 rounded-xl text-base"> <PiStudentBold size={40} /> 10000+ Students </span>
                <span className=" border-2 border-gray-300 px-4 flex flex-col items-center text-center py-2 rounded-xl text-base"> <IoShield size={40}/> 100000+ Users  </span>
            </div>

        </div>
        {/* ===============Write me your Project============ */}

        <div className=" w-full">
          <p className="text-center md:mr-40 py-4 text-textClr text-xl font-bold">
          Get A Call Back
          </p>
          <div>
            <form className=" flex flex-col gap-10 sm:px-12 ">
              <span>
                <input
                  type="text"
                  placeholder="Insert your Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="  text-blue-200 border-2 border-gray-500 hover:shadow-lg rounded-xl p-3 px-4 md:w-10/12 w-[80%]  mx-12 md:mx-0"
                />
                
              </span>

              <span>
                <input
                  type="email"
                  placeholder="Insert your email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                  className="border-2 border-gray-500 hover:shadow-lg rounded-xl p-3 px-4 md:w-10/12 w-[80%]  mx-12 md:mx-0 "
                />
                
              </span>

              <span>
              <input
                  type="number"
                  placeholder="Insert your Mobile no."
                  value={mobile}
                  onChange={(e) => {
                    set(e.target.value);
                  }}
                  className="  border-2 border-gray-500 hover:shadow-lg rounded-xl p-3 px-4 md:w-10/12 w-[80%]  mx-12 md:mx-0 "
                />
              </span>

              <span>
                <input
                  type="text"
                  placeholder=" your Message (Optional)"
                  autoComplete="off"
                  value={project}
                  onChange={(e) => {
                    setProject(e.target.value);
                  }}
                  className="  border-2 border-gray-500 hover:shadow-lg rounded-xl pt-2 pb-16 px-4 md:w-10/12 w-[80%]   mx-12 md:mx-0"
                />
                
              </span>

              <button
                onClick={onSubmit}
                className=" text-xl border-2 border-gray-500 hover:shadow-lg p-3 rounded-xl md:w-10/12 w-[80%] mx-11 md:mx-0   position   text-1.5xl font-semibold"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;