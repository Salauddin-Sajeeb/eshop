
// eslint-disable-next-line no-unused-vars
import { Bar, Chart, Line, Pie } from 'react-chartjs-2'

import { useEffect, useState } from "react";
import { Link, Outlet } from "react-router-dom";
import useAuth from '../hooks/useAuth'


const Dashboard = () => {
  const { user } = useAuth()
  const [info, setInfo] = useState()
  useEffect(() => {
    fetch(`https://eshop-server-theta.vercel.app/user/${user?.email}`)
      .then((res) => res.json())
      .then((data) => setInfo(data));

  }, [user]);
  return <div className="chart-container">

    <div className="col-span-10 p-20 mx-auto">
      <h2 className="mx-auto  text-3xl font-bold ">Your have access to this website now</h2>
      <div className="card w-96 bg-base-100 shadow-xl">
        <figure className="px-10 pt-10">
          <img src={user?.photoURL
          } alt="Shoes" className="rounded-xl" />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">{info?.name}</h2>
          <p>email: {info?.email}</p>
          <div className="card-actions mt-5">
            <button className="btn btn-primary"> <Link to={`/edit-profile/edit/${user.email}`}>Edit Profile</Link></button>
          </div>
        </div>
      </div>
      <Outlet />
    </div>

  </div>

};

export default Dashboard;
