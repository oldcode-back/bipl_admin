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
import Update_must_visit from "../pages/Bromag/Update_must_visit";
import Update_upcoming_page from "../components/bromag/Upcoming_coll/Update_upcoming_page";
import Update_upcoming from "../pages/Bromag/Update_upcoming";
import Add_team_members from "../pages/Bromag/Add_team_members";
import Team from "../pages/Bromag/Team";
import Update_team_member_data from "../pages/Bromag/Update_team_member_data";
import Add_lookout_videos from "../pages/Bromag/Add_lookout_videos";
import Lookout_videos from "../pages/Bromag/Lookout_videos";
import Update_lookout from "../pages/Bromag/Update_lookout";
import Add_home_banner from "../pages/Bromag/Add_home_banner";
import Home_banners from "../pages/Bromag/Home_banners";
import Add_work_with_us_banner from "../pages/Bromag/Add_work_with_us_banner";
import Add_who_we_are_banner from "../pages/Bromag/Add_who_we_are_banner";
import Work_with_us_banner from "../pages/Bromag/Work_with_us_banner";
import Who_we_are_banner from "../pages/Bromag/Who_we_are_banner";

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
          path="/update-must-visit/:restaurantId"
          element={
            <>
              <BromagAccess />
              <Update_must_visit />
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
          path="/update-upcoming/:restaurantId"
          element={
            <>
              <BromagAccess />
              <Update_upcoming />
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
        <Route
          path="/add-team"
          element={
            <>
              <BromagAccess />
              <Add_team_members />
            </>
          }
        />
        <Route
          path="/team"
          element={
            <>
              <BromagAccess />
              <Team />
            </>
          }
        />
        <Route
          path="/update-employee-data/:memberId"
          element={
            <>
              <BromagAccess />
              <Update_team_member_data />
            </>
          }
        />
        <Route
          path="/add-lookout-videos"
          element={
            <>
              <BromagAccess />
              <Add_lookout_videos />
            </>
          }
        />
        <Route
          path="/lookout-table"
          element={
            <>
              <BromagAccess />
              <Lookout_videos />
            </>
          }
        />
        <Route
          path="/update-lookout/:lookoutId"
          element={
            <>
              <BromagAccess />
              <Update_lookout />
            </>
          }
        />
        <Route
          path="/add-home-banner"
          element={
            <>
              <BromagAccess />
              <Add_home_banner />
            </>
          }
        />
        <Route
          path="/home-banners"
          element={
            <>
              <BromagAccess />
              <Home_banners />
            </>
          }
        />
        <Route
          path="/work-with-us-banners"
          element={
            <>
              <BromagAccess />
              <Work_with_us_banner />
            </>
          }
        />
        <Route
          path="/add-work-with-us-banner"
          element={
            <>
              <BromagAccess />
              <Add_work_with_us_banner />
            </>
          }
        />
        <Route
          path="/who-we-are-banners"
          element={
            <>
              <BromagAccess />
              <Who_we_are_banner />
            </>
          }
        />
        <Route
          path="/add-who-we-are-banner"
          element={
            <>
              <BromagAccess />
              <Add_who_we_are_banner />
            </>
          }
        />
      </Routes>
    </>
  );
};

export default Bromag;
