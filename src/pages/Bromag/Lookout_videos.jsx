import React from "react";
import Sidebar from "../../components/bromag/Dashboard/Sidebar";
import Navbar from "../../components/bromag/Dashboard/Navbar";
import Lookout_table from "../../components/bromag/Lookout_videos/Lookout_table";

const Lookout_videos = () => {
  return (
    <>
      <Navbar />
      <div className="flex">
        <Sidebar />
        <Lookout_table />
      </div>
    </>
  );
};

export default Lookout_videos;
