import React from "react";
import Sidebar from "../../components/bromag/Dashboard/Sidebar";
import Navbar from "../../components/bromag/Dashboard/Navbar";
import Home_banner_table from "../../components/bromag/Home_banners/Home_banner_table";

const Home_banners = () => {
  return (
    <>
      <Navbar />
      <div className="flex">
        <Sidebar />
        <Home_banner_table />
      </div>
    </>
  );
};

export default Home_banners;
