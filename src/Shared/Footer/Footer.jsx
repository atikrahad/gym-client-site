import img from "../../assets/Footer/12.jpg";
import logo from "../../assets/logo/gymlogo.png";
const Footer = () => {
  return (
    <div
      style={{
        backgroundImage: `linear-gradient(to bottom, rgba(24,24,24,0.75), rgba(24,24,24,0.75)), url(${img})`,
      }}
      className="md:h-[500px] pt-20 bg-cover bg-no-repeat "
    >
      <footer
        style={{ boxShadow: "2px 8px 16px 4px #27282A" }}
        className=" flex items-center justify-center text-[#8BB7A8] flex-col p-10 max-w-screen-xl mx-auto h-full bg-[#181818] bg-opacity-50"
      >
        <div className="flex flex-wrap lg:flex-nowrap items-start">
          <div className="flex w-full flex-col">
            <div className="flex items-center">
              <img className="w-20" src={logo} alt="" />
              <h1 className="text-5xl font-bold text-white">
                AR<span className="text-[#FF7C00]">Gym</span>
              </h1>
            </div>
            <p className="lg:pr-24">
              Per sagittis habitant netus nibh condimentum velit sociosqu ornare
              gravida natoque iaculis. Lorem lacus felis sodales.
            </p>
            <div></div>
          </div>
          <div className="w-full flex justify-between">
            <div className="flex w-full flex-col">
              <h6 className="font-bold text-2xl text-white">Company</h6>
              <a className="link link-hover">About us</a>
              <a className="link link-hover">Contact</a>
              <a className="link link-hover">Jobs</a>
              <a className="link link-hover">Press kit</a>
            </div>
            <div className="flex w-full flex-col">
              <h6 className="font-bold text-2xl text-white">Useful Links</h6>
              <a className="link link-hover">Terms of use</a>
              <a className="link link-hover">Privacy policy</a>
              <a className="link link-hover">Cookie policy</a>
            </div>
          </div>
          <form className="flex w-full space-y-3 flex-col">
            <h6 className="font-bold text-2xl text-white">
              Subscribe Newsletter
            </h6>
            <fieldset className="form-control">
              <p>
                Get the latest gym news, fitness tips, & exclusive offers
                delivered straight to your inbox.
              </p>
              <div className="join py-10">
                <input
                  type="text"
                  placeholder="Enter your email"
                  className="bg-transparent w-full px-4 border-slate-300 border"
                />
                <button className="btn btn-primary join-item">Subscribe</button>
              </div>
            </fieldset>
          </form>
        </div>
        <aside>
          <p className="text-slate-400 text-center">Copyright © 2024 - All right reserved by AR Gym</p>
        </aside>
      </footer>
    </div>
  );
};

export default Footer;
