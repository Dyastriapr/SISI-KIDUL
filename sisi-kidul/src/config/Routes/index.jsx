import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../../pages/Home";
import { Module } from "../../pages/Module";


const Routing = () => {
  return (
    <Router>
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/module" element={<Module />} />
       
      </Routes>
    </Router>
  );
};

export default Routing;
