import React from "react";
import { Link } from "react-router-dom";
import { Icons } from "../../constants";
import { motion } from "framer-motion";

// variants for navbar links motion with underline
const underline = {
  default: {
    x: -400,
    transition: {
      duration: 0.6,
    },
  },

  hover: {
    x: 0,
    transition: {
      duration: 0.6,
    },
  },
};
const contactVariants = {
  enter: {
    opacity: 1,
    transition: {
      duration: 0.5,
    },
    display: "inline",
  },
  exit: {
    opacity: 0.8,
    transition: {
      duration: 0.5,
    },
    transitionEnd: {
      display: "none",
    },
  },
};

const Navbar = ({ color, contact }) => {
  const [contactus, setContactus] = React.useState(false);
  const contactmotion = () => {
    setContactus(!contactus);
  };

  const [show, setShow] = React.useState(false);
  const [lastscrollY, setLastScrollY] = React.useState(0);
  // show and hidden navbar with scroll
  const controlNavbar = () => {
    if (typeof window !== "undefined") {
      if (window.scrollY > lastscrollY) {
        // if scroll down hide the navbar
        setShow(true);
      } else {
        setShow(false);
      }
      // remeber current page location to use next move
      setLastScrollY(window.scrollY);
    }
  };
  React.useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", controlNavbar);

      // cleanup function
      return () => {
        window.removeEventListener("scroll", controlNavbar);
      };
    }
  }, [lastscrollY]);

  return (
    <nav
      className={`fixed xl:w-[100%] lg:w-[100%] h-[40px] xl:h-[80px] w-screen  xl:py-3 lg:py-3 py-[52px] ${lastscrollY?" bg-body ":" bg-transparent"} z-10 transition-all duration-300   ${
        show && "hidden"
      }`}
    >
      <div
        className=" grid grid-cols-2 font-text xl:p-xl transition   items-center lg:p-xl xl:px-7 lg:px-2 "
        style={{ color: color }}
      >
        <div className="  flex gap-x-[137px] ">
          <div className=" flex text-center font-semibold xl:text-2xl lg:text-xl tracking-wider">
            PaperTiger
          </div>
          <div className=" invisible xl:visible lg:visible ">
            <ul className=" flex gap-5 mt-2 text-xl">
              <motion.li
                className="relative grid justify-center overflow-hidden"
                initial="default"
                whileHover="hover"
                animate="default"
              >
                <Link to=""> Work </Link>
                <motion.div
                  variants={underline}
                  className="relative bg-black h-[3px] w-[100%] z-1 left-0"
                />
              </motion.li>
              <motion.li
                className="relative grid justify-center overflow-hidden"
                initial="default"
                whileHover="hover"
                animate="default"
              >
                <Link to=""> About </Link>
                <motion.div
                  variants={underline}
                  className="relative bg-black h-[3px] w-[100%] z-1 left-0"
                />
              </motion.li>
              <motion.li
                className="relative grid justify-center overflow-hidden"
                initial="default"
                whileHover="hover"
                animate="default"
              >
                <Link to=""> Careers </Link>
                <motion.div
                  variants={underline}
                  className="relative bg-black h-[3px] w-[100%] z-1 left-0"
                />
              </motion.li>
            </ul>
          </div>
        </div>
        <motion.div
          className="flex justify-end gap-x-3 w-[200px] ml-auto items-end  cursor-pointer   invisible xl:visible lg:visible"
          style={{ fontSize: contact }}
          onMouseEnter={contactmotion}
          onMouseLeave={contactmotion}
        >
          <motion.p
            initial="enter"
            variants={contactVariants}
            exit="enter"
            animate={contactus ? "exit" : "enter"}
            className=" rounded-[60px] py-1 px-4 border text-center  uppercase font-semibold  "
            style={{ borderColor: color }}
          >
            Contact us
          </motion.p>
          <motion.button
            initial="exit"
            variants={contactVariants}
            animate={contactus ? "enter" : "exit"}
            className=" rounded-full  bg-red-600 p-2"
            style={{ borderColor: color }}
          >
            <Icons.FiArrowDownRight />
          </motion.button>
        </motion.div>
      </div>
      <div className=" inline xl:hidden lg:hidden">
        <Icons.AiFillHeart />
      </div>
    </nav>
  );
};

export default Navbar;
