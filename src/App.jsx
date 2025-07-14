import React, { useState, useEffect, useRef } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Services from "./pages/Services";
import Contacts from "./pages/Contacts";
import About from "./pages/About";

import Header from "./components/common/Header";
import Footer from "./components/common/Footer";
import BackgroundVideo from "./components/common/Background";
import GlobalLoader from "./components/common/GlobalLoader";
import Portfolio from "./pages/Portfolio";

const App = () => {
  const [showLoader, setShowLoader] = useState(true);
  const isFirstLoad = useRef(true);

  useEffect(() => {
    if (isFirstLoad.current) {
      const timer = setTimeout(() => setShowLoader(false), 2500);
      return () => clearTimeout(timer);
    } else {
      setShowLoader(false);
    }
    isFirstLoad.current = false;
  }, []);

  return (
    <>
      {showLoader && <GlobalLoader />}
      <BackgroundVideo />
      <div className={`transition-opacity duration-500 ${showLoader ? "opacity-0 pointer-events-none" : "opacity-100"}`}>
        <Router>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contacts" element={<Contacts />} />
            <Route path="/about" element={<About />} />
            <Route path="/portfolio" element={<Portfolio />} />
          </Routes>
          <Footer />
        </Router>
      </div>
    </>
  );
};

export default App;
