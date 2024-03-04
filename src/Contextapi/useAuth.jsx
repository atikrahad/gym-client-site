import { useContext } from "react";
import { Authcontext } from "./Authprovider";

const useAuth = () => {
    const authApi = useContext(Authcontext)
    return authApi
};

export default useAuth;