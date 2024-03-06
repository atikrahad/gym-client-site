import { useQuery } from "@tanstack/react-query";
import useAuth from "../Contextapi/useAuth";
import axiosPublic from "../Api/axiosPublic";
// import { useEffect, useState } from "react";

const useUser = () => {
    // const [userData, setUserData] = useState(null)
    const {user}= useAuth()
    // useEffect(()=>{
    //     axiosPublic.get(`/user?email=${user?.email}`)
    //     .then(res => setUserData(res.data))
    // },[user])
    console.log(user?.email);
    const {data: userData, isPending} = useQuery({
        queryKey: ["user", user?.email],
        queryFn : async () => {
            const res = await axiosPublic.get(`/user?email=${user?.email}`)
            return res.data;
        }
    })
    return [userData,isPending]
    // return {userData}
    
};

export default useUser;