import { useState } from "react";
import HomeBanner from "./Banner/HomeBanner";
import FoodCategory from "./FoodCategory/FoodCategory";
import MenuItem from "../../Components/MenuItem/MenuItem";
import MenuButton from "../../Components/MenuButton/MenuButton";
import FeaturedContent from "./Featured/FeaturedContent";
import "./Featured/Featured.css";
import Testimonial from "./Testimonial/Testimonial";
import { Helmet } from "react-helmet-async";
import SectionHeader from "../../Components/SectionHeader/SectionHeader";
import useMenu from "../../Hooks/useMenu";

const Home = () => {
  const [isPending, menu] = useMenu();
  const [itemLength, setItemLength] = useState(4);

isPending && <div>Loading</div>
  const popularMenus = menu.filter((item) => item.category === "popular");

  return (
    <div>
      <Helmet>
        <title>TasteTrack | Home </title>
      </Helmet>
      

      <HomeBanner></HomeBanner>

      {/* Food Category Section */}
      <section className="mt-12 md:mt-16 lg:mt-24 max-w-[1400px] mx-auto px-3 md:px-8 lg:px-10">
        <SectionHeader
          heading="ORDER ONLINE"
          subHeading="From 11:00am to 10:00pm"
        ></SectionHeader>
        <FoodCategory></FoodCategory>
      </section>

      {/* Popular Menu Section */}
      <section className="mt-12 md:mt-16 lg:mt-24 max-w-[1400px] mx-auto px-3 md:px-8 lg:px-10">
        <SectionHeader
          heading="From Our Menu"
          subHeading="Popular Menu"
        ></SectionHeader>

        <MenuItem items={popularMenus}></MenuItem>

        {popularMenus.length > 4 && itemLength === 4 && (
          <div onClick={() => setItemLength(popularMenus.length)}>
            <MenuButton text="View Full Menu"></MenuButton>
          </div>
        )}

        {itemLength > 4 && (
          <div onClick={() => setItemLength(4)}>
            <MenuButton text="view less"></MenuButton>
          </div>
        )}
      </section>

      {/* featured section */}
      <section className="featured-section">
        <div className="mt-12 md:mt-16 lg:mt-24 max-w-[1400px] mx-auto px-3 md:px-8 lg:px-10 py-12 md:py-20 lg:py-28">
          <SectionHeader
            heading="FROM OUR MENU"
            subHeading="Featured Menu"
          ></SectionHeader>
          <FeaturedContent></FeaturedContent>
        </div>
      </section>

      {/* Testimonial section */}
      <section className="mt-12 md:mt-16 lg:mt-24 max-w-[1400px] mx-auto px-3 md:px-8 lg:px-10 py-12 md:py-20 lg:py-28">
        <SectionHeader
          heading="What Our Client Say"
          subHeading="Testimonial"
        ></SectionHeader>
        <Testimonial></Testimonial>
      </section>
    </div>
  );
};

export default Home;
