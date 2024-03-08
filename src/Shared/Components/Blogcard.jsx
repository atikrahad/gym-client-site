/* eslint-disable react/prop-types */
import { MdOutlineCalendarMonth } from "react-icons/md";
import { Link } from "react-router-dom";

const Blogcard = ({ item }) => {
  const { title, image, _id, description, date } = item;
  console.log(date);
  return (
    <Link to={`/article/${_id}`}>
      <div
        className="card card-compact rounded-none "
        data-aos="zoom-in"
        data-aos-duration="3000"
      >
        <figure>
          <img className="h-64 md:h-72" src={image} alt="Shoes" />
        </figure>
        <div className="py-5 flex flex-col">
          <div className="flex items-center gap-3">
            <MdOutlineCalendarMonth className="text-slate-300" />
            <p className="text-slate-300">decembar, 23, 2024</p>
          </div>
          <h2 className="text-2xl font-medium text-white">{title}</h2>
          <div className="h-12 overflow-hidden ">
            <p className="text-slate-400">{description}</p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Blogcard;
