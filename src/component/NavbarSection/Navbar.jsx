import { signOut } from "firebase/auth";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../../firebase.config";

const Navbar = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);

  const handleLogout = async () => {
    try {
      await signOut(auth);
      alert("Logged out successfully!");
      navigate("/login");
    } catch (error) {
      console.error("Error during logout:", error);
      alert("Logout failed!");
    }
  };

  return (
    <div>
      <div className="navbar bg-sky-600">
        {/* Navbar Start */}
        <div className="navbar-start">
          <div className="dropdown">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost lg:hidden text-black"
            >
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
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-44 p-2 shadow"
            >
              <li>
                <Link className="font-medium text-black" to="/food">
                  Food & Grocery
                </Link>
              </li>
              <li>
                <Link className="font-medium text-black" to="/pharmacy">
                  Pharmacy
                </Link>
              </li>
              <li>
                <Link className="font-medium text-black" to="/fashion">
                  Fashion
                </Link>
              </li>
              <li>
                <Link className="font-medium text-black" to="/electronic">
                  Electronic
                </Link>
              </li>
              <li>
                <Link className="font-medium text-black" to="/jewellery">
                  Jewellery
                </Link>
              </li>
              <li>
                <Link className="font-medium text-black" to="/book">
                  Books
                </Link>
              </li>
              <li>
                <Link className="font-medium text-black" to="/phone">
                  Phone
                </Link>
              </li>
            </ul>
          </div>
          <Link
            className="btn btn-ghost text-lg font-bold text-white hover:text-gray-200"
            to="/home"
          >
            SEBA
          </Link>
        </div>

        {/* Navbar Center */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <Link
                className="font-medium text-white hover:text-gray-200"
                to="/fashion"
              >
                Fashion
              </Link>
            </li>
            <li>
              <Link
                className="font-medium text-white hover:text-gray-200"
                to="/phone"
              >
                Phone
              </Link>
            </li>
            <li>
              <Link
                className="font-medium text-white hover:text-gray-200"
                to="/pharmacy"
              >
                Pharmacy
              </Link>
            </li>
            <li>
              <Link
                className="font-medium text-white hover:text-gray-200"
                to="/book"
              >
                Books
              </Link>
            </li>
            <li>
              <Link
                className="font-medium text-white hover:text-gray-200"
                to="/jewellery"
              >
                Jewellery
              </Link>
            </li>
            <li>
              <Link
                className="font-medium text-white hover:text-gray-200"
                to="/food"
              >
                Food & Grocery
              </Link>
            </li>
            <li>
              <Link
                className="font-medium text-white hover:text-gray-200"
                to="/electronic"
              >
                Electronic
              </Link>
            </li>
          </ul>
        </div>

        {/* Navbar End */}
        <div className="navbar-end flex items-center space-x-2">
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
                  className="h-5 w-5 text-white"
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
          </div>

          {/* Profile Section */}
          <div className="dropdown dropdown-end">
            {user ? (
              <>
                <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                  <div className="w-8 md:w-10 rounded-full">
                    <img
                      src={user.photoURL || "https://via.placeholder.com/150"}
                      alt="Profile"
                    />
                  </div>
                </label>
                <ul
                  tabIndex={0}
                  className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-44 p-2 shadow"
                >
                  <li>
                    <Link to="/profile" className="font-medium text-black">
                      Profile
                    </Link>
                  </li>
                  <li>
                    <button
                      onClick={handleLogout}
                      className="font-medium text-black"
                    >
                      Logout
                    </button>
                  </li>
                </ul>
              </>
            ) : (
              <Link to="/login">
                <button className="btn btn-ghost text-white">Login</button>
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
