import { Link, NavLink } from "react-router-dom";
import Swal from "sweetalert2";
import { FaCartShopping } from "react-icons/fa6";
import useAuth from "../../Hooks/useAuth";
import useCart from "../../Hooks/useCart";

const Navbar = () => {
  const {user, logOutUser} = useAuth();
  const [carts] = useCart();

  const handleLogout = () => {
    logOutUser().then(() => {
      Swal.fire({
        icon: "success",
        title: "Logout Successful!",
        showConfirmButton: false,
        timer: 1500
      });
    }
    ).catch(error=>console.log(error.code))
  }

  const navItems = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/menu">Menu</NavLink>
      </li>
      <li>
        <NavLink to="/order/salad">Order</NavLink>
      </li>
      <li>
        <NavLink to="/secret">Secret</NavLink>
      </li>
      <li>
        <NavLink to="/contact">Contact</NavLink>
      </li>
      <li className="relative">
        <Link className="text-xl"> <FaCartShopping />
        </Link>
        <p className="absolute right-0 -top-2 bg-[var(--clr-accent)] py-0 px-2">{carts.length}</p>
      </li>
      {user? <li onClick={handleLogout}>
        <Link>Logout</Link>
      </li> : <li>
        <Link to="/login">Login</Link>
      </li> }
    </>
  );

  return (
    <nav className="navbar px-3 md:px-8 lg:px-10 md:fixed md:bg-opacity-40 bg-[#111827] md:bg-black text-white py-3 md:py-5 z-10">
      <div className="navbar-start flex-grow">
        <div className="dropdown mr-4 lg:mr-0">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {navItems}
          </ul>
        </div>

        <Link to="/" className="uppercase font-cinzel">
          <h3 className="text-[var(--clr-white)]">Taste Track</h3>
          <h5 className="tracking-widest text-[var(--clr-white)]">
            Restaurant
          </h5>
        </Link>
      </div>

      <div className="navbar-end hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navItems}</ul>
      </div>
    </nav>
  );
};

export default Navbar;