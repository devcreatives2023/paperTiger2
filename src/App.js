import { AnimatePresence } from "framer-motion";
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Footer, Navbar } from "./components";
import { Home } from "./pages";

const App = () => {
  return (
    <div className=" bg-black">
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
    </div>
  );
};

export default App;
