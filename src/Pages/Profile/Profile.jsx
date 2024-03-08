import { useState } from "react";
import useUser from "../../Hooks/useUser";
import TrainersApplicationform from "./Profilecomponents/TrainersApplicationform";
import UpdateRofile from "./Profilecomponents/UpdateRofile";
import Uploadimg from "../../OthersComponents/Uploadimg";
import axiosPublic from "../../Api/axiosPublic";
import { FiUpload } from "react-icons/fi";
import { Helmet } from "react-helmet";

const Profile = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isUpdateOpen, setIsUpdateOpen] = useState(false);
  const [userData, refetch] = useUser();
  const [profilepic, setProfilepic] = useState(null);
  const [coverpic, setCoverpic] = useState(null);
  console.log(userData);

  const handleUpdateProfilePic = () => {
    axiosPublic
      .put(`/updateprofilepic?email=${userData?.email}`, { profilepic })
      .then((res) => console.log(res.data));
    setProfilepic(null);
    refetch();
  };
  const handleUpdateCoverpic = () => {
    axiosPublic
      .put(`/updateprocoverpic?email=${userData?.email}`, { coverpic })
      .then((res) => console.log(res.data));
    setCoverpic(null);
    refetch();
  };

  return (
    <div className="max-w-screen-md py-40 mx-auto">
      <Helmet>
        <title>ARGym | Profile</title>
      </Helmet>
      <div className="h-72 relative overflow-hidden rounded-sm bg-[#2424277a]">
        <img
          className="w-full"
          src={coverpic ? coverpic : userData?.coverpic}
          alt=""
        />
        {coverpic ? (
          <button
            onClick={handleUpdateCoverpic}
            className="absolute z-10 text-slate-200 py-3 px-5 main-color rounded-lg bg-[#00000070] bottom-2 right-2"
          >
            save
          </button>
        ) : (
          <FiUpload
            onClick={() => document.querySelector(".file").click()}
            className="absolute bottom-2 right-2 text-3xl main-color"
          ></FiUpload>
        )}
        <Uploadimg setImage={setCoverpic}></Uploadimg>
      </div>
      <div className="relative w-40 h-40 rounded-full">
        {profilepic !== null && (
          <button
            onClick={handleUpdateProfilePic}
            className="absolute z-10 text-slate-200 py-3 rounded-lg bg-[#00000070] w-full main-color -top-6"
          >
            save
          </button>
        )}
        <img
          onClick={() => document.querySelector(".profile").click()}
          className="w-40 h-40 rounded-full relative -top-20"
          src={profilepic ? profilepic : userData?.image}
          alt=""
        />

        <input
          onChange={(e) => {
            console.log(e.target.files[0]);
            const img = e.target.files[0];
            const data = new FormData();
            data.append("image", img);
            fetch(`${import.meta.env.VITE_imageserver}`, {
              method: "POST",
              body: data,
            })
              .then((res) => res.json())
              .then((data) => setProfilepic(data.data.url));
          }}
          type="file"
          hidden
          className="profile"
        />
      </div>
      <div className="-mt-16">
        <div className="flex items-end gap-2">
          <h1 className="text-white text-4xl">{userData?.name}</h1>
          <p className="text-white text-2xl">({userData?.userType})</p>
        </div>
        <p className="text-slate-300">{userData?.bio}</p>
      </div>
      <div className="flex gap-3 text-slate-300">
        <h1>Followers</h1>
        <h1>Following</h1>
      </div>
      <div className="flex flex-col md:flex-row gap-5 items-center justify-between">
        <div className="mt-10 md:my-20 w-full space-y-3 p-5 rounded-sm bg-[#2424277a]">
          <h1 className="text-2xl text-white">Name: {userData?.name}</h1>
          <h1 className="text-2xl text-white">Email: {userData?.email}com</h1>
          <h1 className="text-2xl text-white">
            Phone: {userData?.phone ? userData?.phone : "N/A"}
          </h1>
        </div>
        <div className="my-2 md:my-20 w-full space-y-3 p-5 rounded-sm bg-[#2424277a]">
          <h1 className="text-2xl text-white">
            Country: {userData?.country ? userData?.country : "N/A"}
          </h1>
          <h1 className="text-2xl text-white">
            Gender: {userData?.gender ? userData?.gender : "N/A"}
          </h1>
          <h1 className="text-2xl text-white">
            Address: {userData?.address ? userData?.address : "N/A"}
          </h1>
        </div>
      </div>
      <div className="space-x-4">
        <button
          onClick={() => setIsUpdateOpen(!isUpdateOpen)}
          className="btn-bg"
        >
          Update Profile
        </button>
        {userData?.userType !== "manager" &&
        userData?.userType !== "trainer" ? (
          <button onClick={() => setIsOpen(!isOpen)} className="btn-bg">
            Apply For Trainer
          </button>
        ) : (
          <div></div>
        )}

        <UpdateRofile
          isOpen={isUpdateOpen}
          setIsOpen={setIsUpdateOpen}
        ></UpdateRofile>
        <TrainersApplicationform
          isOpen={isOpen}
          setIsOpen={setIsOpen}
        ></TrainersApplicationform>
      </div>
    </div>
  );
};

export default Profile;
