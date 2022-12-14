import React from "react";
import { Link } from "react-router-dom";
import { Icons, images } from "../../constants";
import { motion } from "framer-motion";
const imgvariant = {
  enter: {
    opacity: 1,
    width: "450px",
    transition: {
      duration: 0.5,
    },
    display: "block",
  },
  exit: {
    opacity: 0.8,
    width: "10px",
    transition: {
      duration: 0.5,
    },
    transitionEnd: {
      display: "none",
    },
  },
};
const textVariant = {
  enter: {
    opacity: 1,
    width: "100%",
    transition: {
      duration: 0.5,
    },
    display: "block",
  },
  exit: {
    opacity: 0.8,
    width: "-10%",
    transition: {
      duration: 0,
    },
    transitionEnd: {
      display: "none",
    },
  },
};

const Founders = () => {
  const [isMouse, setMouse] = React.useState(false);
  const [isMouse2, setMouse2] = React.useState(false);

  const showImg = () => {
    setMouse(!isMouse);
  };
  const showImg2 = () => {
    setMouse2(!isMouse);
  };
  return (
    <div className="flex   flex-col gap-y-10 xl:h-[60vh] lg:h-[60vh] h-[50vh] ">
      <motion.div
        onMouseEnter={showImg}
        onMouseLeave={showImg}
        className="  font-text border-t-[1px] xl:grid-cols-4 lg:grid-cols-4 grid-cols-2 
        
        xl:gap-x-[40px] lg:gap-x-[40px]  xl:h-[12vh]  lg:h-[12vh] border-black grid items-start py-4"
      >
        <div className=" flex gap-4 col-span-1 xl:text-text lg:text-text  items-center uppercase">
          <Icons.FaCircle /> Founders
        </div>
        <div className="">
          <motion.img
            initial="exit"
            animate={isMouse ? "enter" : "exit"}
            exit="exit"
            variants={imgvariant}
            src={images.founder1}
            className=" grayscale-[100%] rounded-[40px] relative top-[-130px]  
             transition-300 h-[450px] object-cover left-[-90px] z-10"
          />
        </div>
        <div className="pr-3 col-span-2 grid grid-cols-2 ">
          <div className=" flex font-parg  font-semibold xl:text-[2rem] lg:text-[2rem]  items-center uppercase">
            John Smith
          </div>

          <div className=" flex flex-col gap-y-2 
          font-parg justify-center text-[10px] xl:text-text lg:text-text 
          xl:items-center lg:items-center">
            <p>President </p>
            <p>
              if ur interstedi hiring us ,
              <Link to="" className="  border-b-[1px] border-black">
                email John
              </Link>
            </p>
          </div>
          <motion.div
            initial="exit"
            animate={isMouse ? "enter" : "exit"}
            exit="exit"
            variants={textVariant}
            className=" bg-red-700 flex  font-title absolute left-0 z-0 border rounded-[60px] mt-[-17px] text-[3rem] tracking-widest  uppercase w-[100% ] p-7 h-[18vh]"
          >
            <span>PaperTiger Can Do every thing </span>
            <span> PaperTiger Can Do every thing</span>
          </motion.div>
        </div>
      </motion.div>
      <motion.div
        onHoverStart={showImg2}
        onHoverEnd={showImg2}
        className="  font-text border-t-[1px] xl:grid-cols-4 lg:grid-cols-4 grid-cols-2 xl:gap-x-[40px] lg:gap-x-[40px] xl:h-[20vh] lg:h-[20vh] border-black grid items-start py-4"
      >
        <div className=" flex flex-col xl:flex-row lg:flex-row gap-4 col-span-1 text-text items-center uppercase"></div>
        <div className="">
        </div>
        <div className=" col-span-2 grid grid-cols-2 ">
          <div className=" flex font-parg  font-semibold xl:text-[2rem] lg:text-[2rem]  items-center uppercase">
            Eren yeger
          </div>

          <div className=" flex flex-col  text-[10px] gap-y-2 font-parg justify-center  xl:text-text lg:text-text  xl:items-center lg:tems-center ">
            <p>Chef </p>
            <p>
              if ur interstedi hiring us ,
              <Link to="" className="  border-b-[1px] border-black">
                email Eren
              </Link>
            </p>
          </div>

        </div>
      </motion.div>
    </div>
  );
};

export default Founders;
