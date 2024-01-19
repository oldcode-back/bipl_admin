import React from "react";
import Navbar from "../../components/bromag/Dashboard/Navbar";
import Sidebar from "../../components/bromag/Dashboard/Sidebar";
import MustVisit_banner_update_page from "../../components/bromag/MustVisit_banner/MustVisit_banner_update_page";

const Update_mustVisit_banner = () => {
  return (
    <>
      <Navbar />
      <div className="flex">
        <Sidebar />
        < MustVisit_banner_update_page/>
      </div>
    </>
  );
};

export default Update_mustVisit_banner;
