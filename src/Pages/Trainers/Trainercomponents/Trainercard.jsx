import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
const Trainercard = () => {
  return (
    <div className=" w-96 relative  rounded-none image-full">
      <figure>
        <img
        className="w-full h-96"
          src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
          alt="Shoes"
        />
      </figure>
      <div className="absolute space-y-2 p-5 w-full bg-[#151517ad] bottom-0">
        <h1 className="text-white text-2xl font-semibold">Name</h1>
        <p className="text-slate-300">Proffession</p>
        <div className="flex gap-2 items-center">
            <a className="p-2 rounded-sm bg-[#151517] main-color" href=""><FaFacebookF></FaFacebookF></a>
            <a className="p-2 rounded-sm bg-[#151517] main-color" href=""><FaInstagram></FaInstagram></a>
            <a className="p-2 rounded-sm bg-[#151517] main-color" href=""><FaTwitter></FaTwitter></a>
            <a className="p-2 rounded-sm bg-[#151517] main-color" href=""><FaYoutube></FaYoutube></a>
        </div>
      </div>
    </div>
  );
};

export default Trainercard;
