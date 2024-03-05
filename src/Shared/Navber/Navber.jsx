import { Link, NavLink } from "react-router-dom";
import img from "../../assets/logo/gymlogo.png";
import Navlinks from "./NavComponents/Navlinks";
import Navmenu from "./NavComponents/Navmenu";
import { useEffect, useState } from "react";
import { RxExit } from "react-icons/rx";
import { VscAccount } from "react-icons/vsc";



import useAuth from "../../Contextapi/useAuth";
const Navber = () => {
  const [stickyclass, setStickyclass] = useState("");
  const [shadow, setShadow] = useState("none");
  const { user , logedOut} = useAuth();
  useEffect(() => {
    window.addEventListener("scroll", fixdNav);
    return () => {
      window.removeEventListener("scroll", fixdNav);
    };
  }, []);

  const fixdNav = () => {
    if (window !== undefined) {
      let windowHight = window.scrollY;
      if (windowHight > 70) {
        setStickyclass("bg-slate-900  top-0 left-0 bg-opacity-60");
        setShadow("2px 4px 16px #2e5354");
      } else {
        setStickyclass("fixed");
        setShadow("0px 0px 0px #2e5354");
      }
    }
  };

  const handleLogout = ()=>{
    logedOut()
  }

  return (
    <div
      className={`fixed z-30 py-5 ${stickyclass} ${shadow} w-full py-2  mx-auto `}
    >
      <div className="flex max-w-screen-xl mx-auto items-center justify-between">
        <div className="flex items-center">
          <img className="w-12" src={img} alt="" />
          <h1 className="text-3xl font-bold text-white">
            AR<span className="text-[#FF7C00]">Gym</span>
          </h1>
        </div>
        <div className="hidden md:contents">
          <div>
            <div className="flex navlink uppercase text-slate-300 items-center gap-5 list-none text-xl font-semibold">
              <Navlinks></Navlinks>
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
                        <Link className="text-slate-900" to="/profile"><VscAccount className=""/> Profile</Link>
                      </li>
                      <li>
                        
                        <button className="text-slate-900" onClick={handleLogout}><RxExit></RxExit> LOGOUT</button>
                      </li>
                    </ul>
                  </div>
                </div>
              ) : (
                <NavLink to="/login">
                  <button className="btn-bg">Log in</button>
                </NavLink>
              )}
            </div>
          </div>
        </div>
        <div className="md:hidden">
          <Navmenu></Navmenu>
        </div>
      </div>
    </div>
  );
};

export default Navber;
