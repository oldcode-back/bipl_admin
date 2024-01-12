import React, { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import SignIn from "../pages/Bromag/SignIn";
import Dashboard from "../pages/Bromag/Dashboard";
import Partners_restaurant from "../pages/Bromag/Partners_restaurant";
import Must_visit from "../pages/Bromag/Must_visit";
import Upcoming_restaurant from "../pages/Bromag/Upcoming_restaurant";
import Add_must_visit from "../pages/Bromag/Add_must_visit";
import Add_upcoming from "../pages/Bromag/Add_upcoming";
import Add_partners from "../pages/Bromag/Add_partners";
import Update_partners from "../pages/Bromag/Update_partners";

const Bromag = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/partners" element={<Partners_restaurant />} />
        <Route path="/must-visit" element={<Must_visit />} />
        <Route path="/upcoming" element={<Upcoming_restaurant />} />
        <Route path="/add-must-visit" element={<Add_must_visit />} />
        <Route path="/add-upcoming" element={<Add_upcoming />} />

        <Route path="/add-partners" element={<Add_partners />} />
        <Route path="/update-partners/:restaurantId" element={<Update_partners />} />




      </Routes>
    </>
  );
};

export default Bromag;
