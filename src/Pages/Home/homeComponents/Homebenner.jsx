/* eslint-disable react/no-unescaped-entities */
import banner from "../../../assets/Home/banner/banner.mp4";
const Homebenner = () => {
  return (
    <div className="relative flex items-center justify-center max-w-screen-2xl overflow-hidden md:h-[440px] lg:h-[600px] mx-auto">
      <div className="gradient-overlay z-10"></div>
      <video className="w-full hidden md:flex absolute" src={banner} autoPlay muted loop>
      </video>
      <div className="relative py-20 z-20 w-full flex items-center justify-center " >
        <div className="flex flex-col space-y-5 items-center justify-center">
        <p className="text-center text-xl md:text-3xl text-white">Welcome To Ar Gym</p>
        <h1 className="text-2xl font-bold md:w-[60%] md:text-5xl text-center text-red-50">It's Your Time To Gain More Healthy and Muscles</h1>
        <p className="text-center md:w-[60%] text-white">Elevate your fitness journey in our state-of-the-art gym, featuring cutting-edge equipment, diverse workout classes, and expert trainers dedicated to your health and wellness.</p>
        <button className="btn-bg">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default Homebenner;
