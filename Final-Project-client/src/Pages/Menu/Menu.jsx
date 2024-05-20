import { Helmet } from "react-helmet-async";
import PageBanner from "../../Components/PageBanner/PageBanner";
import menuBanner from "../../assets/menu/banner3.jpg";
import desertCover from "../../assets/menu/dessert-bg.jpeg";
import pizzaCover from "../../assets/menu/pizza-bg.jpg";
import saladCover from "../../assets/menu/salad-bg.jpg";
import soupCover from "../../assets/menu/soup-bg.jpg";

import CoverSec from "../../Components/SectionCover/CoverSec";
import SectionHeader from "../../Components/SectionHeader/SectionHeader";
import MenuButton from "../../Components/MenuButton/MenuButton";
import { useEffect, useState } from "react";
import MenuItem from "../../Components/MenuItem/MenuItem";

const Menu = () => {
  const [menu, setMenu] = useState([]);

  useEffect(() => {
    fetch("/menu.json")
      .then((res) => res.json())
      .then((data) => setMenu(data));
  }, []);

  const offeredItems = menu.filter((item) => item.category === "offered");
  const dessertItems = menu.filter((item) => item.category === "dessert");
  const pizzaItems = menu.filter((item) => item.category === "pizza");
  const saladItems = menu.filter((item) => item.category === "salad");
  const soupItems = menu.filter((item) => item.category === "soup");

  const desertDescription =
    "Indulge in our decadent dessert selection, featuring irresistible treats crafted to satisfy every sweet craving and delight the palate.";
  const pizzaDescription =
    "Savor our artisanal pizzas, freshly baked with premium ingredients and bursting with mouthwatering flavors for an unforgettable dining experience.";
  const saladDescription =
    "Experience freshness in every bite with our vibrant salad creations, featuring locally sourced ingredients and exquisite dressings to tantalize your taste buds.";
  const soupDescription =
    "Warm up with our comforting soup selections, simmered to perfection with wholesome ingredients and rich flavors for a cozy culinary indulgence.";

  return (
    <div>
      <Helmet>
        <title>TasteTrack | Menu </title>
      </Helmet>

      {/* Banner */}
      <PageBanner
        img={menuBanner}
        title="Our Menu"
        description="Would you like to try a dish?"
      ></PageBanner>

      {/* Offer Section */}
      <section className="mt-12 md:mt-16 lg:mt-24 max-w-[1400px] mx-auto px-3 md:px-8 lg:px-10">
        <SectionHeader
          heading={`Don't miss`}
          subHeading={`TODAY'S OFFER`}
        ></SectionHeader>

        <div className="mt-12 md:mt-16 lg:mt-24 max-w-[1400px] mx-auto px-3 md:px-8 lg:px-10 grid grid-cols-1 md:grid-cols-2 gap-6">
          {offeredItems.map((oItem) => (
            <MenuItem key={oItem._id} item={oItem}></MenuItem>
          ))}
        </div>

        <MenuButton text="Order your favourite food"></MenuButton>
      </section>

      {/* Deserts section */}
      <section className="mt-12 md:mt-16 lg:mt-24">
        <CoverSec
          img={desertCover}
          title="Deserts"
          description={desertDescription}
        ></CoverSec>

        <div className="mt-12 md:mt-16 lg:mt-24 max-w-[1400px] mx-auto px-3 md:px-8 lg:px-10 grid grid-cols-1 md:grid-cols-2 gap-6">
          {dessertItems.map((item) => (
            <MenuItem key={item._id} item={item}></MenuItem>
          ))}
        </div>

        <MenuButton text="Order your favorite desert"></MenuButton>
      </section>

      {/* Pizza section */}
      <section className="mt-12 md:mt-16 lg:mt-24">
        <CoverSec
          img={pizzaCover}
          title="Pizza"
          description={pizzaDescription}
        ></CoverSec>

<div className="mt-12 md:mt-16 lg:mt-24 max-w-[1400px] mx-auto px-3 md:px-8 lg:px-10 grid grid-cols-1 md:grid-cols-2 gap-6">
          {pizzaItems.map((item) => (
            <MenuItem key={item._id} item={item}></MenuItem>
          ))}
        </div>

        <MenuButton text="Order your favorite desert"></MenuButton>
      </section>

      {/* Salads section */}
      <section className="mt-12 md:mt-16 lg:mt-24">
        <CoverSec
          img={saladCover}
          title="Salads"
          description={saladDescription}
        ></CoverSec>
         <div className="mt-12 md:mt-16 lg:mt-24 max-w-[1400px] mx-auto px-3 md:px-8 lg:px-10 grid grid-cols-1 md:grid-cols-2 gap-6">
          {saladItems.map((item) => (
            <MenuItem key={item._id} item={item}></MenuItem>
          ))}
        </div>
        <MenuButton text="Order your favorite desert"></MenuButton>
      </section>

      {/* Soup section */}
      <section className="mt-12 md:mt-16 lg:mt-24">
        <CoverSec
          img={soupCover}
          title="Soup"
          description={soupDescription}
        ></CoverSec>
         <div className="mt-12 md:mt-16 lg:mt-24 max-w-[1400px] mx-auto px-3 md:px-8 lg:px-10 grid grid-cols-1 md:grid-cols-2 gap-6">
          {soupItems.map((item) => (
            <MenuItem key={item._id} item={item}></MenuItem>
          ))}
        </div>
        <MenuButton text="Order your favorite desert"></MenuButton>
      </section>
    </div>
  );
};

export default Menu;
