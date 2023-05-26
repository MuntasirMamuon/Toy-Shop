import React, { useContext, useState } from "react";
import { FaLock } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { BsGoogle } from "react-icons/bs";
import { AuthContext } from "../../Sheard/Provider/AuthProvider";
import loginAnimation from "../../assets/63787-secure-login.json";
import Lottie from "lottie-react";
import { toast } from "react-toastify";

const Login = () => {

  const { signIn, signInWithGoogle} = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const [error, setError] = useState("");
 
  const from = location.state?.from?.pathname || "/";

  const handleLogin = (e) => {
    e.preventDefault();

    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);
    signIn(email, password)
      .then((result) => {
        const createUser = result.user;
        toast('successfully login')
        navigate(from, { replace: true });
      })
      .catch((error) => {
        setError(toast(error.message));
      });
  };

  const handleGoogleSignIn = () => {
    signInWithGoogle()
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);
        navigate(from, { replace: true });
      })
      .catch((error) => console.log(error));
  };
 
  return (
    <div className="lg:flex sm:items-center items-center">
      <div>
        <Lottie animationData={loginAnimation} loop={true} />
      </div>
      <div className="body-style ">
        <div className="container-style">
          <form onSubmit={handleLogin} className="form signup">
            <h2 className=" p-2 text-2xl text-center font-bold rounded text-black'">Sign In</h2>
            <div className="inputBox">
              <input type="email" name="email" required />
              <i>
                {" "}
                <HiOutlineMail />
              </i>
              <span>email</span>
            </div>
            <div className="inputBox">
              <input type="password" name="password" required />
              <i>
                {" "}
                <FaLock />
              </i>
              <span>Password</span>
            </div>
            <div className="inputBox">
              <input type="submit" value="Sign In" />
            </div>
            <p className="className=' mt-3 p-2 text-1xl text-center font-bold rounded text-black'">
              Are you New? <Link to="/register" className='text-purple-600'>Please Register</Link>
            </p>
            <div className="flex justify-around mt-5">
              <button
                onClick={handleGoogleSignIn}
                className="font-bold text-2xl flex items-center ml-2"
              >
                Google <BsGoogle className="ml-2" />
              </button>
             
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
