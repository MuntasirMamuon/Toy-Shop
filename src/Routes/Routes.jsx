import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Login from "../Page/Login/Login";
import Register from "../Page/Register/Register";
import Blog from "../Page/Blog/Blog";
import AddToy from "../Page/AddToy/AddToy";
import Banner from "../Page/Banner/Banner";
import PrivetRoute from "./PrivetRoute";
import MyToy from "../Page/MyToy/MyToy";
import ErrorPage from "../Page/ErrorPage/ErrorPage";
import AllToy from "../Page/AllToy/AllToy";
import UpdateToy from "../Page/UpdateToy/UpdateToy";
import SingleToy from "../Page/SigngleToy/SingleToy";


const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
      errorElement:<ErrorPage></ErrorPage>,
      children:[
        {
           path:'/',
           element:<Banner></Banner>
        },
        {
            path: "/login",
        element:<Login></Login>,
        },
        {
            path:'/register',
            element:<Register></Register>
        },
        {
          path:'/blog',
          element:<Blog></Blog>
        },
        {
          path:'/addToy',
          element:<PrivetRoute><AddToy></AddToy></PrivetRoute>
        },
        {
          path:'/myToy',
          element:<PrivetRoute><MyToy></MyToy></PrivetRoute>
        },
        {
          path:'/allToy',
          element:<AllToy></AllToy>
        },
        {
          path:"/updateToy/:id",
          element:<UpdateToy></UpdateToy>,
          loader:({params})=>fetch(`https://toy-shop-server-gray.vercel.app/toy/${params.id}`)
        },
        {
          path:'/singleToy/:id',
          element:<PrivetRoute><SingleToy></SingleToy></PrivetRoute>,
          loader:({params})=>fetch(`https://toy-shop-server-gray.vercel.app/toy/${params.id}`)
        }
      ]
    },
  ]);



  export default router