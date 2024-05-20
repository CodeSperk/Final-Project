import { Helmet } from "react-helmet-async";
import shopBanner from "../../assets/shop/banner2.jpg"
import PageBanner from "../../Components/PageBanner/PageBanner";

const Order = () => {
  return (
    <div>
      <Helmet>
        <title>TasteTrack | Order </title>
      </Helmet>
      <PageBanner img={shopBanner} title="our shop" description="Would you like to try a dish?"></PageBanner>
    </div>
  );
};

export default Order;