import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Footer } from "./components";
import { Home } from "./pages";
import { AnimatePresence ,motion} from "framer-motion";


const App = () => {

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
