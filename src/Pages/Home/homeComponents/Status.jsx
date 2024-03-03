import img from "../../../assets/Home/status/main-49.webp";
const Status = () => {
  return (
    <div
      className="max-w-screen-xl mx-auto"
      style={{
        backgroundImage:
          `url(${img})`,
          backgroundAttachment: 'fixed',
          backgroundSize: 'cover'
      }}
    >
      <div className="grid grid-cols-2 md:grid-cols-4">
        <div className="flex border-4 border-[#151517] flex-col p-10 items-center justify-center">
            <h1 className="text-white text-5xl font-bold">100+</h1>
            <p className="text-xl font-medium text-slate-200">Success Stories</p>
        </div>
        <div className="flex flex-col border-4 border-[#151517] p-10 items-center justify-center">
            <h1 className="text-white text-5xl font-bold">100+</h1>
            <p className="text-xl font-medium text-slate-200">Profetional Trainer</p>
        </div>
        <div className="flex flex-col border-4 border-[#151517] p-10 items-center justify-center">
            <h1 className="text-white text-5xl font-bold">100+</h1>
            <p className="text-xl font-medium text-slate-200">Happy Members</p>
        </div>
        <div className="flex flex-col border-4 border-[#151517] p-10 items-center justify-center">
            <h1 className="text-white text-5xl font-bold">100+</h1>
            <p className="text-xl font-medium text-slate-200">Years Experiance</p>
        </div>
      </div>
    </div>
  );
};

export default Status;
