import img from "../../assets/logo/gymlogo.png";
import Navlinks from "./NavComponents/Navlinks";
import Navmenu from "./NavComponents/Navmenu";
const Navber = () => {
  return (
    <div
      className=" fixed z-30 w-full py-2  mx-auto "
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
            <div className="flex uppercase text-slate-300 items-center gap-5 list-none text-xl font-semibold">
              <Navlinks></Navlinks>
              <button className="btn border-none text-white bg-[#FF7C00]">
                Join Gym
              </button>
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
