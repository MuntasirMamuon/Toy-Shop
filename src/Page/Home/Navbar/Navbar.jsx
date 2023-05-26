import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Sheard/Provider/AuthProvider';
import logo from '../../../assets/logo.jpg'


const Navbar = () => {
  const { user,  logOut, userDetails} = useContext(AuthContext);

    return (
        <div className="navbar  bg-[#437bad]  ">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost  lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-[#437bad] rounded-box w-52">
              <li><Link className='font-bold text-1xl' to="/">Home</Link ></li>
              <li><Link className='font-bold text-1xl' to="/allToy">All Toys</Link ></li>


              {
                (user?.email)&&<li><Link className='font-bold text-1xl' to="/myToy">My Toys</Link ></li>
              }
              
              <li><Link className='font-bold text-1xl' to="/addToy">Add A Toy</Link ></li>
              <li><Link className='font-bold text-1xl' to="/blog">Blog</Link ></li>
            <li><Link className='font-bold text-1xl' to="/login">Login</Link ></li>
            <li><Link className='font-bold text-1xl' to="/register">Register</Link ></li>
             
            </ul>
          </div>
          <Link to="" ><img className='w-28 rounded-full ' run src={logo}></img></Link >
         <Link to="/" className='ml-5 font-bold'>Toy Shop</Link >
        </div>
        <div className="navbar-center hidden   lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li><Link className='font-bold text-1xl' to="/">Home</Link ></li>
            <li><Link className='font-bold text-1xl' to="/blog">Blog</Link ></li>
            <li><Link className='font-bold text-1xl' to="/allToy">All Toys</Link ></li>
            {
                (user?.email)&&<li><Link className='font-bold text-1xl' to="/myToy">My Toys</Link ></li>
              }
              {
                (user?.email)&&<li><Link className='font-bold text-1xl' to="/addToy">Add A Toy</Link ></li>
              }
          </ul>
        </div>
        <div className="navbar-end">
        {user && (
         <Link>

                <img className="rounded-full w-16  " src={user?.photoURL} title={user?.displayName} alt="" />
          </Link>
           )}
        {user ? (
                 <button onClick={logOut} className="mr-5 font-bold text-1xl">
                  Logout
                </button>
             ) : (
                <Link to="/login">
                <button className="mr-5 font-bold text-1xl  ">Login</button>
                </Link>
              )}
           <Link  to="/register"className='mr-5 font-bold text-1xl'>Register</Link >
        </div>
      </div>
    );
};

export default Navbar;