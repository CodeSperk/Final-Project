import { FaQuoteLeft } from "react-icons/fa";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper/modules";

import { Rating } from '@smastrom/react-rating'

import '@smastrom/react-rating/style.css'
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";

const Testimonial = () => {
  const axiosPublic = useAxiosPublic();
  const {isPending, data:  reviews = []} = useQuery({
    queryKey:["reviews"],
    queryFn: async () => {
      const res = await axiosPublic("/reviews")
      return res.data;
    }
  })

  isPending && <div>Loading</div>

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
