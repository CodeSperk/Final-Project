import { Outlet } from "react-router-dom";
import Footer2 from "../Components/Footer/Footer2";
import Footer from "../Components/Footer/Footer";

const RootLayout = () => {
  return (
    <div>
      
      <Outlet></Outlet>
      <Footer />
      <Footer2 />

    </div>
  );
};

export default RootLayout;