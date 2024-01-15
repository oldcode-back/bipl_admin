import React from "react";
import Navbar from "../../components/bromag/Dashboard/Navbar";
import Sidebar from "../../components/bromag/Dashboard/Sidebar";
import Update_must_visit_page from "../../components/bromag/Must_visit_coll/Update_must_visit_page";

const Update_must_visit = () => {
  return (
    <>
      <Navbar />
      <div className="flex">
        <Sidebar />
        <Update_must_visit_page />
      </div>
    </>
  );
};

export default Update_must_visit;
