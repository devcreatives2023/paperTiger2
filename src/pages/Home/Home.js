import React from "react";
import { Founders, OurStory, Services } from "../../components";
const Home = () => {
  return (
    <div>
      <div className="uppercase mt-12 text-center justify-center items-center relative top-10">
        <p className=" text-xl">Cat slap dog in face russian blue chase mice</p>
        <h1 className=" xl:top-[-80px] lg:top-[-80px] relative xl:text-[20rem] lg:text-[20rem] font-title uppercase ">
          we are
        </h1>
        <h1 className=" xl:top-[-250px] lg:top-[-250px] relative xl:text-[20rem] lg:text-[20rem] font-title uppercase ">
          paper tiger
        </h1>
        <p className=" text-xl relative w-[40%] m-auto flex justify-center items-center xl:top-[-310px] lg:top-[-310px]">
          Cat slap dog in face russian blue chase mice Cat slap dog in face
          russian blue chase mice Cat slap dog
        </p>
      </div>
      <div className=" p-main">
        <OurStory />
        <Services />
        <Founders />
      </div>
    </div>
  );
};

export default Home;
