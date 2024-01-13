import React from 'react';
import Navbar from '../../components/bromag/Dashboard/Navbar';
import Sidebar from '../../components/bromag/Dashboard/Sidebar';
import Add_banner_image from '../../components/bromag/Partners_banner/Add_banner_image';

const Add_partners_banner = () => {
  return (
    <>
      <Navbar />
      <div className="flex">
        <Sidebar />
        <Add_banner_image />
      </div>
    </>
  );
}

export default Add_partners_banner;
