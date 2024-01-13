import React from 'react';
import Navbar from '../../components/bromag/Dashboard/Navbar';
import Sidebar from '../../components/bromag/Dashboard/Sidebar';
import Partners_banner_table from '../../components/bromag/Partners_banner/Partners_banner_table';

const Partners_banner = () => {
  return (
    <>
      <Navbar />
      <div className="flex">
        <Sidebar />
        <Partners_banner_table />
      </div>
    </>
  );
}

export default Partners_banner;
