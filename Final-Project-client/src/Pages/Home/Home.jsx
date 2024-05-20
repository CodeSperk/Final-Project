import SectionHeader from "../../Components/Footer/SectionHeader";
import HomeBanner from "./Banner/HomeBanner";
import FoodCategory from "./FoodCategory/FoodCategory";

const Home = () => {
  return (
    <div>
      <HomeBanner></HomeBanner>

      {/* Food Category Section */}
      <section className="mt-12 md:mt-16 lg:mt-24 max-w-[1400px] mx-auto px-3 md:px-8 lg:px-10">
        <SectionHeader  heading="ORDER ONLINE"
          subHeading="From 11:00am to 10:00pm"></SectionHeader>

        <FoodCategory></FoodCategory>     

      </section>
      
    </div>
  );
};

export default Home;