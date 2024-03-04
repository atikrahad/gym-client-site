import { GiHamburgerMenu } from "react-icons/gi";
import Navlinks from "./Navlinks";
import { NavLink } from "react-router-dom";
import useAuth from "../../../Contextapi/useAuth";
const Navmenu = () => {
  const {user,logedOut} = useAuth()
  const handleLogout = ()=>{
    logedOut()
  }
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
        {user ? (
                <div>
                  
                  <div className="dropdown dropdown-end">
                    <div tabIndex={0} role="button" className="">
                    <img
                    className="w-16 rounded-full h-16"
                    src={user?.photoURL}
                    alt=""
                  />
                    </div>
                    <ul
                      tabIndex={0}
                      className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
                    >
                      <li>
                        <NavLink>Dashboard</NavLink>
                      </li>
                      <li>
                        <button onClick={handleLogout}>Logout</button>
                      </li>
                    </ul>
                  </div>
                </div>
              ) : (
                <NavLink to="/login">
                  <button className="btn-bg">Log in</button>
                </NavLink>
              )}
          <Navlinks></Navlinks>
        </div>
      </div>
    </div>
  );
};

export default Navmenu;
