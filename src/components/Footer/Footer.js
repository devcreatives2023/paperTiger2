import React from "react";
import { Link } from "react-router-dom";
import { Icons } from "../../constants";
import Navbar from "../Navbar/Navbar";
import { motion } from "framer-motion";
import Nav from "./Nav";
const Footer = () => {
  return (
    <>
    <div className="rounded-[30px] px-10 xl:h-[65vh] lg:h-[65vh] p-5 py-10 border
     border-black text-white grid xl:grid-cols-5 lg:grid-cols-5 grid-cols-1 ">
      <div className=" col-span-1 xl:text-text lg:text-text">
        <Link to="/">Back to top </Link>
      </div>
      <div className="flex flex-col col-span-1 xl:ml-[-39px] lg:ml-[-39px] xl:text-text lg:text-text gap-y-10 ">
        <p> Family owned and <br /> operated since 2022.</p>
        <p>
          All rights reserved .
          <br />
          All wrong reserved
        </p>
        <p className=" text-sm flex items-center">
          <Icons.AiFillHeart className="mr-2"/> 2022 Abrar Muthana
        </p>
        <p className=" text-gray-400">Data Privacy </p>
      </div>

      <div className="text-text xl:w-[35%] lg:w-[35%]">
        <p className=" flex justify-between items-center"><span>  NJ </span> <span className=" text-[12px] mr-[20px] text-gray-400">HQ</span></p>
        <p> 10:26 AM</p>
      </div>
    <div className=" col-span-2 flex justify-end ">
    <ul className=" flex flex-col gap-y-7 text-text">
      <motion.li 

      className=' rounded-full ease-in-out transition p-2 bg-transparent hover:bg-icons   duration-300'><a href=""><Icons.BsTwitter /> </a> </motion.li>
      <motion.li 

      className=' rounded-full p-2  bg-transparent hover:bg-icons  transition duration-300'><a href=""><Icons.BsInstagram /> </a> </motion.li>
      <motion.li 

      className=' rounded-full p-2 bg-transparent hover:bg-icons  transition duration-300 hover:bg-'><a href=""><Icons.FaDotCircle /> </a> </motion.li>
      <motion.li 

      className=' rounded-full p-2 bg-transparent hover:bg-icons transition duration-300 '><a href=""><Icons.FiFigma /> </a> </motion.li>
    </ul>
    </div>
        </div>
    <Nav />
    </>
  );
};

export default Footer;
