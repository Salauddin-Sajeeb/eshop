/* eslint-disable no-unused-vars */
import { Link, Outlet } from "react-router-dom";
import DashsideBar from "./DashsideBar";
import DashBody from "./DashBody";
import DashNavbar from "./Dash.navbar";
import Footer from "../components/Footer";

const DashboardLayout = () => {
  return (

    <div>
      <div className="grid grid-cols-12 bg-primary-200 ">
        <div className="col-span-2  bg-grey-300 min-h-screen p-10 bg-primary-content">
          <DashsideBar />
        </div>

        <div className="col-span-10 p-2 ">
          <DashNavbar />
          <Outlet />
        </div>

      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default DashboardLayout;
