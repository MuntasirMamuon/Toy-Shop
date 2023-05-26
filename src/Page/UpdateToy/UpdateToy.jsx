import React, { useContext } from 'react';
import { AuthContext } from '../../Sheard/Provider/AuthProvider';
import { useLoaderData, useParams } from 'react-router-dom';
import Swal from 'sweetalert2';


const UpdateToy = () => {


   const {user,}=useContext(AuthContext)

   const toyData=useLoaderData()
   const {_id}=toyData

    const handleUpdateToy=e=>{
           e.preventDefault();

           const form=e.target;

           const Price=form.price.value;
           const Quantity=form.quantity.value;
           const Description=form.description.value;
          

           const UpdateAllData={
            Price,
            Quantity,
            Description
           }

        console.log(UpdateAllData);

        fetch(`https://toy-shop-server-gray.vercel.app/toy/${_id}`,{
            method:'PUT',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(UpdateAllData)
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data);

              if(data.modifiedCount>0){
                Swal.fire({
                  title: "Success!",
                  text: "Toy updated successfully",
                  icon: "success",
                  confirmButtonText: "Done",
                });
              }

        })
     

    }



    return (
        <div className='my-10'>
            <h1 className='text-3xl font-bold text-center mb-4'>Update A Toy </h1>
            <form onSubmit={handleUpdateToy} className="card-body grid grid-cols-2 lg:mx-20 rounded-lg border-2 p-4 " >
                
              
                <div className="form-control lg:w-2/3">
                  <label className="label">
                    <span className="label-text">Price</span>
                  </label>
                  <input
                    type="text"
                    name="price"
                    placeholder="Price"
                    className="input input-bordered"
                    required
                  />
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
                <div className="form-control w-3/4 ">
                  <label className="label">
                    <span className="label-text">Description</span>
                  </label>
                  <textarea name="description" className='border' id="" cols="10" rows="5"></textarea>

                </div>
                
                <div className="form-control mt-3">

                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                
                  <button className="rounded-md btn-block  px-3.5 py-2 m-1 overflow-hidden relative group cursor-pointer border-2 font-medium border-indigo-600 text-white">
                    <span className="absolute w-64 h-0 transition-all duration-300 origin-center rotate-45 -translate-x-20 bg-[#5a189a] top-1/2 group-hover:h-64 group-hover:-translate-y-32 ease"></span>
                    <input
                      type="submit"
                      className="relative text-indigo-600 transition duration-300 group-hover:text-white ease"
                      value="Update A Toy"
                    />
                  </button>
                </div>
              </form>
        </div>
    );
};

export default UpdateToy;