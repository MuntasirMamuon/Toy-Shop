import React from 'react'
import ReactDOM from 'react-dom/client'
<link href="https://unpkg.com/aos@2.3.1/dist/aos.css" rel="stylesheet"></link>
import './index.css'
import {

  RouterProvider,
} from "react-router-dom";
import router from './Routes/Routes.jsx';
import AuthProvider from './Sheard/Provider/AuthProvider';
import { ToastContainer } from 'react-toastify';
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <div className='max-w-7xl mx-auto'>
     <AuthProvider>
     <RouterProvider router={router} />
     </AuthProvider>
     <ToastContainer/>
     </div>
  </React.StrictMode>,
)
