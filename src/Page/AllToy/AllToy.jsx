import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import AllToyData from './AllToyData';



const AllToy = () => {

   const[toyAll,setToyAll]=useState([])
   const[search,setSearch]=useState('')
   useEffect(()=>{
    fetch('https://toy-shop-server-gray.vercel.app/toy')
    .then(res=>res.json())
    .then(data=>setToyAll(data))
   },[])
// console.log(toyAll);
const handleSearch = () =>{
    
  fetch(`https://toy-shop-server-gray.vercel.app/searchToy/${search}`)
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      setToyAll(data);
    });
}

    return (
      <div>

<div className=" p-2 text-center">
        <input
        onChange={(event) => setSearch(event.target.value)}
          type="text"
          className="p-2 border-2 rounded-lg"
        />{" "}
        <button className="bg-[#333c44] text-white px-4 py-2 rounded-xl" onClick={handleSearch}>Search</button>
      </div>


          <div className="overflow-x-auto w-full mt-10 mb-10">
        <table className="table w-full">
          {/* head */}
          <thead>
            <tr>
              <th className='font-semibold text-xl'>Seller Name</th>
              <th className='font-semibold text-xl'>Toy Name</th>
              <th className='font-semibold text-xl'>Sub-category</th>
              <th className='font-semibold text-xl'>price</th>
               <th className='font-semibold text-xl'>Available Quantity</th>

              <th className='font-semibold text-xl'>View</th>
            </tr>
          </thead>
          <tbody>
         {
            toyAll.map(toyData=><AllToyData key={toyData._id} toyData={toyData}></AllToyData>)
         }
          </tbody>
          {/* foot */}
        </table>
      </div>
      </div>
    );
};

export default AllToy;