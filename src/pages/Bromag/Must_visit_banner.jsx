import React from 'react';
import Navbar from '../../components/bromag/Dashboard/Navbar';
import Sidebar from '../../components/bromag/Dashboard/Sidebar';
import MustVisit_banner_table from '../../components/bromag/MustVisit_banner/MustVisit_banner_table';

const Must_visit_banner = () => {
  return (
    <>
      <Navbar />
      <div className="flex">
        <Sidebar />
        <MustVisit_banner_table />
      </div>
    </>
  );
}

export default Must_visit_banner;
