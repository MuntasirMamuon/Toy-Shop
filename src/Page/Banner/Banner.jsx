import React from "react";
import GellerySection from "../Home/GallerySection/GellerySection";
import img7 from "../../assets/img-07.jpg";
import img8 from "../../assets/img-08.jpg";
import img9 from "../../assets/img-09.jpg";
import img10 from "../../assets/Screenshot_1.png";
import Category from "../Home/Category/Category";
import Client from "../Home/Client/Client";
import img1 from '../../assets/banner1.png'
import img2 from '../../assets/5542155.jpg'
import img3 from '../../assets/4011308.jpg'
import FeedbackSection from "../Home/FeedbackSection/FeedbackSection";
const Banner = () => {
  return (
    <div>

<div className="carousel w-full mt-10 h-[600px] ">
  <div id="slide1" className="carousel-item relative w-full">
    <img src={img1} className="w-full  rounded-xl" />
    <div className="absolute  h-full rounded-xl flex items-center right-0  left-0 top-0   ">
     
     
    </div>
    <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0 ">
      <a href="#slide4" className="btn btn-circle mr-5">❮</a> 
      <a href="#slide2" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide2" className="carousel-item relative w-full">
    <img src={img2} className="w-full rounded-xl" />
    <div className="absolute  h-full rounded-xl flex items-center right-0  left-0 top-0   ">
     
    </div>
    <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0 ">
      <a href="#slide1" className="btn btn-circle  mr-5">❮</a> 
      <a href="#slide3" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide3" className="carousel-item relative w-full">
    <img src={img3} className="w-full rounded-xl" />
    
    <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0 ">
      <a href="#slide2" className="btn btn-circle mr-5">❮</a> 
      <a href="#slide4" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide4" className="carousel-item relative w-full">
    <img src={img10} className="w-full rounded-xl"  />
   
    <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0 ">
      <a href="#slide3" className="btn btn-circle mr-5">❮</a> 
      <a href="#slide1" className="btn btn-circle">❯</a>
    </div>
  </div>
</div>









  {/* gellery section part call  */}
      <GellerySection></GellerySection>
      {/* category data base show part  */}
      <Category></Category>
      {/* client feedback section  */}
      <Client></Client>
      <FeedbackSection></FeedbackSection>
    </div>
  );
};

export default Banner;
