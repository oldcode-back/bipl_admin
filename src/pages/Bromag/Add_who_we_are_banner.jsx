import React from "react";
import Sidebar from "../../components/bromag/Dashboard/Sidebar";
import Navbar from "../../components/bromag/Dashboard/Navbar";
import Add_banner_image from "../../components/bromag/Who_we_are/Add_banner_image";

const Add_who_we_are_banner = () => {
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

export default Add_who_we_are_banner;
