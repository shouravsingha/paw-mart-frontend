import React, { useEffect, useState } from 'react';
import { Link } from 'react-router';
import { motion } from "motion/react"

const Services = () => {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('./Services.json')
      .then(res => res.json())
      .then(data => {
        setServices(data);
        setLoading(false);
      })
      .catch(error => {
        console.log(error);
        setLoading(false);
      });
  }, []);

  // Show spinner while loading
  if (loading) {
    return (
      <div className="flex justify-center items-center h-96">
        <span className="loading loading-spinner loading-md"></span>
      </div>
    );
  }

 
  return (
    <div className='lg:w-10/12 mx-auto mb-30'>
      <h2 className='text-4xl font-bold mt-10 text-center '>Our All Services</h2>
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mt-12 place-items-center'>
        {services.map(service => (
          <motion.div whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onHoverStart={() => console.log('hover started!')} className="card bg-base-100 w-84 shadow-sm">
            <figure>
              <img className='w-full h-[300px] object-cover'
                src={service?.image}
                alt={service?.serviceName} />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{service?.serviceName}</h2>
              <div className='flex justify-between'>
                <p>Price: {service?.price}$</p>
                <p>Rating: {service?.rating}</p>
              </div>
              <div className="card-actions justify-start">
                <Link to={`/details/${service?.serviceId}`}><button className="btn btn-primary">View Details</button></Link>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Services;
