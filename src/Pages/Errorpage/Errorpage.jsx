import { NavLink } from "react-router-dom";
import img from "../../assets/Login/img.jpg";
const Errorpage = () => {
  return (
    <div
      style={{
        backgroundImage: `linear-gradient(to bottom, rgba(24,24,24,0.75), rgba(24,24,24,0.85)), url(${img})`,
      }}
      className="w-[100vw] flex items-center justify-center h-[100vh] bg-cover"
    >
        <div className="flex space-y-3 flex-col items-center justify-center">
            <h1 className="text-7xl font-bold text-white">404</h1>
            <h2 className="text-slate-300 text-4xl font-medium">Page Not Found</h2>
            <p className="text-slate-400">The page you are looking for dose not exist. It may have been removed, or wrong input</p>
            <NavLink to="/"><button className="btn-bg my-3">Go Back Home</button></NavLink>
        </div>
    </div>
  );
};

export default Errorpage;
