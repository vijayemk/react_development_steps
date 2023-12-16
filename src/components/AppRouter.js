import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import CountAdd from "./CountAdd";
import Home from "../pages/Home";

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/count" element={<CountAdd />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
