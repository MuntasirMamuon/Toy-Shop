import React from "react";
import { FaFacebookF, FaGithub, FaTwitter}from "react-icons/fa";
import { Link } from "react-router-dom";


const Footer = () => {
  return (
    // <div className="">
    //   <footer className="footer  p-10 bg-base-200 text-base-content">
    //     <div>
    //       <span className="footer-title">Services</span>
    //       <a className="link link-hover">Branding</a>
    //       <a className="link link-hover">Design</a>
    //       <a className="link link-hover">Marketing</a>
    //       <a className="link link-hover">Advertisement</a>
    //     </div>
    //     <div>
    //       <span className="footer-title">Company</span>
    //       <Link to='/' className="link link-hover">Home</Link>
    //       <Link to='/allToy' className="link link-hover">All Toy</Link>
    //       <Link to='/blog' className="link link-hover">Blog</Link>
    //       <Link to='/login' className="link link-hover">Login</Link>
    //       <Link to='/register'  className="link link-hover">Register</Link>
    //     </div>
    //     <div>
    //       <span className="footer-title">Legal</span>
    //       <a className="link link-hover">Terms of use</a>
    //       <a className="link link-hover">Privacy policy</a>
    //       <a className="link link-hover">Cookie policy</a>
    //     </div>
    //   </footer>
    //   <footer className="footer px-10 py-4 border-t bg-base-200 text-base-content border-base-300">
    //     <div className="items-center grid-flow-col">
    //       <svg
    //         width="24"
    //         height="24"
    //         viewBox="0 0 24 24"
    //         xmlns="http://www.w3.org/2000/svg"
    //         fillRule="evenodd"
    //         clipRule="evenodd"
    //         className="fill-current"
    //       >
    //         <path d="M22.672 15.226l-2.432.811.841 2.515c.33 1.019-.209 2.127-1.23 2.456-1.15.325-2.148-.321-2.463-1.226l-.84-2.518-5.013 1.677.84 2.517c.391 1.203-.434 2.542-1.831 2.542-.88 0-1.601-.564-1.86-1.314l-.842-2.516-2.431.809c-1.135.328-2.145-.317-2.463-1.229-.329-1.018.211-2.127 1.231-2.456l2.432-.809-1.621-4.823-2.432.808c-1.355.384-2.558-.59-2.558-1.839 0-.817.509-1.582 1.327-1.846l2.433-.809-.842-2.515c-.33-1.02.211-2.129 1.232-2.458 1.02-.329 2.13.209 2.461 1.229l.842 2.515 5.011-1.677-.839-2.517c-.403-1.238.484-2.553 1.843-2.553.819 0 1.585.509 1.85 1.326l.841 2.517 2.431-.81c1.02-.33 2.131.211 2.461 1.229.332 1.018-.21 2.126-1.23 2.456l-2.433.809 1.622 4.823 2.433-.809c1.242-.401 2.557.484 2.557 1.838 0 .819-.51 1.583-1.328 1.847m-8.992-6.428l-5.01 1.675 1.619 4.828 5.011-1.674-1.62-4.829z"></path>
    //       </svg>
    //       <p>
    //         ACME Industries Ltd. <br />
    //         Providing reliable tech since 2023
    //       </p>
    //     </div>
    //     <div className="md:place-self-center md:justify-self-end">
    //       <div className="grid grid-flow-col gap-4">
    //         <Link><FaFacebookF/></Link>
    //         <Link><FaGithub/></Link>
    //         <Link><FaTwitter/></Link>
             
            
            
    //       </div>
    //     </div>
    //   </footer>
    // </div>

    <footer className=" bg-[#437bad] rounded-lg text-black  py-8">
    <div className="container mx-auto px-4 lg:flex lg:justify-between">
      <div className="mb-4 w-1/3 lg:mb-0">
        <h2 className="text-lg font-bold mb-2">About Us</h2>
        <p className="text-black">Welcome to our sports toy website, your ultimate destination for all things sports-related! Explore our vast selection of high-quality sports toys, equipment, and accessories. Whether you're a beginner or a seasoned pro, our website has everything you need to fuel your sporting adventures and take your game to the next level. Start exploring today!</p>
       
        <p className="text-black"> CopyrightToy Shop &copy;2023</p>
      </div>
      <div className="mb-4 lg:mb-0">
        <h2 className="text-lg font-bold mb-2">Contact Us</h2>
        <p className="text-black">Patiya,Chattogram,bangladesh</p>
        <p className="text-black">Phone: 018-383-55239</p>
        <p className="text-black">Email: mdmuntasirmamun63@gmail.com</p>
      </div>

      <div className="mb-4 lg:mb-0">
        <h2 className="text-lg font-bold mb-2">Explore Link</h2>
        <Link to='/' className="text-black">Home</Link> <br />
        <Link to='/blog' className="text-black">Blog</Link> <br />
        <Link to='/allToy' className="text-black">All Toys</Link><br />
        <Link to='/login' className="text-black">Login</Link><br />
        <Link to='/register' className="text-black">Register</Link>
      </div>

      <div className="flex justify-end lg:mt-40  lg:justify-end">
        <ul className="flex space-x-4">
          <li>
            <Link to="https://www.facebook.com/mdmuntasir.mamun.589" className="text-gray-300  text-4xl hover:text-white">
              < FaFacebookF/>
            </Link>
          </li>
          <li>
            <Link to="#" className="text-gray-300 text-4xl hover:text-white">
             <FaTwitter/>
            </Link>
          </li>
          <li>
            <Link to="https://github.com/MuntasirMamuon" className="text-gray-300 text-4xl  hover:text-white">
              <FaGithub/>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  </footer>
  );
};

export default Footer;
