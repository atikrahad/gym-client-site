import { NavLink } from "react-router-dom";
import Blogcard from "../../../Shared/Components/Blogcard";

const ResentBlogs = () => {
    return (
        <div className="max-w-screen-xl py-20 mx-auto">
            <div className="flex items-center justify-between">
                <h1 className="text-4xl font-bold text-white">Letest Gym and Fittness Article</h1>
                <NavLink to="/allblogs"><button className="btn-bg">More Article</button></NavLink>
            </div>
           <div>
            <Blogcard></Blogcard>
           </div>
        </div>
    );
};

export default ResentBlogs;