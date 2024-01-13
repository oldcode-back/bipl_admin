import React from "react";
import Sidebar from "../../components/bromag/Dashboard/Sidebar";
import Navbar from "../../components/bromag/Dashboard/Navbar";
import Add_banner_image from "../../components/bromag/MustVisit_banner/Add_banner_image";

const Add_must_visit_banner = () => {
  return (
    <>
      <Navbar />
      <div className="flex">
        <Sidebar />
        <Add_banner_image/>
      </div>
    </>
  );
};

export default Add_must_visit_banner;
