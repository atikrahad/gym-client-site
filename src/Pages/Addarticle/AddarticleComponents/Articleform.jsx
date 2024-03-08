import { useState } from "react";
import { FaCloudUploadAlt } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";
import useAuth from "../../../Contextapi/useAuth";
import axiosPublic from "../../../Api/axiosPublic";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
const Articleform = () => {
  const [image, setImage] = useState(null);
  const { user } = useAuth();
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const title = form.title.value;
    const category = form.category.value;
    const description = form.description.value;
    const email = user?.email;
    const autherName = user?.displayName;
    const autherPic = user?.photoURL;
    const date = new Date();
    const blogInfo = {
      title,
      category,
      description,
      email,
      image,
      autherName,
      autherPic,
      date,
    };
    axiosPublic.post('/article', blogInfo)
    .then(res => {
      console.log(res.data)
      navigate('/allblogs')
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "successfully Published Article",
        showConfirmButton: false,
        timer: 1500
      });
    })

  };
  return (
    <div className="max-w-screen-md gap-10 py-40 flex items-center justify-between mx-auto">
      <div className="w-full">
        <form onSubmit={handleSubmit}>
          <input
            className="outline-none border-orange-600 border-b-2 py-2 px-3 bg-transparent w-full"
            type="text"
            name="title"
            maxLength={50}
            placeholder="Title"
          />
          <select
            className="outline-none border-orange-600 border-b-2 py-2 px-3 bg-transparent w-full"
            name="category"
            id=""
          >
            <option value="health">Health</option>
            <option value="fitness">Fitness</option>
            <option value="body">Body</option>
            <option value="nutrition">Nutrition</option>
          </select>
          <textarea
            placeholder="Description"
            className="outline-none border-orange-600 border-b-2 mt-5 py-2 px-3 bg-transparent w-full"
            name="description"
            id=""
            cols="30"
            rows="5"
          ></textarea>
          <input
            type="submit"
            className={`btn-bg w-full my-10`}
            value={"Add Article"}
            
          />
        </form>
      </div>
      <div className="w-full">
        {image ? (
          <div className="relative">
            <img src={image} alt="" />
            <button
              onClick={() => setImage(null)}
              className="absolute top-0 right-0"
            >
              <RxCross2 className="main-color text-3xl"></RxCross2>
            </button>
          </div>
        ) : (
          <div
            onClick={() => document.querySelector(".file").click()}
            className="w-full flex flex-col items-center justify-center border-orange-600 border border-dashed h-80"
          >
            <input
              className="file"
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
              type="file"
              hidden
              required
            />
            <FaCloudUploadAlt className="main-color text-4xl"></FaCloudUploadAlt>
            <p className="main-color text-3xl font-semibold">Uoload Image</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Articleform;
