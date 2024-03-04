import Banner from "../../Shared/Components/Banner";
import img from "../../assets/plan/img.jpg";
import { FaDollarSign } from "react-icons/fa";
import { RiTaskLine } from "react-icons/ri";

const Plan = () => {
  return (
    <div>
      <Banner
        img={img}
        title={"Pricing Plan"}
        para={
          "Our professional trainers are ready to assist you in reaching your training goals."
        }
      ></Banner>

{/* Price plan card section */}

      <div className="max-w-screen-xl mx-auto py-20">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <h1 className="text-white text-4xl font-bold">
            Start Your Body Goal from Choosing Our Package
          </h1>
          <p className="text-xl text-slate-300">
            Elevate your wellness journey with our plan! Get custom fitness and
            nutrition strategies designed to fast-track your health goals. Dive
            in and transform your life today!
          </p>
        </div>
        <div className="flex flex-col md:flex-row items-end gap-3 py-10">

            {/* Basic plan */}

          <div>
          <div className="p-10 border-4 border-slate-800 space-y-4">
            <h1 className="text-4xl font-bold text-white">Basic Plan</h1>
            <p className="text-slate-300 pb-5">Magnis mi sed lorem tempor primis hendrerit litora rutrum.</p>
            <hr />
            <div className="flex py-5 isolate">
              <FaDollarSign className="text-3xl main-color"></FaDollarSign>
              <div className="flex items-end">
                <h1 className="text-5xl font-bold text-white">70</h1>
                <p className="text-2xl text-slate-300 font-medium">/MONTH</p>
              </div>
            </div>
            <button className="btn-bg w-full">Get Started</button>
            <p className="text-slate-400">What's include:</p>
            <div className="flex items-center gap-2">
                <RiTaskLine className="main-color text-2xl"></RiTaskLine>
                <p className="text-xl text-slate-300">Free Gym Class Access</p>
            </div>
            <div className="flex items-center gap-2">
                <RiTaskLine className="main-color text-2xl"></RiTaskLine>
                <p className="text-xl text-slate-300">24 Hour Access</p>
            </div>
            <div className="flex items-center gap-2">
                <RiTaskLine className="main-color text-2xl"></RiTaskLine>
                <p className="text-xl text-slate-300">Personal Reainer</p>
            </div>
            <div className="flex items-center gap-2">
                <RiTaskLine className="main-color text-2xl"></RiTaskLine>
                <p className="text-xl text-slate-300">Unlimited access to all equipment</p>
            </div>
            <div className="flex items-center gap-2">
                <RiTaskLine className="main-color text-2xl"></RiTaskLine>
                <p className="text-xl text-slate-300">Group Class Included</p>
            </div>
          </div>
          </div>

          {/* Reguler Plan plan */}

          <div>
          <div className="p-10 border-4 border-[orange] space-y-4">
            <button className="bg-white px-2 main-color font-bold border-[orange] border-2">POPULAR</button>
            <h1 className="text-4xl font-bold text-white">Reguler Plan</h1>
            <p className="text-slate-300 pb-5">Magnis mi sed lorem tempor primis hendrerit litora rutrum.</p>
            <hr />
            <div className="flex py-5 isolate">
              <FaDollarSign className="text-3xl main-color"></FaDollarSign>
              <div className="flex items-end">
                <h1 className="text-5xl font-bold text-white">150</h1>
                <p className="text-2xl text-slate-300 font-medium">/MONTH</p>
              </div>
            </div>
            <button className="btn-bg w-full">Get Started</button>
            <p className="text-slate-400">What's include:</p>
            <div className="flex items-center gap-2">
                <RiTaskLine className="main-color text-2xl"></RiTaskLine>
                <p className="text-xl text-slate-300">Free Gym Class Access</p>
            </div>
            <div className="flex items-center gap-2">
                <RiTaskLine className="main-color text-2xl"></RiTaskLine>
                <p className="text-xl text-slate-300">24 Hour Access</p>
            </div>
            <div className="flex items-center gap-2">
                <RiTaskLine className="main-color text-2xl"></RiTaskLine>
                <p className="text-xl text-slate-300">Personal Reainer</p>
            </div>
            <div className="flex items-center gap-2">
                <RiTaskLine className="main-color text-2xl"></RiTaskLine>
                <p className="text-xl text-slate-300">Unlimited access to all equipment</p>
            </div>
            <div className="flex items-center gap-2">
                <RiTaskLine className="main-color text-2xl"></RiTaskLine>
                <p className="text-xl text-slate-300">Group Class Included</p>
            </div>
          </div>
          </div>

          {/* Premium Plan */}

          <div>
          <div className="p-10 border-4 border-slate-800 space-y-4">
            <h1 className="text-4xl font-bold text-white">Premium Plan
</h1>
            <p className="text-slate-300 pb-5">Magnis mi sed lorem tempor primis hendrerit litora rutrum.</p>
            <hr />
            <div className="flex py-5 isolate">
              <FaDollarSign className="text-3xl main-color"></FaDollarSign>
              <div className="flex items-end">
                <h1 className="text-5xl font-bold text-white">225</h1>
                <p className="text-2xl text-slate-300 font-medium">/MONTH</p>
              </div>
            </div>
            <button className="btn-bg w-full">Get Started</button>
            <p className="text-slate-400">What's include:</p>
            <div className="flex items-center gap-2">
                <RiTaskLine className="main-color text-2xl"></RiTaskLine>
                <p className="text-xl text-slate-300">Free Gym Class Access</p>
            </div>
            <div className="flex items-center gap-2">
                <RiTaskLine className="main-color text-2xl"></RiTaskLine>
                <p className="text-xl text-slate-300">24 Hour Access</p>
            </div>
            <div className="flex items-center gap-2">
                <RiTaskLine className="main-color text-2xl"></RiTaskLine>
                <p className="text-xl text-slate-300">Personal Reainer</p>
            </div>
            <div className="flex items-center gap-2">
                <RiTaskLine className="main-color text-2xl"></RiTaskLine>
                <p className="text-xl text-slate-300">Unlimited access to all equipment</p>
            </div>
            <div className="flex items-center gap-2">
                <RiTaskLine className="main-color text-2xl"></RiTaskLine>
                <p className="text-xl text-slate-300">Group Class Included</p>
            </div>
          </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Plan;
