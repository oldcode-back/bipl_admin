import React from "react";
import Navbar from "../../components/bromag/Dashboard/Navbar";
import Sidebar from "../../components/bromag/Dashboard/Sidebar";
import Update_partners_page from "../../components/bromag/Partners_coll/Update_partners_page";

const Update_partners = () => {
  return (
    <>
      <Navbar />
      <div className="flex">
        <Sidebar />
        <Update_partners_page />
      </div>
    </>
  );
};

export default Update_partners;
