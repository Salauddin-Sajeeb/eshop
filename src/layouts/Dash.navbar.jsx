/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import useAuth from '../hooks/useAuth';
import { Link } from 'react-router-dom';
const DashNavbar = () => {
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
        <div className="navbar bg-neutral text-neutral-content">
            <div className="flex-1">
                <a className="btn btn-ghost text-xl ">eshop</a>
            </div>
            <div className="flex-none gap-2">
                <div className="form-control">
                    <input type="text" placeholder="Search" className="input input-bordered w-24 md:w-auto" />
                </div>
                <button className="btn btn-ghost btn-circle">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                </button>
                <div className="dropdown dropdown-end">
                    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                        <div className="w-10 rounded-full">
                            <img alt="Tailwind CSS Navbar component" src={user?.photoURL} />
                        </div>
                    </div>
                    <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
                        <li>
                            <a className=" btn btn-primary-content">
                                <span className=" ">{info?.name}</span>
                            </a>
                        </li>
                        <li className='btn btn-primary-content'>
                            <Link to={`/edit-profile/edit/${user.email}`}>Edit Profile</Link>

                        </li>

                        <li className=' btn btn-primary-content' onClick={handleLogout}>Logout</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default DashNavbar;