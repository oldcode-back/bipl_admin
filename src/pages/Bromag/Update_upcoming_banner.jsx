import React from "react";
import Navbar from "../../components/bromag/Dashboard/Navbar";
import Sidebar from "../../components/bromag/Dashboard/Sidebar";
import Upcoming_banner_update_page from "../../components/bromag/Upcoming_banner/Upcoming_banner_update_page";

const Update_upcoming_banner = () => {
  return (
    <>
      <Navbar />
      <div className="flex">
        <Sidebar />
        < Upcoming_banner_update_page/>
      </div>
    </>
  );
};

export default Update_upcoming_banner;
