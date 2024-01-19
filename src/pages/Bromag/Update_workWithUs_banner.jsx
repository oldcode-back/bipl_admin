import React from "react";
import Navbar from "../../components/bromag/Dashboard/Navbar";
import Sidebar from "../../components/bromag/Dashboard/Sidebar";
import WorkwithUs_banner_update_page from "../../components/bromag/Work_with_us/WorkwithUs_banner_update_page";

const Update_workWithUs_banner = () => {
  return (
    <>
      <Navbar />
      <div className="flex">
        <Sidebar />
        < WorkwithUs_banner_update_page/>
      </div>
    </>
  );
};

export default Update_workWithUs_banner;
