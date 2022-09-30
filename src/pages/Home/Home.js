import React from "react";
import { motion } from "framer-motion";
import { Founders, Gallery, Guiding, Navbar, OurStory, PaperTiger, Process, Services } from "../../components";
const Home = () => {

  return (
    
    <motion.div className="bg-body  border">
      <motion.div className=" mt-[-50px]" >
   <Navbar color="black"  contact="1.1rem" position="top-0"/>

      <div className="uppercase  xl:mt-12 pt-[60px] lg:mt-12 text-center justify-center items-center relative top-10">
        <p className=" xl:text-xl   lg:text-xl text-[13px]">Cat slap dog in face russian blue chase mice</p>
        <h1 className=" xl:top-[-80px] lg:top-[-80px] relative xl:text-[20rem] lg:text-[20rem] font-title uppercase ">
          we are
        </h1>
        <h1 className=" xl:top-[-250px] lg:top-[-250px] relative xl:text-[20rem] lg:text-[20rem] font-title uppercase ">
          paper tiger
        </h1>
        <p className=" xl:text-xl lg:text-xl relative text-[10px] mb-12 xl:mb-0 lg:mb-0 xl:w-[40%] lg:w-[40%] m-auto flex justify-center items-center xl:top-[-310px] lg:top-[-310px]">
          Cat slap dog in face russian blue chase mice Cat slap dog in face
          russian blue chase mice Cat slap dog
        </p>
      </div>
      </motion.div>
    <div className=" xl:w-[100%] lg:w-[100%] w-[90%]  bg-body">
      <div className=" xl:p-main lg:p-main px-2 ">
        <OurStory />
        <Services />
        <Founders />
        <Gallery/>
        <Process />
        <Guiding />
        <PaperTiger />
      </div>
    </div>
    </motion.div>
  );
};

export default Home;
