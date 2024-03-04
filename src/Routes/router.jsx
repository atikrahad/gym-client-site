import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home/Home";
import Main from "../Layout/Main";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import Trainers from "../Pages/Trainers/Trainers";
import Errorpage from "../Pages/Errorpage/Errorpage";
import Blogpage from "../Pages/Blogpage/Blogpage";
import Plan from "../Pages/Planpage/Plan";

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
