import { useQuery } from "@tanstack/react-query";
import useAuth from "../Contextapi/useAuth";
import axiosPublic from "../Api/axiosPublic";

const useUser = () => {
    const {user}= useAuth()
    const {data: userData, isPending} = useQuery({
        queryKey: ["user"],
        queryFn : async () => {
            const res = await axiosPublic.get(`/user?email=${user?.email}`)
            return res.data;
        }
    })
    return [userData, isPending]
    
};

export default useUser;