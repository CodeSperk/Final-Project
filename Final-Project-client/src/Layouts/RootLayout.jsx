import { Outlet } from "react-router-dom";
import Footer2 from "../Components/Footer/Footer2";
import Footer from "../Components/Footer/Footer";
import Navbar from "../Components/Navbar/Navbar";

const RootLayout = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Footer />
      <Footer2 />

    </div>
  );
};

export default RootLayout;