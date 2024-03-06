import Banner from "../../Shared/Components/Banner";
import Managertabs from "./Managercomponents/Managertabs";

const Management = () => {
    return (
        <div>
            <Banner title={"Manager Deshboard"} para={"Manage your trainers activities and premium users with ecommerce"}></Banner>
            <Managertabs></Managertabs>
        </div>
    );
};

export default Management;