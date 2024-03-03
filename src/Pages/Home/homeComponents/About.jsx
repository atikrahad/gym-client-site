import image from "../../../assets/Home/about/img.jpg";
import { MdArrowOutward } from "react-icons/md";
const About = () => {
  return (
    <div className="flex flex-col md:flex-row py-20 gap-10 items-center max-w-screen-xl mx-auto">
      <div className="w-full space-y-3">
        <h3 className="text-2xl text-slate-300">WHO WE ARE</h3>
        <h1 className="text-4xl text-white">Building Your body and confidence to must exercise</h1>
        <p className="text-slate-300">
          At Fitness Haven, we are more than just a gym; we are a community
          dedicated to transforming lives through fitness, health, and wellness.
          Our mission is to empower individuals of all ages and fitness levels
          to achieve their goals and lead healthier, happier lives. With
          state-of-the-art facilities, expert trainers, and a supportive
          atmosphere, we're here to guide you on your journey to a stronger,
          fitter you. Join us and be part of something extraordinary.
        </p>
        <div className="grid gap-3 grid-cols-2">
          <div>
            <div className="flex items-center">
              <MdArrowOutward className="text-2xl main-color"></MdArrowOutward>
              <h3 className="text-2xl font-medium text-white"> Personal trainer</h3>
            </div>
            <p className="text-slate-400"> Customized fitness plans with expert trainers to help you reach your goals through motivation and tailored exercises.</p>
          </div>
          <div>
            <div className="flex items-center">
              <MdArrowOutward className="text-2xl main-color"></MdArrowOutward>
              <h3 className="text-2xl font-medium text-white"> Personal trainer</h3>
            </div>
            <p className="text-slate-400"> Customized fitness plans with expert trainers to help you reach your goals through motivation and tailored exercises.</p>
          </div>
          <div>
            <div className="flex items-center">
              <MdArrowOutward className="text-2xl main-color"></MdArrowOutward>
              <h3 className="text-2xl font-medium text-white"> Personal trainer</h3>
            </div>
            <p className="text-slate-400"> Customized fitness plans with expert trainers to help you reach your goals through motivation and tailored exercises.</p>
          </div>
          <div>
            <div className="flex items-center">
              <MdArrowOutward className="text-2xl main-color"></MdArrowOutward>
              <h3 className="text-2xl font-medium text-white"> Personal trainer</h3>
            </div>
            <p className="text-slate-400"> Customized fitness plans with expert trainers to help you reach your goals through motivation and tailored exercises.</p>
          </div>
        </div>
      </div>
      <div className="w-full">
        <img src={image} alt="" />
      </div>
    </div>
  );
};

export default About;
