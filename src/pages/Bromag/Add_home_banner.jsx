import React from "react";
import Sidebar from "../../components/bromag/Dashboard/Sidebar";
import Navbar from "../../components/bromag/Dashboard/Navbar";
import Add_banner_image from "../../components/bromag/Home_banners/Add_banner_image";

const Add_home_banner = () => {
  return (
    <>
      <Navbar />
      <div className="flex">
        <Sidebar />
        <Add_banner_image />
      </div>
    </>
  );
};

export default Add_home_banner;
