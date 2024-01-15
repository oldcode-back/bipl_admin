import React from "react";
import Navbar from "../../components/bromag/Dashboard/Navbar";
import Sidebar from "../../components/bromag/Dashboard/Sidebar";
import Team_members from "../../components/bromag/Team/Team_members";

const Team = () => {
  return (
    <>
      <Navbar />
      <div className="flex">
        <Sidebar />
        <Team_members />
      </div>
    </>
  );
};

export default Team;
