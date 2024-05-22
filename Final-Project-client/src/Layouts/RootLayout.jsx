import { Outlet, useLocation } from "react-router-dom";
import Footer2 from "../Components/Footer/Footer2";
import Footer from "../Components/Footer/Footer";
import Navbar from "../Components/Navbar/Navbar";

const RootLayout = () => {
  const location = useLocation();

  const noHeaderFooter = location.pathname.includes("/login");
  const contactPage = location.pathname.includes("/contact");

  return (
    <div>
      {noHeaderFooter || <Navbar></Navbar>}
      <Outlet></Outlet>

      {
        noHeaderFooter || <>
        <Footer />
        {
          contactPage || <Footer2 />
        }        
        </>
      }

    </div>
  );
};

export default RootLayout;