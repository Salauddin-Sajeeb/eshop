/* eslint-disable no-unused-vars */
import React from 'react';
import { Link, Outlet } from "react-router-dom";
const DashsideBar = () => {
    return (
        <div>
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
    );
};

export default DashsideBar;