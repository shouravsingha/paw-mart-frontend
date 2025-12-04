import React, { useEffect, useState } from 'react';
import { Link } from 'react-router';
import { motion } from "motion/react"

const Services = () => {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [category, setCategory] = useState('')

  useEffect(() => {
    fetch(`http://localhost:3000/listing?category=${category}`)
      .then(res => res.json())
      .then(data => {
        setServices(data);
        setLoading(false);
      })
      .catch(error => {
        console.log(error);
        setLoading(false);
      });
  }, [category]);
  
  

  // Show spinner while loading
  if (loading) {
    return (
      <div className="flex justify-center items-center h-96">
        <span className="loading loading-spinner loading-md"></span>
      </div>
    );
  }


  return (
    <div className="w-11/12 lg:w-10/12 mx-auto mb-20">

      {/* Select Dropdown */}
      <select onChange={(e) => setCategory(e.target.value)}
        defaultValue="Choose Category"
        className="select select-primary mt-10"
      >
        <option disabled={true}>
          Choose Category
        </option>
        <option value="">All</option>
        <option value="Pets">Pets</option>
        <option value="Food">Food</option>
        <option value="Accessories">Accessories</option>
        <option value="Care Products">Care Products</option>
      </select>

      {/* Card Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mt-12">

        {services.map(service => (
          <motion.div
            key={service._id}
            whileHover={{ scale: 1.05 }}
            className="card bg-base-100 shadow-md rounded-xl overflow-hidden w-full"
          >
            {/* Image */}
            <figure className="w-full h-[250px]">
              <img
                className="w-full h-full object-cover"
                src={service?.image}
                alt={service?.name}
              />
            </figure>

            {/* Card Body */}
            <div className="p-5 flex flex-col gap-3">

              {/* Name + Location */}
              <div className="flex justify-between items-start">
                <h2 className="card-title text-lg font-semibold">
                  {service?.name}
                </h2>
                <p className="text-sm text-gray-600">
                  {service?.location}
                </p>
              </div>

              {/* Price + Category */}
              <div className="flex justify-between text-sm">
                <p className="font-medium">Price: {service?.price}$</p>
                <p className="font-medium">Category: {service?.category}</p>
              </div>

              {/* Button */}
              <Link to={`/details/${service?._id}`}>
                <button className="btn btn-primary w-full mt-2">
                  View Details
                </button>
              </Link>

            </div>
          </motion.div>
        ))}

      </div>

    </div>

  );
};

export default Services;
