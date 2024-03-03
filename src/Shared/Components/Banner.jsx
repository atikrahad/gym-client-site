import { BiDumbbell } from "react-icons/bi";


const Banner = ({subTitle,title,para,img, btn}) => {
  return (
    <div
      style={{
        backgroundImage: `linear-gradient(to bottom, rgba(25, 0 , 0, .69), rgba(0, 2, 25, .69)), url(${img})`,
      }}
      className={`py-5 md:h-[500px] flex items-center justify-center bg-cover bg-no-repeat max-w-screen-2xl mx-auto`}
    >
        <div className="flex space-y-3 w-full md:w-[40%] mx-auto flex-col items-center">
            <h3 className="text-2xl text-slate-300">{subTitle}</h3>
            <h1 className="text-white font-semibold text-4xl">{title}</h1>
            <p className="text-slate-400 font-medium text-xl text-center">{para}</p>
            {
                btn ? <button className="btn-bg">{btn}</button>: <BiDumbbell className="text-7xl main-color"></BiDumbbell>
            }
        </div>
    </div>
  );
};

export default Banner;
