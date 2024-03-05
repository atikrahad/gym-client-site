import { NavLink } from "react-router-dom";
import useAuth from "../../../Contextapi/useAuth";

const Navlinks = () => {
  const { user } = useAuth();
  return (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/plan">Plan</NavLink>
      </li>
      <li>
        <NavLink to="/trainers">Trainers</NavLink>
      </li>
      <li>
        <NavLink to="/allblogs">Blogs</NavLink>
      </li>
      {user && (
        <li>
          <NavLink to="/addarticle">Write Article</NavLink>
        </li>
      )}
    </>
  );
};

export default Navlinks;
