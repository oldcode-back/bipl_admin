import React from 'react';
import Navbar from '../../components/bromag/Dashboard/Navbar';
import Sidebar from '../../components/bromag/Dashboard/Sidebar';
import Upcoming_banner_table from '../../components/bromag/Upcoming_banner/Upcoming_banner_table';

const Upcoming_banner = () => {
  return (
    <>
      <Navbar />
      <div className="flex">
        <Sidebar />
        <Upcoming_banner_table />
      </div>
    </>
  );
}

export default Upcoming_banner;
