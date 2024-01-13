import React from "react";
import Sidebar from "../../components/bromag/Dashboard/Sidebar";
import Add_Upcoming_page from "../../components/bromag/Upcoming_coll/Add_Upcoming_page";
import Navbar from "../../components/bromag/Dashboard/Navbar";

const Add_upcoming = () => {
  return (
    <>
      <Navbar />
      <div className="flex">
        <Sidebar />
        <Add_Upcoming_page />
      </div>
    </>
  );
};

export default Add_upcoming;
