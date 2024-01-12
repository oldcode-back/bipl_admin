import React from "react";
import Add_mustVisit_page from "../../components/bromag/Must_visit_coll/Add_mustVisit_page";
import Sidebar from "../../components/bromag/Dashboard/Sidebar";
import Navbar from "../../components/bromag/Dashboard/Navbar";

const Add_must_visit = () => {
  return (
    <>
      <Navbar />
      <div className="flex">
        <Sidebar />
        <Add_mustVisit_page />
      </div>
    </>
  );
};

export default Add_must_visit;
