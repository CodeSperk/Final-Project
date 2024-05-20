import { FaQuoteLeft } from "react-icons/fa";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper/modules";
import { useEffect, useState } from "react";

import { Rating } from '@smastrom/react-rating'

import '@smastrom/react-rating/style.css'

const Testimonial = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/reviews")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);
  console.log(reviews);

  return (
    <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
      {reviews.map((item) => (
        <SwiperSlide key={item._id}>
          <div className="mx-20 text-center">
            <div className="flex justify-center">
              <Rating style={{ maxWidth: 180 }} value={item.rating} readOnly />
            </div>

            <FaQuoteLeft className="text-6xl mx-auto my-10 text-[var(--clr-heading)]" />

            <p>{item.details}</p>
            <small className="text-[var(--clr-accent)] text-xl md:text-2xl">
              {item.name}
            </small>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Testimonial;
