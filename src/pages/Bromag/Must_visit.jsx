import React from "react";
import Must_visit_page from "../../components/bromag/Must_visit_coll/Must_visit_page";
import Sidebar from "../../components/bromag/Dashboard/Sidebar";
import Navbar from "../../components/bromag/Dashboard/Navbar";

const Must_visit = () => {
  return (
    <>
      <Navbar />
      <div className="flex">
        <Sidebar />
        <Must_visit_page />
      </div>
    </>
  );
};

export default Must_visit;
