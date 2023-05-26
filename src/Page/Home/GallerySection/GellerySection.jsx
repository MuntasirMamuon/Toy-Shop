import React from "react";
import img1 from '../../../assets/img-01.jpg'
import img2 from '../../../assets/img-02.jpg'
import img3 from '../../../assets/img-03.jpg'
import img4 from '../../../assets/img-04.jpg'
import img5 from '../../../assets/img-05.jpg'
import img7 from '../../../assets/img-07.jpg'

import AOS from 'aos';
import 'aos/dist/aos.css'; 

const GellerySection = () => {
  return (
    <div className="">
        <h2 className="text-center font-bold text-4xl mt-6 mb-6">Gallery Section</h2>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-3 ">
      <div data-aos="fade-right"
     data-aos-offset="300"
     data-aos-easing="ease-in-sine" className="card w-96   bg-base-100 shadow-xl">
        <figure>
          <img className="h-full"
            src={img1}
            alt="Shoes"
          />
        </figure>
       
      </div>
      <div data-aos="fade-up"
     data-aos-anchor-placement="center-center"  className="card w-96 bg-base-100 shadow-xl">
        <figure>
          <img className="h-64"
            src={img2}
            alt="Shoes"
          />
        </figure>
       
      </div>
      <div  data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000" className="card w-96 bg-base-100 shadow-xl">
        <figure>
          <img className="h-64"
            src={img3}
            alt="Shoes"
          />
        </figure>
      </div>
      <div  data-aos="zoom-in-down" className="card w-96 bg-base-100 shadow-xl">
        <figure>
          <img className="h-64"
            src={img4}
            alt="Shoes"
          />
        </figure>
      </div>
      <div data-aos="zoom-in" className="card w-96 bg-base-100 shadow-xl">
        <figure>
          <img className="h-64"
            src={img5}
            alt="Shoes"
          />
        </figure>
      </div>
      <div  data-aos="flip-left" className="card w-96 bg-base-100 shadow-xl">
        <figure>
          <img className="h-64"
            src={img7}
            alt="Shoes"
          />
        </figure>
      </div>
    </div>
    </div>
  );
};

export default GellerySection;
