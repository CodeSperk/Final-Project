import { Helmet } from "react-helmet-async";
import shopBanner from "../../assets/shop/banner2.jpg"
import PageBanner from "../../Components/PageBanner/PageBanner";

const Shop = () => {
  return (
    <div>
      <Helmet>
        <title>TasteTrack | Shop </title>
      </Helmet>
      <PageBanner img={shopBanner} title="our shop" description="Would you like to try a dish?"></PageBanner>
    </div>
  );
};

export default Shop;