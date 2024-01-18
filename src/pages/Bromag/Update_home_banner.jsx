import React from "react";
import Navbar from "../../components/bromag/Dashboard/Navbar";
import Sidebar from "../../components/bromag/Dashboard/Sidebar";
import Home_banner_update_page from "../../components/bromag/Home_banners/Home_banner_update_page";

const Update_home_banner = () => {
  return (
    <>
      <Navbar />
      <div className="flex">
        <Sidebar />
        <Home_banner_update_page />
      </div>
    </>
  );
};

export default Update_home_banner;
