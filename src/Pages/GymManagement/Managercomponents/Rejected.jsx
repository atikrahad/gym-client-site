import { useQuery } from "@tanstack/react-query";
import axiosPublic from "../../../Api/axiosPublic";

const Rejected = () => {
    const { data: Data = [] } = useQuery({
        queryKey: ["accept"],
        queryFn: async () => {
          const res = await axiosPublic.get(`/applications?position=${"rejected"}`);
          return res.data;
        },
      });
  return (
    <div>
      {Data?.map((item ,index) => (
        <div
          key={item._id}
          className="flex flex-wrap my-5 md:flex-nowrap items-center justify-between border p-5 border-slate-600 gap-2"
        >
          <div className="flex w-full md:w-[35%] gap-5">
            <p className="text-3xl text-slate-100">{index +1}.</p>
            <p className="text-3xl  text-white">
              {item?.applicantName}
            </p>
          </div>
          <div className=" flex w-[95%] items-start md:items-center flex-col-reverse md:flex-row gap-10  ">
            <div className="h-12 overflow-hidden">
              <p className=" mx-auto text-justify text-slate-400">
                {item?.letter}
              </p>
            </div>
            <img
              className="w-20 rounded-full h-20"
              src={item?.applicantImage}
              alt=""
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Rejected;
