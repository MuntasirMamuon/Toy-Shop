// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import Marquee from "react-fast-marquee";
import ClientCard from "./ClientCard";

const Client = () => {
  return (
  
   <div >
    <h1 className=" mb-20 mt-20 text-center font-bold text-cyan-400 text-4xl">Client Review</h1>
   <Marquee>
<ClientCard></ClientCard>
  </Marquee>
   </div>
  );
};

export default Client;
