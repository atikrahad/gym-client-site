import Banner from "../../Shared/Components/Banner";
import Managertabs from "./Managercomponents/Managertabs";
import image from "../../assets/management/image.webp"

const Management = () => {
    return (
        <div>
            <Banner img={image} title={"Manager Deshboard"} para={"Manage your trainers activities and premium users with ecommerce"}></Banner>
            <Managertabs></Managertabs>
        </div>
    );
};

export default Management;