import React, { useState } from 'react';
import { BiEdit } from "react-icons/bi";
import { AiFillDelete } from "react-icons/ai";
import { Link } from 'react-router-dom';

const MyToyCard = ({toy,handleToyDelete}) => {
    const{name,photo,price,rating,sellerName,quantity,email,_id,categoryToy}=toy;
   
   
    // console.log(selectedOptions);
    return (
        <tr>
        <td className='font-bold text-xl'>{name}</td>
        <td className='font-bold text-xl'>{sellerName}</td>
        <td> <img className='w-28 rounded-xl' src={photo} alt="" /> </td>
       <td className='font-bold text-xl'>{categoryToy}</td>
        <td className='font-bold text-xl'>{price}</td>
         
        <td className='font-bold text-xl'>{rating}</td>
        <td className='font-bold text-xl'>{quantity}</td>
        <td className='font-bold text-xl'><Link to={`/updateToy/${_id}`}><BiEdit className='text-purple-700 text-2xl'/></Link></td>
        <td className='font-bold text-xl'><button onClick={()=>handleToyDelete(_id)}><AiFillDelete className='text-red-700 text-2xl'/></button></td>
      </tr>
    );
};

export default MyToyCard;