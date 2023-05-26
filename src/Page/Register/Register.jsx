import React, { useContext, useState } from 'react';
import { FaUser,FaLock} from "react-icons/fa";
import { HiOutlineMail} from "react-icons/hi";
import { BsImage} from "react-icons/bs";
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Sheard/Provider/AuthProvider';
import {  toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import RegisterAnimation from "../../assets/118046-lf20-oahmox5rjson.json"
import Lottie from "lottie-react";

const Register = () => {


const{createUser,userDetails}=useContext(AuthContext)   
   const navigate=useNavigate()
   const from = location.state?.from?.pathname || '/';
   const[error,setError]=useState('')
    const handleUserData=e=>{
        e.preventDefault()
        setError('')
          const form=e.target;
          const name=form.name.value;
          const photo=form.photo.value;
          const email=form.email.value;
          const password=form.Password.value;
          const userResult={
            
            UserEmail:email,
            UserPassword:password
          }
          console.log(userResult);
          createUser(email,password,name,photo)
        .then(result=>{
          const user=result.user;
          console.log(user);
          userDetails(name,photo)
          toast('success')
          navigate(from ,{replace: true})
          toast("Wow so easy!")
          form.reset()
        })
        .catch((error) => {
          setError(toast(error.message));
        });
          
      }
    return (


     <div className='lg:flex sm:mb-0 sm:items-center'>
       <div className='w-[600px]'>
      <Lottie animationData={RegisterAnimation} loop={true} />
      </div>
        <div className='body-style'>

          
        <div className='container-style'>
          <form onSubmit={handleUserData} className="form signup">
             <h2 className=' p-2 text-2xl text-center font-bold rounded text-black'>Sign Up</h2>
               <div className="inputBox">
                  <input type="text" name='name' required />
                 <i> <FaUser/></i>
                  <span>Name</span>
               </div>
               <div className="inputBox">
                  <input type="text" name='photo' required />
                 <i> <BsImage/></i>
                  <span>Photo Url</span>
               </div>
               <div className="inputBox">
                  <input type="email" name='email' required />
                 <i> <HiOutlineMail/></i>
                  <span>email</span>
               </div>
               <div className="inputBox">
                  <input type="password" name="Password"  required />
                <i>  <FaLock/></i>
                  <span>Password</span>
               </div>
               <p className='hidden'>{error}</p>
               <div className="inputBox">
                  <input type="submit" value="Sign Up" />
               </div>
               <p className=' mt-3 p-2 text-1xl text-center font-bold rounded text-black'>Already have a Account?<Link to='/login' className='text-purple-600'> Please Login</Link></p>
          
          </form>
       
       </div>
      </div>
     </div>
    );
};

export default Register;