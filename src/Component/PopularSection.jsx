import React, { useEffect, useState } from 'react';
import { Link } from 'react-router';

const PopularSection = () => {

    const [services, setServices] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('/Services.json')
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
        <div className="mt-8 w-11/12 mx-auto lg:w-9/12">
            <h3 className="font-bold text-3xl text-center">
                Popular Winter Care Services
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
                {
                    services.slice(0, 6).map((service) =>
                        <div
                            key={service.serviceId}
                            className="card w-full bg-base-100 shadow-md rounded-xl"
                        >
                            <figure>
                                <img
                                    src={service?.image}
                                    alt={service?.serviceName}
                                    className="w-full h-64 object-cover rounded-t-xl"
                                />
                            </figure>

                            <div className="card-body">
                                <h2 className="card-title text-lg font-semibold">
                                    {service?.serviceName}
                                </h2>

                                <div className="flex justify-between text-sm text-gray-600 mt-1">
                                    <p>Price: ${service?.price}</p>
                                    <p>Rating: {service?.rating}</p>
                                </div>

                                <div className="card-actions mt-3">
                                    <Link to={`/details/${service.serviceId}`}>
                                        <button className="btn btn-primary w-full">
                                            View Details
                                        </button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    )
                }
            </div>
        </div>
    );
};

export default PopularSection;
