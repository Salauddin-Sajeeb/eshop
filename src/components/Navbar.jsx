import { Link } from "react-router-dom";
import useAuth from "../hooks/useAuth";


const Navbar = () => {
  const { logout, user } = useAuth();

  const handleLogout = async () => {
    await logout()
  }

  return (

    <div className="navbar  bg-primary-content">

      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="https://img.freepik.com/premium-photo/cctv-camera-logo_1003030-9368.jpg?w=740"
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
            <li className="btn btn-outline btn-success">
              <Link to={"/"}>Home</Link>
            </li>
            <li>
              <Link to={"/all-products"}>Our products</Link>
            </li>
            <li>
              <Link to={"/about"}>About</Link>
            </li>


            {!user && (
              <>
                <li className="btn btn-neutral mx-2">
                  <Link to={"/login"}>hi</Link>
                </li>
                <li className="btn btn-neutral mx-2">
                  <Link to={"/register"}>Register</Link>
                </li>
              </>
            )}
            {user && (
              <li className="btn btn-neutral mx-2">
                <Link to={"/dashboard"}>Dashboard</Link>
              </li>
            )}
            {user && (
              <li className="btn btn-info">
                <button
                  onClick={handleLogout}
                  className="btn bg-red-500 text-white"
                >
                  Logout
                </button>
              </li>
            )}
          </ul>
        </div>
        <a className="btn btn-ghost text-xl">eshop</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li className="btn btn-neutral">
            <Link to={"/"}>Home</Link>
          </li>
          <li className="btn btn-neutral mx-2">
            <Link to={"/about"}>about</Link>
          </li>
          <li className="btn btn-neutral mx-2">
            <Link to={"/all-products"}>Our Products</Link>
          </li>
          {!user && (
            <>
              <li className="btn btn-neutral">
                <Link to={"/login"}>Login</Link>
              </li >
              <li className="btn btn-neutral mx-2">
                <Link to={"/register"}>Register</Link>
              </li>
            </>
          )}
          {user && (
            <li className="btn btn-neutral">
              <Link to={"/dashboard"}>Dashboard</Link>
            </li>
          )}
        </ul>
      </div>
      <div className="navbar-end space-x-2">
        {user && (
          <button
            onClick={handleLogout}
            className="btn bg-info text-white hidden lg:block"
          >
            Logout
          </button>

        )}

        <div className="avatar online">
          <div className="w-12 rounded-full border-2 border-black">
            <img src={user?.photoURL || "/public/placeholder.jpg"} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
