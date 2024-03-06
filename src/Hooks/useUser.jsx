import { useQuery } from "@tanstack/react-query";
import useAuth from "../Contextapi/useAuth";
import axiosPublic from "../Api/axiosPublic";


const useUser = () => {
    const {user}= useAuth()
    console.log(user?.email);
    const {data: userData,refetch, isPending} = useQuery({
        queryKey: ["user", user?.email],
        queryFn : async () => {
            const res = await axiosPublic.get(`/user?email=${user?.email}`)
            return res.data;
        }
    })
    return [userData, refetch, isPending]
    // return {userData}
    
};

export default useUser;