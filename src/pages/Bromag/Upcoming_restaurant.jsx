import React from "react";
import Upcoming_page from "../../components/bromag/Upcoming_coll/Upcoming_page";
import Sidebar from "../../components/bromag/Dashboard/Sidebar";
import Navbar from "../../components/bromag/Dashboard/Navbar";

const Upcoming_restaurant = () => {
  return (
    <>
      <Navbar />
      <div className="flex">
        <Sidebar />
        <Upcoming_page />
      </div>
    </>
  );
};

export default Upcoming_restaurant;
