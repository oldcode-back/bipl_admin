import React from "react";
import Navbar from "../../components/bromag/Dashboard/Navbar";
import Sidebar from "../../components/bromag/Dashboard/Sidebar";
import Work_with_us_banner_table from "../../components/bromag/Work_with_us/Work_with_us_banner_table";

const Work_with_us_banner = () => {
  return (
    <>
      <Navbar />
      <div className="flex">
        <Sidebar />
        < Work_with_us_banner_table/>
      </div>
    </>
  );
};

export default Work_with_us_banner;
