import Banner from "../../Shared/Components/Banner";
import About from "./homeComponents/About";
import Classes from "./homeComponents/Classes";
import Homebenner from "./homeComponents/Homebenner";
import Status from "./homeComponents/Status";
import bannerimg from '../../assets/Home/banner/maxresdefault.jpg'
import ResentBlogs from "./homeComponents/ResentBlogs";
import Reviews from "./homeComponents/Reviews";
import Whychoose from "./homeComponents/Whychoose";
import { Helmet } from "react-helmet";
// import useUser from "../../Hooks/useUser";

const Home = () => {
// const [userData] = useUser()
// console.log(userData);
  return (
    <div>
      <Helmet>
        <title>ARGym | Home</title>
      </Helmet>
      <Homebenner></Homebenner>
      <About></About>
      <Status></Status>
      <Classes></Classes>
      <Banner
        subTitle={"Join our membership"}
        title={"Let's start healthy journy with us"}
        btn={'Join Membership'}
        img={bannerimg}
        para={'Unlock exclusive benefits and join a community of like-minded individuals by becoming a member today. Gain access to premium content, special offers, member-only events, and personalized support. Experience the full potential of our community and take your journey to the next level with our membership program.'}
      ></Banner>
      <Reviews></Reviews>
      <Whychoose></Whychoose>
      <ResentBlogs></ResentBlogs>
    </div>
  );
};

export default Home;
