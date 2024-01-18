import React from "react";
import Navbar from "../../components/bromag/Dashboard/Navbar";
import Sidebar from "../../components/bromag/Dashboard/Sidebar";
import Lookout_update_page from "../../components/bromag/Lookout_videos/Lookout_update_page";

const Update_lookout = () => {
  return (
    <>
      <Navbar />
      <div className="flex">
        <Sidebar />
        <Lookout_update_page />
      </div>
    </>
  );
};

export default Update_lookout;
