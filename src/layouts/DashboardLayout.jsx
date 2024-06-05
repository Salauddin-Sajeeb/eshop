import { Link, Outlet } from "react-router-dom";

const DashboardLayout = () => {
  return (

    <div className="grid grid-cols-12 bg-primary-200 ">
      <div className="col-span-2 bg-grey-300 min-h-screen p-12 bg-primary-content">
        <ul className="">
          <li className="border border-black p-2 text w-full hover:list-disc my-4 btn btn-neutral ">
            <Link to={"home"}>Dashboard</Link>
          </li>
          <li className="border border-black p-2 text w-full btn btn-neutral">
            <Link to={"all-products"}>All Products</Link>
          </li>
          <li className="border border-black p-2 text w-full my-4 btn btn-neutral">
            <Link to={"add-products"}>Add Product</Link>
          </li>

          <li className="border border-black p-2 text w-full btn btn-neutral">
            <Link to={"/"}>Home</Link>
          </li>
        </ul>
      </div>

      <div className="col-span-10 p-20">
        <Outlet />
      </div>

    </div>
  );
};

export default DashboardLayout;
