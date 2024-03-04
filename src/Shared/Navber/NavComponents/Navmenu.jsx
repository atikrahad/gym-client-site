import { GiHamburgerMenu } from "react-icons/gi";
import Navlinks from "./Navlinks";
import { NavLink } from "react-router-dom";
const Navmenu = () => {
  return (
    <div className="drawer drawer-end">
      <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content">
        {/* Page content here */}
        <label htmlFor="my-drawer-4" className="drawer-button">
          <GiHamburgerMenu className="text-3xl text-white"></GiHamburgerMenu>
        </label>
      </div>
      <div className="drawer-side">
        <label
          htmlFor="my-drawer-4"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <div className="menu z-50 p-4 w-[50%] min-h-full bg-slate-800 ">
          <NavLink to="/login"><button className="btn-bg ">Login</button></NavLink>
          <Navlinks></Navlinks>
        </div>
      </div>
    </div>
  );
};

export default Navmenu;
