import React from 'react';
import { MdOutlinePets } from "react-icons/md";
import { Link } from "react-router";

const ServiceCategory = () => {
    return (
        <div className='w-11/12 mx-auto'>
            <h2 className='font-bold text-4xl text-center mt-15'>Browse Categories</h2>

            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 w-10/12 mx-auto mt-10'>

                <Link to="/services?category=Pets">
                    <div className='card bg-base-200 w-full flex flex-col justify-center items-center p-10 gap-5 rounded-xl shadow-md cursor-pointer'>
                        <MdOutlinePets className="text-5xl text-primary" />
                        <h3 className='text-xl font-bold text-center'>Pets (Adoption)</h3>
                    </div>
                </Link>

                <Link to="/services?category=Food">
                    <div className='card bg-base-200 w-full flex flex-col justify-center items-center p-10 gap-5 rounded-xl shadow-md cursor-pointer'>
                        <MdOutlinePets className="text-5xl text-primary" />
                        <h3 className='text-xl font-bold text-center'>Pet Food</h3>
                    </div>
                </Link>

                <Link to="/services?category=Accessories">
                    <div className='card bg-base-200 w-full flex flex-col justify-center items-center p-10 gap-5 rounded-xl shadow-md cursor-pointer'>
                        <MdOutlinePets className="text-5xl text-primary" />
                        <h3 className='text-xl font-bold text-center'>Accessories</h3>
                    </div>
                </Link>

                <Link to="/services?category=Care Products">
                    <div className='card bg-base-200 w-full flex flex-col justify-center items-center p-10 gap-5 rounded-xl shadow-md cursor-pointer'>
                        <MdOutlinePets className="text-5xl text-primary" />
                        <h3 className='text-xl font-bold text-center'>Care Products</h3>
                    </div>
                </Link>

            </div>
        </div>
    );
};

export default ServiceCategory;
