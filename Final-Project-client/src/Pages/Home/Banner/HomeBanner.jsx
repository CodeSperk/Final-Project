import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

import banner1 from "../../../assets/home/banner-01.jpg";
import banner2 from "../../../assets/home/banner-02.jpg";
import banner3 from "../../../assets/home/banner-03.png";
import banner4 from "../../../assets/home/banner-04.jpg";
import banner5 from "../../../assets/home/banner-05.png";
import banner6 from "../../../assets/home/banner-06.png";

const HomeBanner = () => {
  return (
    <section className="max-h-sc">
      <Carousel
        autoPlay
        interval={3000}
        infiniteLoop
        className="text-center max-h-screen"
      >
        <div className="max-h-[80vh] w-full">
          <img src={banner1}  />
        </div>
        <div className="max-h-[80vh]">
          <img src={banner2} />
        </div>
        <div className="max-h-[80vh]">
          <img src={banner3}  />
        </div>
        <div className="max-h-[80vh]">
          <img src={banner4}  />
        </div>
        <div className="max-h-[80vh]">
          <img src={banner5}  />
        </div>
        <div className="max-h-[80vh]">
          <img src={banner6}  />
        </div>
        
      </Carousel>
    </section>
  );
};

export default HomeBanner;
