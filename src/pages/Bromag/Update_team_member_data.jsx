import React from "react";
import Navbar from "../../components/bromag/Dashboard/Navbar";
import Sidebar from "../../components/bromag/Dashboard/Sidebar";
import Update_team_member from "../../components/bromag/Team/Update_team_member";

const Update_team_member_data = () => {
  return (
    <>
      <Navbar />
      <div className="flex">
        <Sidebar />
        <Update_team_member />
      </div>
    </>
  );
};

export default Update_team_member_data;
