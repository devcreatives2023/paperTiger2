import { AnimatePresence } from "framer-motion";
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Footer } from "./components";
import { Home } from "./pages";
import { motion, useViewportScroll, useTransform } from "framer-motion";

const App = () => {
  const { scrollYProgress } = useViewportScroll();
  const chnageColor = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    [0, -200, -400]
  );

  return (
    <>
      <motion.div className=" overflow-x-hidden xl:overflow-auto lg:overflow-auto bg-black">
        <AnimatePresence>
          <BrowserRouter>
            <Routes>
              <Route path="/">
                <Route index element={<Home />} />
              </Route>
            </Routes>
            <Footer />
          </BrowserRouter>
        </AnimatePresence>
      </motion.div>
    </>
  );
};

export default App;
