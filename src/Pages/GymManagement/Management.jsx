import Banner from "../../Shared/Components/Banner";
import Managertabs from "./Managercomponents/Managertabs";
import image from "../../assets/management/image.webp";
import { Helmet } from "react-helmet";

const Management = () => {
  return (
    <div>
      <Helmet>
        <title>ARGym | Management</title>
      </Helmet>
      <Banner
        img={image}
        title={"Manager Deshboard"}
        para={
          "Manage your trainers activities and premium users with ecommerce"
        }
      ></Banner>
      <Managertabs></Managertabs>
    </div>
  );
};

export default Management;
