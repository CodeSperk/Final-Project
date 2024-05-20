import { useEffect, useState } from "react";
import SectionHeader from "../../Components/Footer/SectionHeader";
import HomeBanner from "./Banner/HomeBanner";
import FoodCategory from "./FoodCategory/FoodCategory";
import MenuItem from "../../Components/MenuItem/MenuItem";
import MenuButton from "../../Components/MenuButton/MenuButton";


const Home = () => {
  const [menus, setMenus] = useState([]);
  const [itemLength, setItemLength] = useState(4);

  useEffect(() => {
    fetch("/menu.json")
    .then(res=> res.json())
    .then(data => setMenus(data))
  } ,[])

  const popularMenus = menus.filter(menu => menu.category === "popular");

  return (
    <div>
      <HomeBanner></HomeBanner>

      {/* Food Category Section */}
      <section className="mt-12 md:mt-16 lg:mt-24 max-w-[1400px] mx-auto px-3 md:px-8 lg:px-10">
        <SectionHeader  heading="ORDER ONLINE"
          subHeading="From 11:00am to 10:00pm"></SectionHeader>
        <FoodCategory></FoodCategory>     
      </section>

      {/* Popular Menu Section */}
      <section className="mt-12 md:mt-16 lg:mt-24 max-w-[1400px] mx-auto px-3 md:px-8 lg:px-10">
          <SectionHeader   heading="From Our Menu"
          subHeading="Popular Menu"></SectionHeader>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {
              (popularMenus.slice(0, itemLength).map(menu =><MenuItem key={menu._id} item={menu}></MenuItem>))
            }
          </div>

            {(popularMenus.length > 4 && itemLength === 4) && <div onClick={() => setItemLength(popularMenus.length)}>
              <MenuButton text="View Full Menu"></MenuButton>
              </div>
            }

          {
            itemLength > 4 && <div onClick={() => setItemLength(4)}>
           <MenuButton text="view less"></MenuButton>
            </div> 
          }
      </section>
      
    </div>
  );
};

export default Home;