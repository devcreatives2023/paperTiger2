import React from "react";
import { images } from "../../constants";
import {
  useTransform,
  useViewportScroll,
  motion,
  AnimatePresence,
} from "framer-motion";
const Gallery = () => {
  const colorOutput = ["#000", "#000", "#000", "#000"];
  const { scrollYProgress } = useViewportScroll();
  const background = useTransform(
    scrollYProgress,
    [0, 0.33, 0.66, 1],
    colorOutput
  );
  return (
    <>
      <motion.div
        className=" xl:h-[130vh] lg:h-[130vh]  h-[117vh]"
      >
        <div className="h-[80vh] xl:grid grid-cols-4 lg:grid xl:grid-cols-4  xl:grid-rows-[40] lg:grid-rows-[40] gap-x-10">
          <div className=" col-span-1 row-span-6">T1</div>
          <div className=" col-span-2 relative row-span-3 ">
            <p className="absolute  text-white z-10 left-[50%] top-[12%] ">T3</p>
            <motion.video
              initial={{ y: 90 }}
              whileInView={{
                y: 0,
                transition: {
                  duration: 1,
                },
              }}
              muted
              autoPlay
              controls
              className="realtive z-0 xl:h-[570px] lg:h-[570px] h-[190px] object-cover
            grayscale-[100%] border rounded-[30px] outline-none "
            >
              <source src={images.gv2} />
            </motion.video>
          </div>
          <div className=" col-span-1 row-span-6 xl:mt-[150px] lg:mt-[150px]">
            T2
            <motion.video
                initial={{ y: 100 }}
                whileInView={{
                  y: 0,
                  transition: {
                    duration: 6,
                    ease: "easeInOut",
                  },
                }}
              muted
              autoPlay
              controls
              className="object-cover  xl:w-[250px] lg:w-[270px] w-[230px]
               xl:h-[500px] lg:h-[500px] h-[300px] grayscale-[100%] border rounded-[30px] outline-none "
            >
              <source src={images.gv1} />
            </motion.video>
          </div>
        </div>
        <div className=" col-span-1  row-span-6  ">
          <motion.img
              initial={{ y: 100 }}
              whileInView={{
                y: 0,
                transition: {
                  duration: 1,
                  ease: "easeInOut",
                  delay:0.3
                },
              }}
            src={images.g3}
            className=" object-cover 
          grayscale-[100%] border rounded-[30px] 
          outline-none xl:w-[550px] lg:w-[550px] xl:h-[280px] h-[180px] lg:h-[280px] bottom-0"
          />
        </div>
      </motion.div>
    </>
  );
};

export default Gallery;
