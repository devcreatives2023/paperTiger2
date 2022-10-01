import React from "react";
import { Icons } from "../../constants";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

// sidebar
const menuVariants = {
  opened: {
    opacity: 1,
    y: 0,
  },
  closed: {
    opacity: 0,
    y: 40,
  },
};
const Sidebar = () => {
  const [show, setShow] = React.useState(false);
  return (
    <div>
      <div
        className="  w-[100%] h-[100%]"
        style={{ transition: "all 0.5s ease-in" }}
      >
        <div className="flex justify-between">
          <div className=" flex text-center font-semibold xl:text-2xl lg:text-xl text-[18px] tracking-wider">
            PaperTiger
          </div>
          <button onClick={() => setShow(!show)}>
            <Icons.HiOutlineMenuAlt4
              className="absolute right-[30px] 
             text-[2rem] top-2"
            />
          </button>
        </div>
        <motion.nav
          initial={false}
          variants={menuVariants}
          animate={show ? "opened" : "closed"}
          className=" bg-[#eeeeeef3] h-screen z-10 fixed top-0 w-[100%] left-0 right-0  p-10 flex flex-col   "
        >
          <motion.button
            className=" top-[20px]  text-[28px] right-7 absolute text-black "
            onClick={() => setShow(!show)}
          >
            <Icons.GiTireIronCross />
          </motion.button>
          <ul className="flex flex-col  w-[50%] m-auto mt-[80px] leading-[70px]  text-2xl">
            <li className=" border-t-2 border-black w-[100%]  text-center  hover:opacity-[0.8]">
              <Link to="/work">work</Link>
            </li>
            <li className=" border-t-2 border-black w-[100%]  text-center  hover:opacity-[0.8]">
              <Link to="/">about</Link>
            </li>
            <li className=" border-t-2 border-black w-[100%]  text-center  hover:opacity-[0.8]">
              <Link to="/contact">Careers</Link>
            </li>
            <li className=" border-t-2 border-black w-[100%]  text-center  hover:opacity-[0.8]">
              <Link to="/contact">Contact us</Link>
            </li>
          </ul>
        </motion.nav>
      </div>
    </div>
  );
};

export default Sidebar;
