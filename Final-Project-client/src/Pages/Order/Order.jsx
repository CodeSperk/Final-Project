import { Helmet } from "react-helmet-async";
import shopBanner from "../../assets/shop/banner2.jpg";
import PageBanner from "../../Components/PageBanner/PageBanner";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

// custom Styles
import "./orderTabs.css";
import { useState } from "react";
import useMenu from "../../Hooks/useMenu";
import TabContent from "./TabContent";
import { useParams } from "react-router-dom";

const Order = () => {
  const categories = ['salad', 'pizza', 'soup', 'dessert', 'drink'];
  const {category} = useParams();
  const initialIndex = categories.indexOf(category);
  const [tabIndex, setTabIndex] = useState(initialIndex);
  const [menu] = useMenu();

  const saladItems = menu.filter(item => item.category === "salad");
  const pizzaItems = menu.filter(item => item.category === "pizza");
  const soupItems = menu.filter(item => item.category === "soup");
  const dessertItems = menu.filter(item => item.category === "dessert");
  const drinkItems = menu.filter(item => item.category === "drink");

  return (
    <div>
      <Helmet>
        <title>TasteTrack | Order </title>
      </Helmet>
      <PageBanner
        img={shopBanner}
        title="our shop"
        description="Would you like to try a dish?"
      ></PageBanner>

        {/* Category wise Menu Items section */}
        <section className="mt-12 md:mt-16 lg:mt-24 max-w-[1400px] mx-auto px-3 md:px-8 lg:px-10 text-center">
      <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
        <TabList className="uppercase mb-10 md:mb-16">
          <Tab>Salad</Tab>
          <Tab>Pizza</Tab>
          <Tab>soups</Tab>
          <Tab>desserts</Tab>
          <Tab>drinks</Tab>
        </TabList>

        <TabPanel>
          <TabContent items={saladItems}></TabContent>
        </TabPanel>
        <TabPanel>
          <TabContent items={pizzaItems}></TabContent>
        </TabPanel>
        <TabPanel>
          <TabContent items={soupItems}></TabContent>
        </TabPanel>
        <TabPanel>
          <TabContent items={dessertItems}></TabContent>
        </TabPanel>
        <TabPanel>
          <TabContent items={drinkItems}></TabContent>
        </TabPanel>
       
        
        
      </Tabs>
      </section>
    </div>
  );
};

export default Order;
