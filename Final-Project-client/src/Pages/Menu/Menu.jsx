import { Helmet } from "react-helmet-async";
import PageBanner from "../../Components/PageBanner/PageBanner";
import menuBanner from "../../assets/menu/banner3.jpg";
import desertCover from "../../assets/menu/dessert-bg.jpeg";
import pizzaCover from "../../assets/menu/pizza-bg.jpg";
import saladCover from "../../assets/menu/salad-bg.jpg";
import soupCover from "../../assets/menu/soup-bg.jpg";
import useMenu from "../../Hooks/useMenu";
import MenuCategory from "./MenuCategory/MenuCategory";

const Menu = () => {
  const [menu] = useMenu();

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
       <MenuCategory
        heading={`Don't miss`}
        subHeading={`TODAY'S OFFER`}
        items={offeredItems}
        btnText="Order your favorite food"
      ></MenuCategory>



      {/* Deserts section */}
      <MenuCategory
        items={dessertItems}
        coverImg={desertCover}
        coverTitle="Deserts"
        coverDescription={desertDescription}
        btnText="Order your favorite desserts"
      ></MenuCategory>

      {/* Pizza Cover section */}
      <MenuCategory
        items={pizzaItems}
        coverImg={pizzaCover}
        coverTitle="Pizza"
        coverDescription={pizzaDescription}
        btnText="Order your favorite pizza"
      ></MenuCategory>

      {/* Salads Cover section */}
      <MenuCategory
        items={saladItems}
        coverImg={saladCover}
        coverTitle="Salads"
        coverDescription={saladDescription}
        btnText="Order your favorite salads"
      ></MenuCategory>

      {/* Soup Cover section */}
      <MenuCategory
        items={soupItems}
        coverImg={soupCover}
        coverTitle="Soup"
        coverDescription={soupDescription}
        btnText="Order your favorite salad"
      ></MenuCategory>

      
    </div>
  );
};

export default Menu;
