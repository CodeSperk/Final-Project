import { Link, NavLink } from "react-router-dom";

const Navbar = () => {

  const navItems = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/order">Order</NavLink>
      </li>
      <li>
        <NavLink to="/menu">Menu</NavLink>
      </li>
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