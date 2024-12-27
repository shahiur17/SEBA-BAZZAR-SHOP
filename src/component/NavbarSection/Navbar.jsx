import { Link } from "react-router-dom"; // Import Link from react-router-dom

const Navbar = () => {
  return (
    <div>
      <div className="navbar bg-base-100">
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
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              <li>
                <Link className="font-bold hover:text-blue-500" to="/food">
                  Food & Grocery
                </Link>
              </li>
              <li>
                <Link className="font-bold hover:text-blue-500" to="/pharmacy">
                  Pharmacy
                </Link>
              </li>
              <li>
                <Link className="font-bold hover:text-blue-500" to="/fashion">
                  Fashion
                </Link>
              </li>
              <li>
                <Link
                  className="font-bold hover:text-blue-500"
                  to="/electronic"
                >
                  Electronic
                </Link>
              </li>
              <li>
                <Link className="font-bold hover:text-blue-500" to="/jewellery">
                  Jewellery
                </Link>
              </li>
              <li>
                <Link className="font-bold hover:text-blue-500" to="/book">
                  Books
                </Link>
              </li>
              <li>
                <Link className="font-bold hover:text-blue-500" to="/phone">
                  Phone
                </Link>
              </li>
            </ul>
          </div>
          {/* Logo */}
          <Link
            className="btn btn-ghost text-xl font-bold hover:text-blue-500"
            to="/home"
          >
            daisyUI
          </Link>
        </div>
        {/* Center Menu for Large Screens */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <Link className="font-bold hover:text-blue-500" to="/fashion">
                Fashion
              </Link>
            </li>
            <li>
              <Link className="font-bold hover:text-blue-500" to="/phone">
                Phone
              </Link>
            </li>
            <li>
              <Link className="font-bold hover:text-blue-500" to="/pharmacy">
                Pharmacy
              </Link>
            </li>
            <li>
              <Link className="font-bold hover:text-blue-500" to="/book">
                Books
              </Link>
            </li>
            <li>
              <Link className="font-bold hover:text-blue-500" to="/jewellery">
                Jewellery
              </Link>
            </li>
            <li>
              <Link className="font-bold hover:text-blue-500" to="/food">
                Food & Grocery
              </Link>
            </li>
            <li>
              <Link className="font-bold hover:text-blue-500" to="/electronic">
                Electronic
              </Link>
            </li>
          </ul>
        </div>
        {/* Navbar End */}
        <div className="navbar-end flex items-center space-x-4">
          {/* Search Box with Button */}
          {/* Profile Section */}
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img src="https://via.placeholder.com/150" alt="Profile" />
              </div>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              <li>
                <a className="font-bold hover:text-blue-500">Profile</a>
              </li>
              <li>
                <a className="font-bold hover:text-blue-500">Settings</a>
              </li>
              <li>
                <a className="font-bold hover:text-blue-500">Logout</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
