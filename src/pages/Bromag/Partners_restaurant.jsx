import React from "react";
import Sidebar from "../../components/bromag/Dashboard/Sidebar";
import Partners_table from "../../components/bromag/Partners_coll/Partners_table";
import Navbar from "../../components/bromag/Dashboard/Navbar";

const Partners_restaurant = () => {
  return (
    <>
      <Navbar />
      <div className="flex">
        <Sidebar />
        <Partners_table />
      </div>
    </>
  );
};

export default Partners_restaurant;
