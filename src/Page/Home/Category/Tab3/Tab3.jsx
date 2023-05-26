import React, { useContext } from "react";
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { AuthContext } from "../../../../Sheard/Provider/AuthProvider";
const Tab3 = ({category}) => {
  const {user}=useContext(AuthContext)

    const {name,photo,price,rating,sellerName,quantity,email,_id}=category
    const handleDetails = () =>{
      if(!user){
        toast("You need to log in first")
      }
     
      
  }
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3">
      <div className="card card-compact h-80 w-96 bg-base-100 shadow-xl">
        <figure>
          <img className="w-28 border-4 border-gray-300 rounded-lg" src={photo} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Toy Name:{name}</h2>
          <p className="font-bold ">Price:{price}</p>
          <p className="font-bold ">Rating:{rating}</p>

          <div className="card-actions justify-center">
            <Link to={`/singleToy/${_id}`} onClick={handleDetails} className="btn btn-primary">View Details</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tab3;
