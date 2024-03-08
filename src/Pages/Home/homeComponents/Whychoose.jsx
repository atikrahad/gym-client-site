/* eslint-disable react/no-unescaped-entities */
import img from "../../../assets/Home/Whychoose/img.jpg";
import { RiTaskLine } from "react-icons/ri";
const Whychoose = () => {
  return (
    <div
      style={{
        backgroundImage: `linear-gradient(to bottom, rgba(24,24,24,0.99), rgba(24,24,24,0.95)), url(${img})`,
      }}
      className="bg-cover max-w-screen-2xl overflow-hidden mx-auto"
    >
      <div className="max-w-screen-xl py-20 mx-auto">
        <div className="flex w-full md:w-[50%] mx-auto flex-col py-5 items-center justify-center">
          <h3 className="text-slate-300">Why Choose Us</h3>
          <h1 className="text-4xl text-center text-white font-medium">
            Lift wight, burn calories, eat clean, repeat
          </h1>
          <p className="text-slate-400 text-center">
            Choose us for a fitness experience like no other. With expert
            trainers, top-notch equipment, flexible scheduling, and a focus on
            cardio health, we're your ultimate partner in achieving your fitness
            goals.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div
            className="flex items-start gap-3 p-3 border-slate-600 border-2"
            data-aos="fade-right"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine"
            data-aos-duration="2000"
          >
            <RiTaskLine className="text-5xl main-color"></RiTaskLine>
            <div className="w-[90%]">
              <h1 className="text-2xl text-white">Pro Equipment</h1>
              <p className="text-slate-400">
                Our state-of-the-art facilities boast top-of-the-line equipment,
                ensuring you have everything you need to reach your fitness
                goals effectively and safely.
              </p>
            </div>
          </div>
          <div
            className="flex items-start gap-3 p-3 border-slate-600 border-2"
            data-aos="fade-left"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine"
            data-aos-duration="2000"
          >
            <RiTaskLine className="text-5xl main-color"></RiTaskLine>
            <div className="w-[90%]">
              <h1 className="text-2xl text-white">Pro Equipment</h1>
              <p className="text-slate-400">
                Our team comprises highly skilled and certified trainers who are
                dedicated to guiding you through personalized fitness routines,
                ensuring you get the most out of every session.
              </p>
            </div>
          </div>
          <div
            className="flex items-start gap-3 p-3 border-slate-600 border-2"
            data-aos="fade-right"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine"
            data-aos-duration="2000"
          >
            <RiTaskLine className="text-5xl main-color"></RiTaskLine>
            <div className="w-[90%]">
              <h1 className="text-2xl text-white">Pro Equipment</h1>
              <p className="text-slate-400">
                We understand the demands of modern life. That's why we offer
                flexible scheduling options, allowing you to work out at a time
                that fits seamlessly into your busy schedule.
              </p>
            </div>
          </div>
          <div
            className="flex items-start gap-3 p-3 border-slate-600 border-2"
            data-aos="fade-left"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine"
            data-aos-duration="2000"
          >
            <RiTaskLine className="text-5xl main-color"></RiTaskLine>
            <div className="w-[90%]">
              <h1 className="text-2xl text-white">Pro Equipment</h1>
              <p className="text-slate-400">
                With our focus on cardiovascular health, we prioritize cardio
                exercises to kickstart your fitness journey, promoting heart
                health and stamina from day one.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Whychoose;
