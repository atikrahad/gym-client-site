import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home/Home";
import Main from "../Layout/Main";
import Login from "../Pages/Login/Login";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
          index: true,
          element: <Home></Home>
        }
      ]
    },
    {
      path: "/login",
      element: <Login></Login>
    }
  ]);