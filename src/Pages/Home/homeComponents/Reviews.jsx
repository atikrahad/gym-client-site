import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { useEffect, useState } from "react";
import ReviewsDetails from "../../../OthersComponents/ReviewsDetails";

export default function Reviews() {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch("review.json")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);
  return (
    <div className="max-w-screen-xl mx-auto">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        loop= {true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        {reviews.map((item) => (
          <SwiperSlide key={item.id}>
            <ReviewsDetails item={item}></ReviewsDetails>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
