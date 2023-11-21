import React from "react";
import Edzorb from "../assets/Edzorb.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <div className=" max-w-[1240px] mx-auto flex justify-between text-lg font-semibold">
        <Link to="/"><img src={Edzorb} alt="React logo" className=" h-20" /></Link>
        <div className=" flex justify-center items-center gap-4">
          <Link to="/TestSeries">
            <select>
              <option value="" disabled selected hidden>
                Test Series
              </option>
              <option value="prelims">Prelims</option>
              <option value="mains">Mains</option>
            </select>
          </Link>
          <Link to="/Notes">Notes</Link>
          <Link to="/ContactUs">Contact Us</Link>
          <div className=" border-2 border-gray-500 py-1.5 px-3 rounded-xl font-semibold hover:bg-gray-100 hover:shadow-2xl ">
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
      </div>
    </>
  );
};

export default Navbar;
