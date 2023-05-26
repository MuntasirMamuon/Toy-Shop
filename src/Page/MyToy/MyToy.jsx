import React, { useContext, useEffect, useState } from "react";
import MyToyCard from "./MyToyCard";
import { AuthContext } from "../../Sheard/Provider/AuthProvider";
import Swal from "sweetalert2";


const MyToy = () => {
  const { user } = useContext(AuthContext);

  const [toydata, setToyData] = useState([]);

  const [sorting,setSorting]=useState('')

  useEffect(() => {
    fetch(`https://toy-shop-server-gray.vercel.app/toy?email=${user?.email}&sort=${sorting}`)
      .then((res) => res.json())
      .then((data) => {
        setToyData(data);
        // console.log(data);
      });
  }, [sorting]);
  //    console.log(data);
  const handleToyDelete=(id)=>{
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://toy-shop-server-gray.vercel.app/toy/${id}`,{
          method:'DELETE',
    
        })
        .then(res=>res.json())
        .then(data=>{
         console.log(data);
         if(data.deletedCount>0){
          Swal.fire(
            'Deleted!',
            'Your file has been deleted.',
            'success'
          )
          const remaining=toydata.filter(toy=>toy._id!==id)
          setToyData(remaining)
         }
          
        })
      }
    })
   

  }

  console.log(toydata);
  return (
    <div>
      <h2 className='font-bold text-4xl text-center mt-5 mb-5'>My Toy:{toydata.length}</h2>


  <div className="text-center mb-5 mt-5">
    <button className=" mr-5 font-bold p-3 bg-orange-500 rounded-lg" onClick={()=>setSorting(1)}>ASCENDING</button>
    <button className=" mr-5 font-bold p-3 text-white rounded-lg bg-purple-700" onClick={()=>setSorting(-1)}>DESCENDING</button>
  </div>
      <div className="overflow-x-auto w-full">
        <table className="table w-full">
          {/* head */}
          <thead>
            <tr>
              <th className='font-semibold text-xl'>Toy Name</th>
              <th className='font-semibold text-xl'>Seller Name</th>
              <th className='font-semibold text-xl'>Picture</th>
              <th className='font-semibold text-xl'>Category</th>
              <th className='font-semibold text-xl'>price</th>
              <th className='font-semibold text-xl'>Rating</th>
              <th className='font-semibold text-xl'>Quantity</th>
              <th className='font-semibold text-xl'>Update</th>
              <th className='font-semibold text-xl'>Delete</th>
            </tr>
          </thead>
          <tbody>
            {toydata.map((toy) => (
              <MyToyCard key={toy._id} handleToyDelete={handleToyDelete} toy={toy}></MyToyCard>
            ))}
          </tbody>
          {/* foot */}
        </table>
      </div>
    </div>
  );
};

export default MyToy;
