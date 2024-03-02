import { NavLink } from "react-router-dom";

const Navlinks = () => {
  return (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink>Plan</NavLink>
      </li>
      <li>
        <NavLink>Trainers</NavLink>
      </li>
      <li>
        <NavLink>Blogs</NavLink>
      </li>
    </>
  );
};

export default Navlinks;
