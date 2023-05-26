import React from 'react';
import { Link, useRouteError } from 'react-router-dom';
import './ErrorPage.css'
import errorJson from '../../assets/29894-error-404-page.json'
import Lottie from "lottie-react";
const ErrorPage = () => {
    const { error, status } = useRouteError()
    return (
        <div>
            <section className='flex items-center h-screen p-16 bg-gray-100 text-gray-900'>
      <div className='container  flex flex-col items-center justify-center px-5 mx-auto my-8'>
        {/* <FaRegGrinBeam className='w-40 h-40 text-yellow-500' /> */}
        <Lottie animationData={errorJson} loop={true} />
        <div className='max-w-md text-center'>
          <h2 className='mb-8 font-extrabold text-9xl text-yellow-500'>
            <span className='sr-only'>Error</span>
            {status || 404}
          </h2>
          <p className='text-2xl font-semibold md:text-3xl text-violet-700 mb-8'>
            {error?.message}
          </p>
          <Link to='/' className='btn'>
            Back to homepage
          </Link>
        </div>
      </div>
    </section>
        </div>
    );
};

export default ErrorPage;