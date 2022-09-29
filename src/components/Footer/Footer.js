import React from "react";
import { Link } from "react-router-dom";
import { Icons } from "../../constants";
import Navbar from "../Navbar/Navbar";
import { motion } from "framer-motion";
const Footer = () => {
  return (
    <>
    <div className="rounded-[30px] px-10 h-[65vh] p-5 py-10 border
     border-black  text-white grid grid-cols-5 ">
      <div className=" col-span-1 text-text">
        <Link to="/">Back to top </Link>
      </div>
      <div className="flex flex-col col-span-1 ml-[-39px] text-text gap-y-10 ">
        <p> Family owned and <br /> operated since 2008.</p>
        <p>
          All rights reserved .
          <br />
          All wrong reserved
        </p>
        <p className=" flex items-center">
          <Icons.AiFillHeart className="mr-2"/> 2022 Abrar Muthana
        </p>
        <p className=" text-gray-400">Data Privacy </p>
      </div>

      <div className="text-text w-[35%]">
        <p className=" flex justify-between items-center"><span>  NJ </span> <span className=" text-[12px] text-gray-400">HQ</span></p>
        <p> 10:26 AM</p>
      </div>
    <div className=" col-span-2 flex justify-end ">
    <ul className=" flex flex-col gap-y-7 text-text">
      <motion.li 

      className=' rounded-full p-2 bg-transparent hover:bg-icons  transition duration-100'><a href=""><Icons.BsTwitter /> </a> </motion.li>
      <motion.li 

      className=' rounded-full p-2  bg-transparent hover:bg-icons  transition duration-100'><a href=""><Icons.BsInstagram /> </a> </motion.li>
      <motion.li 

      className=' rounded-full p-2 bg-transparent hover:bg-icons  transition duration-100 hover:bg-'><a href=""><Icons.FaDotCircle /> </a> </motion.li>
      <motion.li 

      className=' rounded-full p-2 bg-transparent hover:bg-icons transition duration-100 '><a href=""><Icons.FiFigma /> </a> </motion.li>
    </ul>
    </div>
        </div>
    <Navbar  color="white"  contact="2rem" />
    </>
  );
};

export default Footer;
