import React from 'react';
import { useLoaderData } from 'react-router-dom';


const SingleToy = () => {

    const toyData=useLoaderData()
    // console.log(toyData);
   const{name,toyName,photo,description,price,email,rating,quantity,picture}=toyData
   console.log(toyData);
    return (
       <>
       
       <h1 className="text-5xl  font-bold text-fuchsia-500 text-center mt-4">
        Toy Details
      </h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 my-12  rounded-2xl bg-base-100 shadow-2xl w-3/4 border-4 border-blue-200 mx-auto p-6">
        <div className=" w-[450px] p-0">
          <h2 className="card-title text-2xl">{toyName}</h2>
          <p className="font-bold ">
            <span >Description: </span>
            {description}
          </p>
          <br />

        {name && <p className="font-bold ">Seller Name: {name}</p>}
          <p className="font-bold ">Seller Email: {email}</p>
          <p className="font-bold ">Price: ${price}</p>
          <div className="justify-end mt-10">
            <div className="badge badge-outline p-3 sm:mb-5 border-yellow-500 bg-yellow-500 mr-2">
              <p className="py-2 px-3">Rating: </p>
              {rating}
            </div>
            <div className="badge badge-outline p-3 bg-fuchsia-500 border-fuchsia-500">
              <p className="py-2 px-3">Quantity: </p>
              {quantity}
            </div>
          </div>
        </div>
        <div className=" mr-0">
          <img className="border-2  rounded-lg shadow-xl  p-2  w-44 mr-0" src={photo} alt="Album" />
        </div>
      </div>
       </>
    );
};

export default SingleToy;