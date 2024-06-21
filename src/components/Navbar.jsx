import { Link } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import { useEffect, useState } from "react";


const Navbar = () => {
  const { logout, user } = useAuth();
  const [info, setInfo] = useState()
  useEffect(() => {
    fetch(`https://eshop-server-theta.vercel.app/user/${user?.email}`)
      .then((res) => res.json())
      .then((data) => setInfo(data));

  }, [user]);
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
        <a href="/" className="btn btn-ghost text-xl">eshop</a>
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

        <div className="flex-none gap-2">


          <div className="dropdown dropdown-end">
            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img alt="Tailwind CSS Navbar component" src={user?.photoURL} />
              </div>
            </div>
            {user && (
              <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
                <li>
                  <a className="btn btn-primary-content">
                    <span className=" "> {info?.name}</span>
                  </a>
                </li>
                <li>
                  <a className="btn btn-primary-content">
                    <span className=" ">{info?.email}</span>
                  </a>
                </li>
                <li className='btn btn-primary-content bg-success text-bold'>
                  <Link to={`/edit-profile/edit/${user.email}`}>Edit Profile</Link>

                </li>

                <li className=' btn btn-primary-content bg-error' onClick={handleLogout}>Logout</li>

              </ul>

            )}

          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
