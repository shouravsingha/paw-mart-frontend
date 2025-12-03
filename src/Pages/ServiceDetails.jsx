import React, { useEffect, useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { FaLocationArrow, FaStar } from 'react-icons/fa';
import { useParams } from 'react-router';


const ServiceDetails = () => {

    const { myId } = useParams();
    const [service, setService] = useState([]);
    const [loading, setLoading] = useState(true)

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
        fetch(`http://localhost:3000/listing/${myId}`)
            .then(res => res.json())
            .then(data => {
                setService(data)
                setLoading(false)
            })
            .catch(error => console.log(error));
    }, [myId]);


    return (
        <div className="w-11/12 md:w-9/12 lg:w-7/12 mx-auto mt-12 mb-20">
            <div className="bg-base-100 shadow-md rounded-xl p-5 md:p-8 flex flex-col md:flex-row gap-8 items-start">

                {/* Image Section */}
                <figure className="w-full md:w-1/2">
                    <img
                        src={service?.image}
                        alt="service"
                        className="w-full h-64 md:h-full object-cover rounded-xl"
                    />
                </figure>

                {/* Details Section */}
                <div className="flex flex-col gap-4 w-full md:w-1/2">
                    <h2 className="text-2xl md:text-3xl font-bold">
                        {service?.name}
                    </h2>

                    <p className="text-gray-600 font-medium">
                        Owner’s Email : {service?.email}
                    </p>

                    <p className="text-gray-700 leading-relaxed">
                        {service?.description}
                    </p>

                    <p className="font-medium">
                        Category:{" "}
                        <span className="font-bold">
                            {service?.category}
                        </span>
                    </p>

                    <div className="flex justify-between text-lg font-semibold">
                        <p>Price: ${service?.price}</p>
                        <p className='flex items-center gap-0.5'>
                            Location :   {service?.location}
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
