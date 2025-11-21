import React, { useEffect, useState } from 'react';

const PopularSection = () => {

    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('./Services.json')
            .then(res => res.json())
            .then(data => setServices(data))
            .catch(error => console.log(error))
    }, [])

    return (
        <div className='mt-8 lg:w-9/12 mx-auto'>
            <div className=''>
                <h3 className='font-bold text-3xl text-center'>Popular Winter Care Services</h3>
            </div>
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-12 place-items-center'>
                {
                services.slice(0,6).map(service =>
                    <div className="card bg-base-100 w-96 shadow-sm">
                        <figure>
                            <img className='w-full h-[300px] object-cover'
                                src={service?.image}
                                alt="Shoes" />
                        </figure>
                        <div className="card-body">
                            <h2 className="card-title">{service?.serviceName}</h2>
                            <div className='flex justify-between'>
                                <p>Price: {service?.price}$</p>
                                <p>Rating: {service?.rating}</p>
                            </div>
                            <div className="card-actions justify-start">
                                <button className="btn btn-primary">View Details</button>
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



