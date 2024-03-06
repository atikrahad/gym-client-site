import { NavLink } from "react-router-dom";
import useAuth from "../../../Contextapi/useAuth";
import useUser from "../../../Hooks/useUser";

const Navlinks = () => {
  const { user } = useAuth();
  const [userData] = useUser();
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
      {userData?.userType === "manager" && (
        <li>
          <NavLink to="/management">Management</NavLink>
        </li>
      )}
    </>
  );
};

export default Navlinks;
