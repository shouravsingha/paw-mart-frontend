import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const ServiceDetails = () => {

    const { myId } = useParams();
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('/Services.json')
            .then(res => res.json())
            .then(data => setServices(data))
            .catch(error => console.log(error));
    }, []);
    console.log(services);




    const findResult = services.find(service => service.serviceId == myId);
    console.log(findResult);


    return (
        <div>
            <div className="card card-side bg-base-100 shadow-sm">
                <figure>
                    <img
                        src={findResult?.image}
                        alt="Movie" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">{findResult?.serviceName}</h2>
                    <p>{findResult?.providerName}</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Watch</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceDetails;
