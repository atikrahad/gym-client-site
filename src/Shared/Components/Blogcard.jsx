import { MdOutlineCalendarMonth } from "react-icons/md";

const Blogcard = () => {
  return (
    <div className="card card-compact rounded-none w-96">
      <figure>
        <img
          src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
          alt="Shoes"
        />
      </figure>
      <div className="py-5 flex flex-col">
        <div className="flex items-center gap-3">
          <MdOutlineCalendarMonth className="text-slate-300"/>
          <p className="text-slate-300">decembar, 23, 2024</p>
        </div>
        <h2 className="text-2xl font-medium text-white">Shoes!</h2>
        <div className="h-12 overflow-hidden ">
          <p className="text-slate-400">If a dog chews shoes whose shoes does he choose? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatem, vero! Nam nihil soluta similique accusamus porro et? Mollitia voluptates incidunt minima id tenetur, iusto labore dolores nostrum rem similique quod.</p>
        </div>
      </div>
    </div>
  );
};

export default Blogcard;
