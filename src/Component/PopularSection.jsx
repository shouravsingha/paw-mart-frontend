import React, { useEffect, useState } from 'react';
import { Link } from 'react-router';
import { motion } from "motion/react"

const PopularSection = () => {

    const [services, setServices] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('https://paw-mart-backend-six.vercel.app/listing?limit=6')
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

    if (loading) {
        return <p className="text-center mt-10">Loading...</p>;
    }

    return (
        <div className="mt-15 w-11/12 mx-auto">
            <h3 className="font-bold text-4xl text-center">
                Our Pet Care Products & Services
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
                {
                    services.map((service) =>
                        <motion.div whileHover={{ scale: 1.1 }}
                            
                            onHoverStart={() => console.log('hover started!')}
                            key={service._id}
                            className="card w-full bg-base-100 shadow-2xl rounded-xl"
                        >
                            <div className="px-6 pt-6 overflow-hidden rounded-xl">
                                <img
                                    src={service?.image}
                                    alt={service?.serviceName}
                                    className="w-full h-64 object-cover rounded-t-xl"
                                />
                            </div>

                            <div className="card-body">
                                <div className='flex justify-between'>
                                    <h2 className="card-title text-lg font-semibold">
                                        {service?.name}
                                    </h2>
                                    <h4>Location : {service?.location}</h4>
                                </div>

                                <div className="flex justify-between text-sm text-gray-600">
                                    <p>Price : ${service?.price}</p>
                                    <h4>Category : {service?.category}</h4>
                                </div>

                                <div className="mt-3">
                                    <Link to={`/details/${service._id}`}>
                                        <button className="btn btn-primary block w-full">
                                            View Details
                                        </button>
                                    </Link>
                                </div>
                            </div>
                        </motion.div>
                    )
                }
            </div>
        </div>
    );
};

export default PopularSection;
