import { useState } from "react";
import useUser from "../../Hooks/useUser";
import TrainersApplicationform from "./Profilecomponents/TrainersApplicationform";
import UpdateRofile from "./Profilecomponents/UpdateRofile";
const Profile = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isUpdateOpen, setIsUpdateOpen] = useState(false);
  const [userData] = useUser();
  // const {name, email, image, userType} = userData;
  console.log(userData);
  return (
    <div className="max-w-screen-md py-40 mx-auto">
      <div style={{backgroundImage: `url(${userData?.coverpic})`}} className="h-72 rounded-sm bg-[#2424277a]">
        
      </div>
      <img
        className="w-40 h-40 rounded-full relative -top-20"
        src={userData?.image}
        alt=""
      />
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
      <div className="flex gap-5 items-center justify-between">
        <div className="my-20 w-full space-y-3 p-5 rounded-sm bg-[#2424277a]">
          <h1 className="text-2xl text-white">Name: {userData?.name}</h1>
          <h1 className="text-2xl text-white">Email: {userData?.email}com</h1>
          <h1 className="text-2xl text-white">Phone: {userData?.phone? userData?.phone: 'N/A'}</h1>
        </div>
        <div className="my-20 w-full space-y-3 p-5 rounded-sm bg-[#2424277a]">
          <h1 className="text-2xl text-white">Country: {userData?.country? userData?.country: 'N/A'}</h1>
          <h1 className="text-2xl text-white">Gender: {userData?.gender? userData?.gender: 'N/A'}</h1>
          <h1 className="text-2xl text-white">Address: {userData?.address? userData?.address: 'N/A'}</h1>
        </div>
      </div>
      <div className="space-x-4">
        <button
          onClick={() => setIsUpdateOpen(!isUpdateOpen)}
          className="btn-bg"
        >
          Update Profile
        </button>
        {userData?.userType !== "manager"  && (
            <button onClick={() => setIsOpen(!isOpen)} className="btn-bg">
              Apply For Trainer
            </button>
          )}

        <UpdateRofile isOpen={isUpdateOpen} setIsOpen={setIsUpdateOpen}></UpdateRofile>
        <TrainersApplicationform
          isOpen={isOpen}
          setIsOpen={setIsOpen}
        ></TrainersApplicationform>
      </div>
    </div>
  );
};

export default Profile;
