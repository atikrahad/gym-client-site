/* eslint-disable react/prop-types */
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
const Trainercard = ({item}) => {

  return (
    <div className=" relative  rounded-none image-full">
      <figure>
        <img
        className="w-full h-96"
          src={item?.applicantImage}
          alt="Shoes"
        />
      </figure>
      <div className="absolute space-y-2 p-5 w-full bg-[#151517ad] bottom-0">
        <h1 className="text-white text-2xl font-semibold">{item?.applicantName}</h1>
        <p className="text-slate-300">{item?.proffession}</p>
        <div className="flex gap-2 items-center">
            <a href={item?.fblink} className="p-2 rounded-sm bg-[#151517] main-color"><FaFacebookF></FaFacebookF></a>
            <a className="p-2 rounded-sm bg-[#151517] main-color" href={item?.instalink}><FaInstagram></FaInstagram></a>
            <a className="p-2 rounded-sm bg-[#151517] main-color" href={item?.twitterlink}><FaTwitter></FaTwitter></a>
            <a className="p-2 rounded-sm bg-[#151517] main-color" href={item?.youtubelink}><FaYoutube></FaYoutube></a>
        </div>
      </div>
    </div>
  );
};

export default Trainercard;
