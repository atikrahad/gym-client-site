import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import axiosPublic from "../../Api/axiosPublic";
import useAuth from "../../Contextapi/useAuth";
import { useQuery } from "@tanstack/react-query";
import { MdDeleteOutline } from "react-icons/md";

const Singlearticle = () => {
  const location = useLocation();
  const { user } = useAuth();
  const makeId = location?.pathname.slice(9);
  const [item, setItem] = useState({});
  console.log(item);

  useEffect(() => {
    axiosPublic.get(`/article/${makeId}`).then((res) => setItem(res.data));
  }, [makeId]);

  const { refetch, data : data=[] } = useQuery({
    queryKey: ["comments", item?._id],
    queryFn: async () => {
      const res = await axiosPublic.get(`/comments?ids=${item?._id}`);
      return res.data;
    },
  });
  console.log(data);

  const handleComment = (e) => {
    e.preventDefault();
    const coment = e.target.comment.value;
    const commentAuthname = user?.displayName;
    const commentAuthEmail = user?.email;
    const commentAuthPic = user?.photoURL;
    const blogsId = item._id;
    const commentInfo = {
      coment,
      commentAuthEmail,
      commentAuthPic,
      commentAuthname,
      blogsId,
    };
    axiosPublic
      .post("/comment", commentInfo)
      .then((res) => console.log(res.data));
    refetch();
  };

  return (
    <div className="py-40 max-w-screen-md mx-auto">
      <div>
        <img src={item.image} alt="" />
        <div className="flex items-center gap-4 py-5">
          <img className="w-16 h-16 rounded-full" src={item.autherPic} alt="" />
          <h1 className="text-4xl text-white">{item.autherName}</h1>
        </div>
        <p className="text-slate-400 text-justify">{item.description}</p>
      </div>
      <div className="p-5 my-10 md:w-[50%] outline-none bg-transparent border-orange-500 border rounded-md">
        <div className="flex gap-3 items-center">
          <img className="w-12 h-12 rounded-full" src={user?.photoURL} alt="" />
          <h1 className="text-2xl text-white">{user?.displayName}</h1>
        </div>
        <form onSubmit={handleComment}>
          <textarea
            rows={4}
            name="comment"
            className="outline-none text-slate-300 pt-5 w-full bg-transparent"
            placeholder="commnet here"
          ></textarea>
          <div className="flex justify-end">
            <input className="btn-bg" type="submit" value={"Comment"} />
          </div>
        </form>
      </div>

      <div className="w-full space-y-3 md:w-[50%]">
        {data.map((item) => (
          <div key={item._id} className="flex gap-4">
                <img className="w-12 h-12 rounded-full" src={item.commentAuthPic} alt="" />
            <div className="bg-[#2424277a] w-full p-3 rounded-md min-h-20">
                <div className="flex items-center justify-between">
                <h1 className="text-white font-semibold">{item.commentAuthname}</h1>
                {
                    user?.email === item?.commentAuthEmail && <button><MdDeleteOutline className="text-2xl main-color"/></button>
                }
                </div>
                <p className="text-slate-400">{item.coment}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Singlearticle;
