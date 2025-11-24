import React, { useEffect, useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { FaStar } from 'react-icons/fa';
import { useParams } from 'react-router';

const ServiceDetails = () => {

    const { myId } = useParams();
    const [services, setServices] = useState([]);

    const [isOpen, setIsOpen] = useState(false)

    const [formData, setFormData] = useState({ name: '', email: '' });

    const handleOpenForm = () => {
        setIsOpen(!isOpen)
    }

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        toast.success('Booking successful!');
        setFormData({ name: '', email: '' });
    };

    useEffect(() => {
        fetch('/Services.json')
            .then(res => res.json())
            .then(data => setServices(data))
            .catch(error => console.log(error));
    }, []);

    const findResult = services.find(service => service.serviceId == myId);

    return (
        <div className="w-11/12 md:w-9/12 lg:w-7/12 mx-auto mt-12 mb-20">
            <div className="bg-base-100 shadow-md rounded-xl p-5 md:p-8 flex flex-col md:flex-row gap-8 items-start">

                {/* Image Section */}
                <figure className="w-full md:w-1/2">
                    <img
                        src={findResult?.image}
                        alt="service"
                        className="w-full h-64 md:h-full object-cover rounded-xl"
                    />
                </figure>

                {/* Details Section */}
                <div className="flex flex-col gap-4 w-full md:w-1/2">
                    <h2 className="text-2xl md:text-3xl font-bold">
                        {findResult?.serviceName}
                    </h2>

                    <p className="text-gray-600 font-medium">
                        Provider: {findResult?.providerName}
                    </p>

                    <p className="text-gray-700 leading-relaxed">
                        {findResult?.description}
                    </p>

                    <p className="font-medium">
                        Available Slots:{" "}
                        <span className="font-bold">
                            {findResult?.slotsAvailable}
                        </span>
                    </p>

                    <div className="flex justify-between text-lg font-semibold">
                        <p>Price: ${findResult?.price}</p>
                        <p className='flex items-center gap-0.5'>
                            Rating:  <FaStar /> {findResult?.rating}
                        </p>
                    </div>

                    <button onClick={handleOpenForm} className="btn btn-primary w-full mt-4">
                        Book Service
                    </button>
                    <Toaster position="top-right" reverseOrder={false} />

                    {
                        isOpen && (
                            <form onSubmit={handleSubmit} className="fieldset">
                                <label className="label">Name</label>
                                <input
                                    name='name'
                                    type="text"
                                    className="input"
                                    placeholder="Name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                />

                                <label className="label">Email</label>
                                <input
                                    name='email'
                                    type="email"
                                    className="input"
                                    placeholder="Email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                />

                                <button type='submit' className="btn btn-neutral mt-4">Book Now</button>
                            </form>
                        )
                    }
                </div>

            </div>
        </div>
    );
};

export default ServiceDetails;
