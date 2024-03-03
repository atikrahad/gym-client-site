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
          <MdOutlineCalendarMonth />
          <p>decembar, 23, 2024</p>
        </div>
        <h2 className="card-title">Shoes!</h2>
        <div className="h-12 overflow-hidden ">
          <p>If a dog chews shoes whose shoes does he choose? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatem, vero! Nam nihil soluta similique accusamus porro et? Mollitia voluptates incidunt minima id tenetur, iusto labore dolores nostrum rem similique quod.</p>
        </div>
      </div>
      <button className="btn-bg">Read Article</button>
    </div>
  );
};

export default Blogcard;
