import React, { useContext, useState } from "react";
import { AuthContext } from "../../Sheard/Provider/AuthProvider";
import Select from "react-select";

import Swal from "sweetalert2";

// const options = [
 
 
//   { value: "Bat and Ball Toys", label: "Bat and Ball Toys" },
//   { value: "Outdoor Sports Toys", label: "Outdoor Sports Toys" },
//   { value: "Target Sports Toys", label: "Target Sports Toys" },
// ];
const AddToy = () => {
  const { user } = useContext(AuthContext);

  const handleAddToy = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.toyName.value;
    const sellerName=form.sellerName.value;
    const photo = form.picture.value;
    const categoryToy=form.categoryToy.value;
    const price = form.Price.value;
    const rating = form.rating.value;
    const quantity = form.quantity.value;
    const description = form.description.value;
    const email = user?.email;
  
    const allAddToy = {
      name,
      email,
      photo,
      price,
      rating,
      quantity,
      description,
      categoryToy,
      sellerName
    };
    // console.log( selectedOptions);
    // server site data send part
    fetch("https://toy-shop-server-gray.vercel.app/toy", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(allAddToy),
    })
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        // if(data.insertedId){
        //   Swal.fire({
        //     title: "Success!",
        //     text: "Toy included successfully",
        //     icon: "success",
        //     confirmButtonText: "Done",
        //   });
        // }
      });
  };

  return (
    <div className="my-10">
      <h1 className="text-3xl font-bold text-center mb-4">Add A Toy </h1>
      <form
        onSubmit={handleAddToy}
        className="card-body grid grid-cols-2 lg:mx-20 rounded-lg border-2 p-4 "
      >
        <div className="form-control lg:w-2/3 ">
          <label className="label">
            <span className="label-text">Picture</span>
          </label>
          <input
            type="text"
            name="picture"
            placeholder="Picture URL"
            className="input input-bordered"
            required
          />
        </div>

        <div className="form-control lg:w-2/3">
          <label className="label">
            <span className="label-text">Toy Name</span>
          </label>
          <input
            type="text"
            name="toyName"
            placeholder="Toy Name"
            className="input input-bordered"
            required
          />
        </div>
        <div className="form-control lg:w-2/3">
          <label className="label">
            <span className="label-text">Seller Name</span>
          </label>
          <input
            type="text"
            name="sellerName"
            placeholder="Seller Name"
            defaultValue={user.displayName}
            readOnly
            className="input input-bordered"
            required
          />
        </div>
        <div className="form-control lg:w-2/3">
          <label className="label">
            <span className="label-text">Seller email</span>
          </label>
          <input
            type="text"
            name="sellerName"
            defaultValue={user.email}
            placeholder="Seller Name"
           readOnly
            className="input input-bordered"
            required
          />
        </div>


        <div className="form-control lg:w-2/3">
          <label className="label">
            <span className="label-text">Price</span>
          </label>
          <input
            type="text"
            name="Price"
            placeholder="Price"
            className="input input-bordered"
            required
          />
        </div>
        <div className="form-control lg:w-2/3">
          <label className="label">
            <span className="label-text">Rating</span>
          </label>
          <input
            type="text"
            name="rating"
            placeholder="Rating"
            className="input input-bordered"
            required
          />
        </div>
        <div  className="form-control lg:w-2/3">
      
         <label className="label">
            <span className="label-text">Select Category</span>
          </label>
         
         <select name="categoryToy" className="input input-bordered">
            <option value="Bat and Ball Toys">Bat and Ball Toys</option>
            <option value="Outdoor Sports Toys">Outdoor Sports Toys</option>
            <option value="Target Sports Toys">Target Sports Toys</option>
          </select>
      
        </div>
        <div className="form-control lg:w-2/3">
          <label className="label">
            <span className="label-text">Quantity</span>
          </label>
          <input
            type="text"
            name="quantity"
            placeholder="Available Quantity"
            className="input input-bordered"
            required
          />
        </div>
        <div className="form-control lg:w-2/3">
          <label className="label">
            <span className="label-text">Description</span>
          </label>
          <textarea
            name="description"
            className="border"
            id=""
            cols="10"
            rows="5"
          ></textarea>
        </div>
<br />
        <div className="form-control mt-3">
          <button className="rounded-md btn-block lg:mx-64 px-3.5 py-2 m-1 overflow-hidden relative group cursor-pointer border-2 font-medium border-indigo-600 text-white">
            <span className="absolute w-64 h-0 transition-all duration-300 origin-center rotate-45 -translate-x-20 bg-[#5a189a] top-1/2 group-hover:h-64 group-hover:-translate-y-32 ease"></span>
            <input
              type="submit"
              className="relative   text-indigo-600 transition duration-300 group-hover:text-white ease"
              value="Add A Toy"
            />
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddToy;
