import { Helmet } from "react-helmet";
import Banner from "../../Shared/Components/Banner";
import img from "../../assets/blogs/img.webp";
import Articleform from "./AddarticleComponents/Articleform";
const Addarticle = () => {
  return (
    <div>
      <Helmet>
        <title>Write a Article</title>
      </Helmet>
      <Banner
        title={"Write Article About Health and Fitness"}
        para={
          "This section explores how crucial sleep is for health, covering its benefits like cognitive restoration and emotional balance, and the risks of sleep deprivation, including impaired cognition and chronic disease risk. It underscores the need for good sleep habits for overall well-being."
        }
        img={img}
      ></Banner>
      <Articleform></Articleform>
    </div>
  );
};

export default Addarticle;
