import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import axiosPublic from "../../Api/axiosPublic";
import useAuth from "../../Contextapi/useAuth";

const Singlearticle = () => {
    const location = useLocation()
    const {user} = useAuth()
    const makeId = location?.pathname.slice(9)
    const [item, setItem] = useState({})
    console.log(item);
    
    useEffect(()=>{
        axiosPublic.get(`/article/${makeId}`)
        .then(res => setItem(res.data))
    },[makeId])
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
            <div className="p-5 my-10 md:w-[40%] outline-none bg-transparent border-orange-500 border rounded-md">
                <div className="flex gap-3 items-center">
                    <img className="w-12 h-12 rounded-full" src={user?.photoURL} alt="" />
                    <h1 className="text-2xl text-white">{user?.displayName}</h1>
                </div>
                <form>
                <textarea rows={5} className="outline-none text-slate-300 pt-5 w-full bg-transparent" placeholder="commnet here"></textarea>
                    <div className="flex justify-end"><input className="btn-bg" type="submit" value={"Comment"} /></div>
                </form>
            </div>
        </div>
    );
};

export default Singlearticle;