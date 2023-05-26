import React from "react";
import client1 from '../../../assets/client1.jpg'
import client2 from '../../../assets/Client2.jpg'
import client3 from '../../../assets/client3.jpg'
import { AiFillStar } from "react-icons/ai";
const ClientCard = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-3">
      <div className="card w-96  h-[450px] glass">
        <figure>
          <img className="w-48 rounded-full"
            src={client1}
            alt="car!"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title text-purple-500 font-bold" >Ethan Thompson</h2>
          <p>The client appreciated the innovative concept of the toy sport. They mentioned that the product offered a unique and exciting way for children to engage in physical activity and develop their motor skills. The client felt that the toy sport stood out in the market due to its originality.</p>
          <div className="flex gap-2 text-yellow-500 text-2xl">
          <AiFillStar/><AiFillStar/><AiFillStar/>
          </div>
        </div>
      </div>
<div className="card w-96   h-[450px] glass">
        <figure>
          <img className="w-48 rounded-full"
            src={client2}
            alt="car!"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title text-purple-500 font-bold">Sophia Reynolds</h2>
          <p>Our client expressed their satisfaction with the quality and durability of the toy sport. They mentioned that the materials used were sturdy and could withstand rigorous play. The client appreciated the attention to detail in the construction of the toy, ensuring that it would last even with frequent use.</p>
          <div className="flex gap-2 text-yellow-500 text-2xl">
          <AiFillStar/><AiFillStar/><AiFillStar/><AiFillStar/>
          </div>
        </div>
      </div>
      
      <div className="card w-96  h-[450px] glass">
        <figure>
          <img className="w-48 rounded-full"
            src={client3}
            alt="car!"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title text-purple-500 font-bold">Olivia Parker</h2>
          <p>Our client emphasized the positive impact that the toy sport had on children's physical development. They mentioned that the toy sport encouraged movement, hand-eye coordination, and gross motor skills, contributing to the overall well-being and growth of children.</p>
          <div className="flex gap-2 text-yellow-500 text-2xl">
          <AiFillStar/><AiFillStar/><AiFillStar/>
          </div>
        </div>
      </div>

    </div>
  );
};

export default ClientCard;
