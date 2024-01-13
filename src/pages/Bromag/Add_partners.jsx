import React from "react";
import Add_Partners_page from "../../components/bromag/Partners_coll/Add_Partners_page";
import Sidebar from "../../components/bromag/Dashboard/Sidebar";
import Navbar from "../../components/bromag/Dashboard/Navbar";

const Add_partners = () => {
  return (
    <>
      <Navbar />
      <div className="flex">
        <Sidebar />
        <Add_Partners_page />
      </div>
    </>
  );
};

export default Add_partners;
