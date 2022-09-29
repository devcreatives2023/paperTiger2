import React from "react";
import { Founders, Gallery, Guiding, OurStory, Process, Services } from "../../components";
const Home = () => {
  return (
    <div className=" xl:w-[100%] lg:w-[100%] w-[90%]">
      <div className="uppercase xl:mt-12 lg:mt-12 text-center justify-center items-center relative top-10">
        <p className=" xl:text-xl  lg:text-xl text-[13px]">Cat slap dog in face russian blue chase mice</p>
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
      <div className=" xl:p-main lg:p-main px-2 ">
        <OurStory />
        <Services />
        <Founders />
        <Gallery/>
        <Process />
        <Guiding />
      </div>
    </div>
  );
};

export default Home;
