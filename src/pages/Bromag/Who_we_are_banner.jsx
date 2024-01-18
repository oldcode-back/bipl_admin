import React from "react";
import Navbar from "../../components/bromag/Dashboard/Navbar";
import Sidebar from "../../components/bromag/Dashboard/Sidebar";
import Who_we_are_banner_table from "../../components/bromag/Who_we_are/Who_we_are_banner_table";

const Who_we_are_banner = () => {
  return (
    <>
      <Navbar />
      <div className="flex">
        <Sidebar />
        < Who_we_are_banner_table/>
      </div>
    </>
  );
};

export default Who_we_are_banner;
