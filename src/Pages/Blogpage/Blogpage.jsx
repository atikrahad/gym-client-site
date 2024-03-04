import Banner from "../../Shared/Components/Banner";
import Blogcard from "../../Shared/Components/Blogcard";
import img from "../../assets/blogs/img.webp";

const Blogpage = () => {
  return (
    <div>
      <Banner
        img={img}
        para={
          "Your fitness tips, workouts, and more from certified trainers and experts."
        }
        title={"Health and Fitness Articles"}
      ></Banner>
      <div className="max-w-screen-xl mx-auto py-20">
        <div className="flex gap-2 flex-col items-center">
            <h1 className="text-white text-4xl font-semibold">Learn More About Health and Fitness</h1>
            <p className="text-slate-300 w-full md:w-[50%] text-center">Discover a treasure trove of health and fitness insights in our vibrant article section! From expert tips on sculpting your dream physique to nourishing your mind and body with wholesome nutrition advice, embark on a journey to unlock your full potential and live your healthiest, happiest life</p>
        </div>
        <div className="py-10">
            <Blogcard></Blogcard>
        </div>
      </div>
    </div>
  );
};

export default Blogpage;
