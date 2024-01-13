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
import BromagAccess from "../access-manger/BromagAccess";
import Partners_banner from "../pages/Bromag/Partners_banner";
import Add_partners_banner from "../pages/Bromag/Add_partners_banner";
import Add_must_visit_banner from "../pages/Bromag/Add_must_visit_banner";
import Add_upcoming_banner from "../pages/Bromag/Add_upcoming_banner";
import Upcoming_banner from "../pages/Bromag/Upcoming_banner";
import Must_visit_banner from "../pages/Bromag/Must_visit_banner";

const Bromag = () => {
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <BromagAccess />
              <SignIn />
            </>
          }
        />
        <Route
          path="/dashboard"
          element={
            <>
              <BromagAccess />
              <Dashboard />
            </>
          }
        />

        <Route
          path="/partners"
          element={
            <>
              <BromagAccess />
              <Partners_restaurant />
            </>
          }
        />
        <Route
          path="/must-visit"
          element={
            <>
              <BromagAccess />
              <Must_visit />
            </>
          }
        />
        <Route
          path="/upcoming"
          element={
            <>
              <BromagAccess />
              <Upcoming_restaurant />
            </>
          }
        />
        <Route
          path="/add-must-visit"
          element={
            <>
              <BromagAccess />
              <Add_must_visit />
            </>
          }
        />
        <Route
          path="/add-upcoming"
          element={
            <>
              <BromagAccess />
              <Add_upcoming />
            </>
          }
        />

        <Route
          path="/add-partners"
          element={
            <>
              <BromagAccess />
              <Add_partners />
            </>
          }
        />
        <Route
          path="/update-partners/:restaurantId"
          element={
            <>
              <BromagAccess />
              <Update_partners />
            </>
          }
        />
        <Route
          path="/partners-banner"
          element={
            <>
              <BromagAccess />
              <Partners_banner />
            </>
          }
        />
         <Route
          path="/add-partners-banner"
          element={
            <>
              <BromagAccess />
              <Add_partners_banner />
            </>
          }
        />
        <Route
          path="/must-visit-banner"
          element={
            <>
              <BromagAccess />
              <Must_visit_banner />
            </>
          }
        />
         <Route
          path="/add-must-visit-banner"
          element={
            <>
              <BromagAccess />
              <Add_must_visit_banner />
            </>
          }
        />
        <Route
          path="/upcoming-banner"
          element={
            <>
              <BromagAccess />
              <Upcoming_banner />
            </>
          }
        />
         <Route
          path="/add-upcoming-banner"
          element={
            <>
              <BromagAccess />
              <Add_upcoming_banner />
            </>
          }
        />
      </Routes>
    </>
  );
};

export default Bromag;
