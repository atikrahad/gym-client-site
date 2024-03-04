import { NavLink } from "react-router-dom";

const Navlinks = () => {
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
        <NavLink to='/allblogs'>Blogs</NavLink>
      </li>
    </>
  );
};

export default Navlinks;
