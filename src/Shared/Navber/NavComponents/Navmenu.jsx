import { GiHamburgerMenu } from "react-icons/gi";
import Navlinks from "./Navlinks";
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
        <ul className="menu p-4 w-[50%] min-h-full bg-slate-800 ">
          <button className="btn-bg ">join gym</button>
          <Navlinks></Navlinks>
        </ul>
      </div>
    </div>
  );
};

export default Navmenu;
