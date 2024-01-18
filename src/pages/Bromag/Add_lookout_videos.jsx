import React from "react";
import Sidebar from "../../components/bromag/Dashboard/Sidebar";
import Navbar from "../../components/bromag/Dashboard/Navbar";
import Add_lookout_page from "../../components/bromag/Lookout_videos/Add_lookout_page";

const Add_lookout_videos = () => {
  return (
    <>
      <Navbar />
      <div className="flex">
        <Sidebar />
        <Add_lookout_page />
      </div>
    </>
  );
};

export default Add_lookout_videos;
