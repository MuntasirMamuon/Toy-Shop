import React from 'react';
import Navbar from './Navbar/Navbar';
import { Outlet } from 'react-router-dom';
import BannerSection from './BannerSection/BannerSection';



const Home = () => {

    return (
        <div>
          {/* navbar section  */}
          <Navbar></Navbar>
          {/* <BannerSection></BannerSection> */}
          
        </div>
    );
};

export default Home;