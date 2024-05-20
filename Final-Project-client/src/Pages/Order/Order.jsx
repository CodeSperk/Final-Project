import { Helmet } from "react-helmet-async";
import shopBanner from "../../assets/shop/banner2.jpg";
import PageBanner from "../../Components/PageBanner/PageBanner";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

// custom Styles
import "./orderTabs.css";
import { useState } from "react";

const Order = () => {
  const [tabIndex, setTabIndex] = useState(0);

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
      <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
        <TabList className="uppercase mb-10 md:mb-16">
          <Tab>Salad</Tab>
          <Tab>Pizza</Tab>
          <Tab>soups</Tab>
          <Tab>desserts</Tab>
          <Tab>drinks</Tab>
        </TabList>

        <TabPanel>Salad</TabPanel>
        <TabPanel>Pizza</TabPanel>
        <TabPanel>soups</TabPanel>
        <TabPanel>desserts</TabPanel>
        <TabPanel>drinks</TabPanel>
      </Tabs>
      </section>
    </div>
  );
};

export default Order;
