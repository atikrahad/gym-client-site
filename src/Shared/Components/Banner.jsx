/* eslint-disable react/prop-types */
import { BiDumbbell } from "react-icons/bi";
import { Link } from "react-router-dom";


const Banner = ({subTitle,title,para,img, btn}) => {
  return (
    <div
      style={{
        backgroundImage: `linear-gradient(to bottom, rgba(25, 0 , 0, .69), rgba(0, 2, 25, .69)), url(${img})`,
      }}
      className={`py-5 md:h-[500px] lg:h-[550px] flex items-center justify-center bg-cover bg-no-repeat max-w-screen-2xl mx-auto`}
    >
        <div className="flex space-y-3 py-16  w-full md:w-[40%] mx-auto flex-col items-center">
            <h3 className="text-2xl text-slate-300">{subTitle}</h3>
            <h1 className="text-white text-center font-bold text-5xl">{title}</h1>
            <p className="text-slate-400 font-medium text-xl text-center">{para}</p>
            {
                btn ? <Link to="/plan"><button className="btn-bg">{btn}</button></Link>: <BiDumbbell className="text-7xl main-color"></BiDumbbell>
            }
        </div>
    </div>
  );
};

export default Banner;
