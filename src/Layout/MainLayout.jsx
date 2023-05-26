import React from 'react';

import { Outlet } from 'react-router-dom';
import Home from '../Page/Home/Home';
import Footer from '../Page/Home/Footer/Footer';

const MainLayout = () => {
    return (
        <div>
            
            <Home></Home>
            <Outlet></Outlet>
            <Footer></Footer>

        </div>
    );
};

export default MainLayout;