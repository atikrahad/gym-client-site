import axiosPublic from "../../../Api/axiosPublic";
import { useQuery } from "@tanstack/react-query";

const Allaplication = () => {
  

  const {refetch, data: Data = [] } = useQuery({
    queryKey: ["accept"],
    queryFn: async () => {
      const res = await axiosPublic.get(`/applications?position=${"pending"}`);
      return res.data;
    },
  });

  const handleAcceft = (email) =>{
    const updateUser = {
      userType : "trainer"
    }
    const updatePosition = {
      applicationPosition : "accepted"
    }
    axiosPublic.put(`/updateusertype?email=${email}`, updateUser)
    .then(res => {
      console.log(res.data)
      axiosPublic.put(`/updateposition?email=${email}`, updatePosition)
    .then(res => console.log(res.data))
    })

    refetch()
    
  }

  return (
    <div>
      {Data.map((item) => (
        <div className="border border-slate-600 p-5" key={item._id}>
          <div className="flex items-center gap-4">
            <img
              className="w-16 rounded-full h-16"
              src={item?.applicantImage}
              alt=""
            />
            <h1 className="text-white text-3xl font-medium">
              {item?.applicantName}
            </h1>
          </div>
          <p className="text-slate-500 my-5">{item?.letter}</p>
          <div className="flex gap-4">
            <button onClick={()=>handleAcceft(item?.applicantEmail)} className="btn-bg">
              ACCEFT
            </button>
            <button className="btn-bg">REJECT</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Allaplication;
