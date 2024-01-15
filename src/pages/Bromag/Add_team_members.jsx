import React from "react";
import Navbar from "../../components/bromag/Dashboard/Navbar";
import Sidebar from "../../components/bromag/Dashboard/Sidebar";
import Add_team from "../../components/bromag/Team/Add_team";

const Add_team_members = () => {
  return (
    <>
      <Navbar />
      <div className="flex">
        <Sidebar />
        <Add_team />
      </div>
    </>
  );
};

export default Add_team_members;
