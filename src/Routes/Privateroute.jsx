import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../Contextapi/useAuth";

const Privateroute = ({children}) => {
    const {user, loading} = useAuth()
    
    const location = useLocation()
    
    if(loading){
        return <div className="flex min-h-96 items-center justify-center">
            <span className="loading w-52 main-color loading-infinity "></span>
        </div>
    }
    
    if(user){
        return children
    }
    return <Navigate to="/login" state={{from: location}} replace></Navigate>

};

export default Privateroute;