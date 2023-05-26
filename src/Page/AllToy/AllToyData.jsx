import React from 'react';
import { Link } from 'react-router-dom';
import { FaLongArrowAltRight } from "react-icons/fa";

const AllToyData = ({toyData}) => {

    // console.log(toyData);
    const{selectedOptions,name,photo,price,quantity,rating,_id,sellerName,categoryToy
    }=toyData
    console.log(toyData
      );
    return (
        <tr className=''>
        <td className='font-semibold  text-xl'>{sellerName}</td>
        <td className='font-semibold text-xl'>{name}</td>
        <td className='font-semibold text-xl'>{categoryToy}</td>
       <td className='font-semibold text-xl'>{price}</td>
        <td className='font-semibold text-xl'>{quantity}</td>
        <td className="font-bold p-2 text-white rounded-lg bg-[#333c44]"><Link to={`/singleToy/${_id}`}>View Details</Link></td>
      </tr>
    );
};

export default AllToyData;