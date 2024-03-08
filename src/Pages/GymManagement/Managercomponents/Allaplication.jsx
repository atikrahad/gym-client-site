import Swal from "sweetalert2";
import axiosPublic from "../../../Api/axiosPublic";
import { useQuery } from "@tanstack/react-query";

const Allaplication = () => {
  const { refetch, data: Data = [] } = useQuery({
    queryKey: ["accept"],
    queryFn: async () => {
      const res = await axiosPublic.get(`/applications?position=${"pending"}`);
      return res.data;
    },
  });

  const handleAcceft = (email) => {
    const updateUser = {
      userType: "trainer",
    };
    const updatePosition = {
      applicationPosition: "accepted",
    };
    axiosPublic
      .put(`/updateusertype?email=${email}`, updateUser)
      .then((res) => {
        console.log(res.data);
        axiosPublic
          .put(`/updateposition?email=${email}`, updatePosition)
          .then((res) => console.log(res.data));
      });
    Swal.fire({
      icon: "success",
      title: "Successfully accepted application",
      showConfirmButton: false,
      timer: 1500,
    });
    refetch();
  };

  const handleRejected = (email) => {
    const updatePosition = {
      applicationPosition: "rejected",
    };
    Swal.fire({
      title: "Are you sure?",
      text: "This member is'nt able to be trainer",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Reject it",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosPublic
          .put(`/updateposition?email=${email}`, updatePosition)
          .then((res) => {
            console.log(res.data);
            refetch()
            Swal.fire({
              title: "Deleted!",
              text: "Your file has been deleted.",
              icon: "success",
            });
          });
      }
    });
  };

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
            <button
              onClick={() => handleAcceft(item?.applicantEmail)}
              className="btn-bg"
            >
              ACCEFT
            </button>
            <button
              onClick={() => handleRejected(item?.applicantEmail)}
              className="btn-bg"
            >
              REJECT
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Allaplication;
