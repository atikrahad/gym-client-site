/* eslint-disable react/no-unescaped-entities */
import { useQuery } from "@tanstack/react-query";
import Banner from "../../Shared/Components/Banner";
import img from "../../assets/Trainers/img.jpg";
import Trainercard from "./Trainercomponents/Trainercard";
import axiosPublic from "../../Api/axiosPublic";

const Trainers = () => {
  const { data: Data = [] } = useQuery({
    queryKey: ["trainers"],
    queryFn: async () => {
      const res = await axiosPublic.get(`/applications?position=${"accepted"}`);
      return res.data;
    },
  });
  console.log(Data);
  return (
    <div>
      <Banner
        img={img}
        title={"Our Trainers"}
        para={
          "Our proffetional trainers are ready to assist you in reachng your training gaol"
        }
      ></Banner>
      <div className="max-w-screen-xl py-20 mx-auto">
        <div className="flex flex-col items-center justify-center">
          <h1 className="text-4xl text-white font-bold">
            Meet Our Expert Trainers
          </h1>
          <p className="text-slate-400 md:w-[60%] text-center">
            Meet our expert trainers: a team of seasoned professionals dedicated
            to unlocking your full potential. With years of experience in their
            respective fields, our trainers bring a wealth of knowledge,
            passion, and personalized guidance to every session. Whether you're
            looking to enhance your skills, achieve your fitness goals, or
            master a new hobby, our trainers are here to support you every step
            of the way.
          </p>
        </div>
        <div className="py-10 gap-5 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4">
          {Data?.map((item) => (
            <Trainercard key={item._id} item={item}></Trainercard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Trainers;
