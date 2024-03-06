import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home/Home";
import Main from "../Layout/Main";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import Trainers from "../Pages/Trainers/Trainers";
import Errorpage from "../Pages/Errorpage/Errorpage";
import Blogpage from "../Pages/Blogpage/Blogpage";
import Plan from "../Pages/Planpage/Plan";
import Profile from "../Pages/Profile/Profile";
import Privateroute from "./Privateroute";
import Addarticle from "../Pages/Addarticle/Addarticle";
import Singlearticle from "../Pages/Sinflearticle/Singlearticle";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <Errorpage></Errorpage>,
    children: [
      {
        index: true,
        element: <Home></Home>,
      },
      {
        path: "trainers",
        element: <Trainers></Trainers>,
      },
      {
        path: "allblogs",
        element: <Blogpage></Blogpage>,
      },
      {
        path: "plan",
        element: <Plan></Plan>
      },
      {
        path: "profile",
        element: <Privateroute><Profile></Profile></Privateroute>
      },
      {
        path: "addarticle",
        element: <Privateroute><Addarticle></Addarticle></Privateroute>
      },
      {
        path: 'article/:id',
        element: <Privateroute><Singlearticle></Singlearticle></Privateroute>,
      }
    ],
  },
  {
    path: "/login",
    element: <Login></Login>,
  },
  {
    path: "/register",
    element: <Register></Register>,
  },
  
]);
