import { Helmet } from "react-helmet-async";
import PageBanner from "../../Components/PageBanner/PageBanner";
import menuBanner from "../../assets/menu/banner3.jpg";

const Menu = () => {
  return (
    <div>
      <Helmet>
        <title>TasteTrack | Menu </title>
      </Helmet>

      {/* Banner */}
      <PageBanner img={menuBanner} title="Our Menu" description="Would you like to try a dish?"></PageBanner>
    </div>
  );
};

export default Menu;