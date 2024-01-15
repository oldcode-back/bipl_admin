import React from "react";
import Navbar from "../../components/bromag/Dashboard/Navbar";
import Sidebar from "../../components/bromag/Dashboard/Sidebar";
import Update_upcoming_page from "../../components/bromag/Upcoming_coll/Update_upcoming_page";

const Update_upcoming = () => {
  return (
    <>
      <Navbar />
      <div className="flex">
        <Sidebar />
        <Update_upcoming_page />
      </div>
    </>
  );
};

export default Update_upcoming;
