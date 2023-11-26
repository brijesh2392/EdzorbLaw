import React, { useEffect, useState } from "react";
import Edzorb from "../assets/Edzorb.png";
import { Link } from "react-router-dom";
import { HiMenu } from "react-icons/hi/";
import { ImCross } from "react-icons/im";

const Navbar = () => {

  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    setMenuOpen(true);
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
 // " md:flex justify-center items-center gap-4"
  return (
    <>
      <div className=" max-w-[1240px] mx-auto flex justify-between text-lg font-semibold">
        <Link to="/"><img src={Edzorb} alt="React logo" className=" h-20" /></Link>


        <div className={` ${
            menuOpen ? "block" : "hidden md:block"
          } md:static absolute min-h-fit right-3 top-[0] md:w-auto w-[95%] mt-5 rounded-2xl text-white md:text-inherit z-50 p-5 bg-gradient-to-br from-[#6f6f6f] to-[#d4bfe9] md:bg-none flex-col md:flex-row flex gap-5 justify-center items-center px-5`}>
       
          <Link to="/TestSeries">
            
                Test Series
              
          </Link>
          <Link to="/Notes">Notes</Link>
          <Link to="/ContactUs">Contact Us</Link>
          <div className=" border-2 border-gray-500 py-1.5 px-3 rounded-xl font-semibold md:hover:bg-gray-100 hover:bg-gradient-to-br from-[#c5c4c4] to-[#d4bfe9] hover:shadow-2xl ">
            <Link to="/Login">
            Login
            </Link>
          </div>
          <div className=" border-2 border-blue-800 py-1.5 px-3 rounded-xl bg-blue-900 text-gray-100 hover:bg-blue-950 font-semibold hover:shadow-2xl ">
            <Link to="/SignUp">
            Sign Up
            </Link>
          </div>
        </div>
        <div className="mt-7 mr-5 z-50 md:hidden">
          {menuOpen ? (
            <ImCross size={20} onClick={toggleMenu} />
          ) : (
            <HiMenu size={30} onClick={toggleMenu} />
          )}
        </div>
      </div>
    </>
  );
};

export default Navbar;
