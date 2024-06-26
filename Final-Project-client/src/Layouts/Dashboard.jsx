import {
  FaAddressBook,
  FaBook,
  FaCalendar,
  FaHome,
  FaList,
  FaShopify,
  FaShoppingCart,
  FaUsers,
  FaUtensils,
} from "react-icons/fa";
import { FaSquareVimeo } from "react-icons/fa6";
import { MdContacts, MdMenu, MdOutlinePayment } from "react-icons/md";
import { NavLink, Outlet } from "react-router-dom";
import useAdmin from "../Hooks/useAdmin";
import useAuth from "../Hooks/useAuth";

const Dashboard = () => {
  const {user} = useAuth();
  const [isAdmin] = useAdmin();

console.log(user, isAdmin);

  const adminLinks = (
    <>
      <li>
        <NavLink to="/dashboard" className="flex items-center gap-4 text-xl">
          <FaHome></FaHome>
          Admin Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/dashboard/addItems"
          className="flex items-center gap-4 text-xl"
        >
          <FaUtensils></FaUtensils>
          Add Items
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/dashboard/manageItems"
          className="flex items-center gap-4 text-xl"
        >
          <FaList></FaList>
          Manage Items
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/dashboard/manageBookings"
          className="flex items-center gap-4 text-xl"
        >
          <FaBook></FaBook>
          Manage Bookings
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/dashboard/users"
          className="flex items-center gap-4 text-xl"
        >
          <FaUsers></FaUsers>
          All Users
        </NavLink>
      </li>{" "}
    </>
  );
  const userLinks = (<>
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
        to="/dashboard/payment"
        className="flex items-center gap-4 text-xl"
      >
        <MdOutlinePayment></MdOutlinePayment>
        Payment History
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
    <li>
      <NavLink
        to="/dashboard/addReview"
        className="flex items-center gap-4 text-xl"
      >
        <FaSquareVimeo></FaSquareVimeo>
        Add Review
      </NavLink>
    </li>
    <li>
      <NavLink
        to="/dashboard/bookings"
        className="flex items-center gap-4 text-xl"
      >
        <FaAddressBook></FaAddressBook>
        My Bookings
      </NavLink>
    </li>
  </>)

  return (
    <div className="flex">
      <div className="w-72 min-h-screen bg-[var(--clr-accent)] text-white flex justify-center items-start py-16 px-8">
        <ul className="space-y-6">
          {isAdmin ? (
             adminLinks
          ) : (
            userLinks
          )}

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
            <NavLink
              to="/order/salad"
              className="flex items-center gap-4 text-xl"
            >
              <FaShopify /> Order
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact" className="flex items-center gap-4 text-xl">
              <MdContacts />
              Contact
            </NavLink>
          </li>
        </ul>
      </div>
      <Outlet></Outlet>
    </div>
  );
};

export default Dashboard;
