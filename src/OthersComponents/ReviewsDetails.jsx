const ReviewsDetails = ({ item }) => {
  const { image, pic, section, name, review } = item;
  return (
    <div className="py-20">
      <h1 className="text-center pb-5 text-white text-4xl font-semibold">
        Cheak Reviews
      </h1>
      <div className="flex flex-col md:flex-row items-center max-w-screen-md mx-auto">
        <div className="w-full flex items-center justify-center md:w-[40%]">
          <img src={image} alt="" />
        </div>
        <div className=" w-full flex flex-col space-y-5 items-center md:items-start justify-center md:w-[60%]">
          <div className="flex gap-3 items-center">
            <img className="w-16 h-16 rounded-full" src={pic} alt="" />
            <div>
              <h1 className="text-2xl text-white font-semibold">{name}</h1>
              <p className="text-slate-300 ">{section}</p>
            </div>
          </div>
          <p className="text-slate-400 text-center md:text-start">{review}</p>
        </div>
      </div>
    </div>
  );
};

export default ReviewsDetails;
