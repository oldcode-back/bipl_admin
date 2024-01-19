import React from "react";
import Navbar from "../../components/bromag/Dashboard/Navbar";
import Sidebar from "../../components/bromag/Dashboard/Sidebar";
import WhoWeAre_banner_update_page from "../../components/bromag/Who_we_are/WhoWeAre_banner_update_page";

const Update_whoWeAre_banner = () => {
  return (
    <>
      <Navbar />
      <div className="flex">
        <Sidebar />
        <WhoWeAre_banner_update_page/>
      </div>
    </>
  );
};

export default Update_whoWeAre_banner;
