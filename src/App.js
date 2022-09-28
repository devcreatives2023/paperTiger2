import { AnimatePresence } from "framer-motion";
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Navbar } from "./components";
import { Home } from "./pages";

const App = () => {
  return (
    <div className=" bg-body">
      <AnimatePresence>
        <BrowserRouter>
        <Navbar/>
          <Routes>
            <Route path="/">
              <Route index element={<Home />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </AnimatePresence>
    </div>
  );
};

export default App;
