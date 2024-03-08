import img1 from "../../../assets/Home/classes/class1.jpg";
import img2 from "../../../assets/Home/classes/class2.jpg";
import img3 from "../../../assets/Home/classes/class3.jpg";
import img4 from "../../../assets/Home/classes/class4.jpg";

const Classes = () => {
  return (
    <div className="max-w-screen-xl mx-auto py-20">
      <div className="flex gap-5 flex-col md:flex-row items-center justify-between">
        <div className="w-full">
          <h3 className="text-2xl text-slate-300">Classes Program</h3>
          <h1 className="text-4xl text-white">
            We provide you with best service of being healthy
          </h1>{" "}
        </div>
        <div className="w-full">
          <p className="text-xl text-slate-400">
            Gym class has seen notable improvements across the board, with
            students demonstrating increased physical fitness levels, enhanced
            coordination, and a deeper understanding of health and wellness
            concepts. Participation and enthusiasm have notably risen,
            contributing to a positive and inclusive environment.
          </p>
        </div>
      </div>

      {/* Class section */}

      <div className="grid grid-cols-1 gap-5 py-10 md:grid-cols-3 md:grid-rows-3 md:grid-flow-col">
        <div
          className="p-10 bg-cover min-h-64 flex items-end md:row-span-3"
          style={{
            backgroundImage: `linear-gradient(to bottom, rgba(25, 0 , 0, .6), rgba(0, 2, 25, .59)), url(${img1})`,
          }}
          data-aos="zoom-in"
          data-aos-duration="3000"
        >
          <div className="">
            <h1 className="text-2xl font-semibold text-white">Body Building</h1>
            <p className="text-slate-300">
              Start build your body with body building class
            </p>
            <button className="btn-bg">Lern More</button>
          </div>
        </div>
        <div
          className="p-10 bg-cover min-h-52 flex items-end md:col-span-2 md:row-span-2"
          style={{
            backgroundImage: `linear-gradient(to bottom, rgba(25, 0 , 0, .6), rgba(0, 2, 25, .59)), url(${img2})`,
          }}
          data-aos="zoom-in"
          data-aos-duration="3000"
        >
          <div className="">
            <h1 className="text-2xl font-semibold text-white">Body Building</h1>
            <p className="text-slate-300">
              Start build your body with body building class
            </p>
            <button className="btn-bg">Lern More</button>
          </div>
        </div>
        <div
          className="p-10 bg-cover min-h-52 flex items-end "
          style={{
            backgroundImage: `linear-gradient(to bottom, rgba(25, 0 , 0, .6), rgba(0, 2, 25, .59)), url(${img3})`,
          }}
          data-aos="zoom-in"
          data-aos-duration="3000"
        >
          <div className="">
            <h1 className="text-2xl font-semibold text-white">Body Building</h1>
            <p className="text-slate-300">
              Start build your body with body building class
            </p>
            <button className="btn-bg">Lern More</button>
          </div>
        </div>
        <div
          className="p-10 bg-cover min-h-52 flex items-end"
          style={{
            backgroundImage: `linear-gradient(to bottom, rgba(25, 0 , 0, .6), rgba(0, 2, 25, .59)), url(${img4})`,
          }}
          data-aos="zoom-in"
          data-aos-duration="3000"
        >
          <div className="">
            <h1 className="text-2xl font-semibold text-white">Body Building</h1>
            <p className="text-slate-300">
              Start build your body with body building class
            </p>
            <button className="btn-bg">Lern More</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Classes;
