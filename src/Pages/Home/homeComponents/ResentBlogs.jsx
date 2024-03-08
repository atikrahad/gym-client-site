import { NavLink } from "react-router-dom";
import Blogcard from "../../../Shared/Components/Blogcard";
import { useEffect, useState } from "react";
import axiosPublic from "../../../Api/axiosPublic";

const ResentBlogs = () => {
  const [loaddata, setLoaddata] = useState([]);
  useEffect(() => {
    axiosPublic.get("/recentblog").then((res) => setLoaddata(res.data));
  }, []);
  return (
    <div className="max-w-screen-xl py-20 mx-auto">
      <div className="flex items-center justify-between">
        <h1 className="text-4xl font-bold text-white">
          Letest Gym and Fittness Article
        </h1>
        <NavLink to="/allblogs">
          <button className="btn-bg">More Article</button>
        </NavLink>
      </div>
      <div className="grid grid-cols-1 py-10 gap-10 md:grid-cols-2 lg:grid-cols-4">
        {loaddata.map((item) => (
          <Blogcard key={item._id} item={item}></Blogcard>
        ))}
      </div>
    </div>
  );
};

export default ResentBlogs;
