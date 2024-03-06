import { useForm } from "react-hook-form";
import Modal from "../../../OthersComponents/Modal";

import useUser from "../../../Hooks/useUser";
import axiosPublic from "../../../Api/axiosPublic";

const UpdateRofile = ({ isOpen, setIsOpen }) => {
  const { register, handleSubmit, reset} = useForm();
  const [userData,refetch] = useUser()
//   const [image, setImage] = useState(null);
 
  const onSubmit = (e) => {
    const updateProfile = {
      bio: e.bio,
      country: e.country,
      phone: e.phone,
      gender: e.gender,
      address: e.address,
      name: e.name,
    };
    axiosPublic.put(`/updateprofile?email=${userData?.email}`, updateProfile)
    .then(res => console.log(res.data))
    refetch()
    reset()
  };
  return (
    <div>
      <Modal
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        title={"Update ypur profile"}
        content={
          <div>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 text-slate-400">
              <textarea
                name=""
                placeholder="Bio"
                className="bg-transparent rounded-md outline-none border w-full py-2 px-3"
                required
                defaultValue={userData?.bio}
                {...register("bio")}
                rows="5"
              ></textarea>
              <input
                placeholder="Name"
                className="bg-transparent rounded-md outline-none border w-full py-2 px-3"
                type="text"
                defaultValue={userData?.name}
                {...register("name")}
                required
              />
              <input
                placeholder="Country"
                className="bg-transparent rounded-md outline-none border w-full py-2 px-3"
                type="text"
                defaultValue={userData?.country}
                {...register("country")}
                required
              />
              <input
                placeholder="Phone"
                className="bg-transparent rounded-md outline-none border w-full py-2 px-3"
                type="number"
                defaultValue={userData?.phone}
                {...register("phone")}
                required
              />
              <select
                placeholder="Gender"
                className="bg-transparent text-slate-400 rounded-md outline-none border w-full py-2 px-3"
                {...register("gender")}
                defaultValue={userData?.gender}
                required
              >
                <option value="male">Male</option>
                <option value="famale">Famale</option>
                <option value="other">Other</option>
              </select>
              <input
                placeholder="Address"
                className="bg-transparent rounded-md outline-none border w-full py-2 px-3"
                type="text"
                defaultValue={userData?.address}
                {...register("address")}
                required
              />
              {/* <input
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
                    .then((data) => setImage(data.data.url));
                }}
                className="bg-transparent rounded-md outline-none border w-full py-2 px-3"
                type="file"
                
              /> */}
              <input
                className="btn-bg outline-none w-full py-2 px-3"
                type="submit"
                value={"UPDATE PROFILE"}
              />
            </form>
          </div>
        }
      ></Modal>
    </div>
  );
};

export default UpdateRofile;
