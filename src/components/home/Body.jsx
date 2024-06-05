/* eslint-disable no-unused-vars */
import React from 'react';
import { Link } from 'react-router-dom';

const Body = () => {
    return (
        <div>
            <div className="my-16 flex flex-wrap gap-4">
                <div className="card w-96 bg-primary text-primary-content ml-5 shadow-2xl ">
                    <div className="card-body">
                        <h2 className="card-title">Millions of business offerings</h2>
                        <p>Explore products and suppliers for your business from millions of offerings worldwide.</p>

                    </div>
                </div>
                <div className="card shrink-0 shadow-2xl w-96 bg-primary text-primary-content">
                    <div className="card-body">
                        <h2 className="card-title">Assured quality and transactions</h2>
                        <p>Ensure production quality from verified suppliers, with your orders protected from payment to delivery.</p>

                    </div>
                </div>
                <div className="card w-96 bg-primary text-primary-content">
                    <div className="card-body">
                        <h2 className="card-title">One-stop trading solution</h2>
                        <p>Order seamlessly from product/supplier search to order management, payment, and fulfillment.</p>

                    </div>
                </div>

            </div>
            <div className='flex md-12 mt-5 w-100 h-40 pt-5'>
                <div className='col md-8 '>
                    <h1 className=' text-3xl font-bold mx-5 px-5'>Explore millions of offerings tailored <br /> to your business needs</h1>
                </div>
                <div className='col-md-4 flex flex-wrap mx-5'>
                    <div className='text-2xl font-bold card mx-5 px-2 ' > <h1 className=' text-orange-600'>500+</h1> <p>Products</p> </div>
                    <div className='text-2xl font-bold mx-3 px-2 rounded-box' ><h1 className=' text-orange-600'>200</h1><p>Supplies</p></div>
                    <div className='text-2xl font-bold mx-3 px-2' ><h1 className=' text-orange-600'>200</h1><p>Product Category</p></div>
                    <div className='text-2xl font-bold mx-3 px-2' ><h1 className=' text-orange-600'>10</h1><p>District</p></div>
                </div>
            </div>
            <div className='bg-primary text-primary-content  w-100 h-80 pt-5'>
                <p className='mb-5 text-5xl font-bold text-center pt-5'>Ready to get started? <br /><span className='text-2xl font-bold'>Explore millions of products from trusted suppliers by signing up today!</span> <br /><span className='btn text-center btn-neutral px-5 mt-5 '>


                    <Link to={"/register"}>Sign up</Link></span></p>

            </div>
            <div className='card bg-primary'>

            </div>

        </div>
    );
};

export default Body;