import React from "react";
import { Link } from "react-router-dom";
import { Icons, images } from "../../constants";
import { motion } from "framer-motion";
const Founders = () => {
  return (
    <div className="flex flex-col gap-y-10">
      <div className="  font-text border-t-[1px] grid-cols-4 gap-x-[40px] border-black grid items-start py-4">
        <div className=" flex gap-4 col-span-1  text-text items-center uppercase">
          <Icons.FaCircle /> Founders
        </div>
        <div className=" col-span-1">
          {/* <motion.img
        initial={{width:"1px"}}
        whileHover={{width:"450px",transition:{
          duration:0.6,
          ease:"easeInOut"
        }}}
        src={images.founder1} className=' grayscale-[100%] rounded-[40px] relative top-[-130px]  
        transition-300 h-[450px] object-cover left-[-90px]' />  */}
        </div>
        <div className=" col-span-2 grid grid-cols-2 ">
          <div className=" flex font-parg  font-semibold text-[2rem]  items-center uppercase">
            John Smith
          </div>

          <div className=" flex flex-col gap-y-2 font-parg justify-center text-text items-center ">
            <p>President </p>
            <p>
              if ur interstedi hiring us ,
              <Link to="" className="  border-b-[1px] border-black">
                email John
              </Link>
            </p>
          </div>
        </div>
      </div>
      <div className=" font-text border-t-[2px] grid-cols-4 gap-x-[40px]  border-black grid items-start py-4">
        <div className=" flex gap-4 col-span-1  text-text items-center uppercase"></div>
        <div className=" col-span-1">
          <motion.img
            initial={{ width: "1px" }}
            whileHover={{
              width: "450px",
              transition: {
                duration: 0.6,
                ease: "easeInOut",
              },
            }}
            src={images.founder2}
            className=" grayscale-[100%] rounded-[40px] relative top-[-250px]  
            transition-300 h-[450px] object-cover left-[-90px]"
          />
        </div>
        <div className=" col-span-2 grid grid-cols-2 ">
          <div className="flex font-parg  font-semibold text-[2rem] items-center uppercase">
            John Smith
          </div>

          <div className="flex flex-col gap-y-2 font-parg justify-center text-text items-center ">
            <p>President </p>
            <p>
              if ur interstedi hiring us ,
              <Link to="" className="  border-b-[1px] border-black">
                email John
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Founders;
