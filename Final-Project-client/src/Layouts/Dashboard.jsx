import { FaCalendar, FaHome, FaShopify, FaShoppingCart } from "react-icons/fa";
import { MdContacts, MdMenu } from "react-icons/md";
import { NavLink, Outlet } from "react-router-dom";

const Dashboard = () => {
  return (
    <div className="flex">
      <div className="w-72 min-h-screen bg-[var(--clr-accent)] text-white flex justify-center items-start py-16 px-8">
        <ul className="space-y-6">
          <li>
            <NavLink
              to="/dashboard/userHome"
              className="flex items-center gap-4 text-xl"
            >
              <FaHome></FaHome>
              User Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/dashboard/reservation"
              className="flex items-center gap-4 text-xl"
            >
              <FaCalendar></FaCalendar>
              Reservation
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/dashboard/cart"
              className="flex items-center gap-4 text-xl"
            >
              <FaShoppingCart></FaShoppingCart>
              My Cart
            </NavLink>
          </li>

          <div className="divider"></div>
          <li>
            <NavLink to="/" className="flex items-center gap-4 text-xl">
              <FaHome></FaHome>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/menu" className="flex items-center gap-4 text-xl">
              <MdMenu></MdMenu>
              Menu
            </NavLink>
          </li>
          <li>
            <NavLink to="/order/salad" className="flex items-center gap-4 text-xl">
              <FaShopify/> Order</NavLink>
          </li>
          <li>
            <NavLink to="/contact" className="flex items-center gap-4 text-xl">
              <MdContacts/>
              Contact</NavLink>
          </li>
        </ul>
      </div>
      <Outlet></Outlet>
    </div>
  );
};

export default Dashboard;
