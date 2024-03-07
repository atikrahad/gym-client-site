/* eslint-disable react/prop-types */
import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../Contextapi/useAuth";
import useUser from "../Hooks/useUser";

const TrainerRoute = ({children}) => {
    const [userData, ] = useUser()
    const {user, loading} = useAuth()
    const location = useLocation;
    if(loading ){
        return <div className="flex min-h-screen items-center justify-center">
            <span className="loading w-52 main-color loading-infinity "></span>
        </div>
    }
    if(user && userData?.userType === 'trainer'){
        return children
    }
    return <Navigate to="/login" state={{from: location}} replace></Navigate>

};

export default TrainerRoute;