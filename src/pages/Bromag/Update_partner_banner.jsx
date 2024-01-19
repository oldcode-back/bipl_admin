import React from "react";
import Navbar from "../../components/bromag/Dashboard/Navbar";
import Sidebar from "../../components/bromag/Dashboard/Sidebar";
import Partner_banner_update_page from "../../components/bromag/Partners_banner/Partner_banner_update_page";

const Update_partner_banner = () => {
  return (
    <>
      <Navbar />
      <div className="flex">
        <Sidebar />
        < Partner_banner_update_page/>
      </div>
    </>
  );
};

export default Update_partner_banner;
