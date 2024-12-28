import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <div className="navbar bg-base-100">
        {/* Navbar Start */}
        <div className="navbar-start">
          <div className="dropdown">
            {/* Mobile Menu Button */}
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
            {/* Dropdown Menu for Mobile */}
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-44 p-2 shadow"
            >
              <li>
                <Link
                  className="font-medium text-sm hover:text-blue-500"
                  to="/food"
                >
                  Food & Grocery
                </Link>
              </li>
              <li>
                <Link
                  className="font-medium text-sm hover:text-blue-500"
                  to="/pharmacy"
                >
                  Pharmacy
                </Link>
              </li>
              <li>
                <Link
                  className="font-medium text-sm hover:text-blue-500"
                  to="/fashion"
                >
                  Fashion
                </Link>
              </li>
              <li>
                <Link
                  className="font-medium text-sm hover:text-blue-500"
                  to="/electronic"
                >
                  Electronic
                </Link>
              </li>
              <li>
                <Link
                  className="font-medium text-sm hover:text-blue-500"
                  to="/jewellery"
                >
                  Jewellery
                </Link>
              </li>
              <li>
                <Link
                  className="font-medium text-sm hover:text-blue-500"
                  to="/book"
                >
                  Books
                </Link>
              </li>
              <li>
                <Link
                  className="font-medium text-sm hover:text-blue-500"
                  to="/phone"
                >
                  Phone
                </Link>
              </li>
            </ul>
          </div>
          {/* Logo */}
          <Link
            className="btn btn-ghost text-lg font-bold hover:text-blue-500"
            to="/home"
          >
            daisyUI
          </Link>
        </div>

        {/* Center Menu */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <Link
                className="font-medium text-sm hover:text-blue-500"
                to="/fashion"
              >
                Fashion
              </Link>
            </li>
            <li>
              <Link
                className="font-medium text-sm hover:text-blue-500"
                to="/phone"
              >
                Phone
              </Link>
            </li>
            <li>
              <Link
                className="font-medium text-sm hover:text-blue-500"
                to="/pharmacy"
              >
                Pharmacy
              </Link>
            </li>
            <li>
              <Link
                className="font-medium text-sm hover:text-blue-500"
                to="/book"
              >
                Books
              </Link>
            </li>
            <li>
              <Link
                className="font-medium text-sm hover:text-blue-500"
                to="/jewellery"
              >
                Jewellery
              </Link>
            </li>
            <li>
              <Link
                className="font-medium text-sm hover:text-blue-500"
                to="/food"
              >
                Food & Grocery
              </Link>
            </li>
            <li>
              <Link
                className="font-medium text-sm hover:text-blue-500"
                to="/electronic"
              >
                Electronic
              </Link>
            </li>
          </ul>
        </div>

        {/* Navbar End */}
        <div className="navbar-end flex items-center space-x-2">
          {/* Search Box with Button Inside for Larger Devices */}
          <div className="hidden md:flex input-group">
            <input
              type="text"
              placeholder="Search..."
              className="input input-bordered w-36 md:w-48 lg:w-64 text-sm"
            />
            <button className="btn btn-primary text-sm ml-2">Search</button>
          </div>

          {/* Cart Section */}
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle">
              <div className="indicator">
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
                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5 6H2m5 7v6a2 2 0 002 2h10a2 2 0 002-2v-6M9 19h6"
                  />
                </svg>
                <span className="badge badge-sm indicator-item">3</span>
              </div>
            </label>
            <div
              tabIndex={0}
              className="card card-compact dropdown-content w-52 bg-base-100 shadow"
            >
              <div className="card-body">
                <span className="font-bold text-sm">3 Items</span>
                <span className="text-info text-xs">Subtotal: $76</span>
                <div className="card-actions">
                  <button className="btn btn-primary btn-block btn-sm">
                    View Cart
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Profile Section */}
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-8 md:w-10 rounded-full">
                <img src="https://via.placeholder.com/150" alt="Profile" />
              </div>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-44 p-2 shadow"
            >
              <li>
                <a className="font-medium text-sm hover:text-blue-500">
                  Profile
                </a>
              </li>
              <li>
                <a className="font-medium text-sm hover:text-blue-500">
                  Settings
                </a>
              </li>
              <li>
                <a className="font-medium text-sm hover:text-blue-500">
                  Logout
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
