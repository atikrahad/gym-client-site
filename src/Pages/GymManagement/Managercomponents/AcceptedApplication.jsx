import { useQuery } from "@tanstack/react-query";
import axiosPublic from "../../../Api/axiosPublic";

const AcceptedApplication = () => {
  const { data: Data = [] } = useQuery({
    queryKey: ["accept"],
    queryFn: async () => {
      const res = await axiosPublic.get(`/applications?position=${"accepted"}`);
      return res.data;
    },
  });
  console.log(Data);
  return (
    <div>
      {Data?.map((item) => (
        <div
          key={item._id}
          className="flex flex-wrap md:flex-nowrap items-center justify-between border p-5 border-slate-600 gap-20"
        >
          <div className="flex gap-5">
            <p className="text-3xl text-slate-100">1</p>
            <p className="text-3xl min-w-40 text-white">{item?.applicantName}</p>
          </div>
          <div className=" flex flex-col-reverse md:flex-row gap-10 items-center ">
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

export default AcceptedApplication;
