// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
// import required modules
import { Pagination } from "swiper/modules";

import slide1 from "../../../assets/home/slide1.jpg";
import slide2 from "../../../assets/home/slide2.jpg";
import slide3 from "../../../assets/home/slide3.jpg";
import slide4 from "../../../assets/home/slide4.jpg";
import slide5 from "../../../assets/home/slide5.jpg";

const FoodCategory = () => {
  return (
    <>
      <Swiper
        slidesPerView={4}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide className="relative mb-8 md:mb-12">
          
            <img src={slide1} alt="" className="h-full"/>
            <p className=" text-[var(--clr-white)] md:text-xl absolute  bottom-2 ml-3 right-1/2 translate-x-1/2">Salads</p>
        </SwiperSlide>
        <SwiperSlide className="relative mb-8 md:mb-12">
          
            <img src={slide2} alt="" className="h-full"/>
            <p className=" text-[var(--clr-white)] md:text-xl absolute  bottom-2 ml-3 right-1/2 translate-x-1/2">Pizzas</p>
        </SwiperSlide>
        <SwiperSlide className="relative mb-8 md:mb-12">
          
            <img src={slide3} alt="" className="h-full"/>
            <p className=" text-[var(--clr-white)] md:text-xl absolute  bottom-2 ml-3 right-1/2 translate-x-1/2">Soup</p>
        </SwiperSlide>
        <SwiperSlide className="relative mb-8 md:mb-12">
          
            <img src={slide4} alt="" className="h-full"/>
            <p className=" text-[var(--clr-white)] md:text-xl absolute  bottom-2 ml-3 right-1/2 translate-x-1/2">Desert</p>
        </SwiperSlide>
        <SwiperSlide className="relative mb-8 md:mb-12">
          
            <img src={slide5} alt="" className="h-full"/>
            <p className=" text-[var(--clr-white)] md:text-xl absolute  bottom-2 ml-3 right-1/2 translate-x-1/2">Salads</p>
        </SwiperSlide>

        <SwiperSlide className="relative mb-8 md:mb-12" >
          
            <img src={slide2} alt="" className="h-full"/>
            <p className=" text-[var(--clr-white)] md:text-xl absolute  bottom-2 ml-3 right-1/2 translate-x-1/2">Pizzas</p>
        </SwiperSlide>
        <SwiperSlide className="relative mb-8 md:mb-12">
          
            <img src={slide3} alt="" className="h-full"/>
            <p className=" text-[var(--clr-white)] md:text-xl absolute  bottom-2 ml-3 right-1/2 translate-x-1/2">Soup</p>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default FoodCategory;