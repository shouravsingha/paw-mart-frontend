import React, { useContext, useEffect, useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { useParams } from 'react-router';
import { AuthContext } from '../Provider/AuthProvider';
import axios from 'axios';


const ServiceDetails = () => {

    const { myId } = useParams();
    const [service, setService] = useState([]);
    const [loading, setLoading] = useState(true)
    const { user } = useContext(AuthContext)

    useEffect(() => {
        fetch(`https://paw-mart-backend-six.vercel.app/listing/${myId}`)
            .then(res => res.json())
            .then(data => {
                setService(data)
                setLoading(false)
            })
            .catch(error => console.log(error));
    }, [myId]);

    const handleOrder = (e) => {
        e.preventDefault();
        const form = e.target;

        const productName = form.productName.value;
        const buyerName = form.buyerName.value;
        const email = form.email.value;
        const quantity = parseInt(form.quantity.value);
        const price = parseInt(form.price.value);
        const address = form.address.value;
        const phone = form.phone.value;
        const additionalNote = form.additionalNote.value;

        const formData = {
            productId: myId,
            productName,
            buyerName,
            email,
            quantity,
            price,
            address,
            phone,
            additionalNote,
            date: new Date()
        };

        axios.post('https://paw-mart-backend-six.vercel.app/orders', formData)
            .then(res => {
                console.log(res);
                toast.success("Your order is successfully placed! 🎉");

                
                document.getElementById("my_modal_3").close();

                // Reset form
                form.reset();
            })
            .catch(err => {
                console.log(err);
                toast.error("Something went wrong!");
            });
    };


    if (loading) {
        return <p>loading</p>
    }


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


                    <Toaster position="top-right" reverseOrder={false} />

                    {/* You can open the modal using document.getElementById('ID').showModal() method */}
                    <button className="btn btn-primary" onClick={() => document.getElementById('my_modal_3').showModal()}>Adopt / Order Now</button>
                    <dialog id="my_modal_3" className="modal">
                        <div className="modal-box">
                            <form method="dialog">
                                {/* if there is a button in form, it will close the modal */}
                                <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                            </form>
                            {/* from daisy ui */}
                            <form onSubmit={handleOrder} className="fieldset bg-base-200 border-base-300 rounded-box w-full border p-4">
                                <legend className="fieldset-legend text-center text-2xl">Order details</legend>

                                <label className="label">Product Name</label>
                                <input readOnly defaultValue={service?.name} type="text" name='productName' className="input w-full" placeholder="Product name" />

                                <label className="label">Buyer Name</label>
                                <input defaultValue={user?.displayName} type="text" name='buyerName' className="input w-full" placeholder="Buyer name" />

                                <label className="label">Your Email</label>
                                <input defaultValue={user?.email} type="email" name='email' className="input w-full" placeholder="Email" />

                                <label className="label">Quantity</label>
                                <input required type="number" name='quantity' className="input w-full" placeholder="Quantity" />

                                <label className="label">Price</label>
                                <input readOnly defaultValue={service?.price} type="number" name='price' className="input w-full" placeholder="Price" />

                                <label className="label">Your Address</label>
                                <input required type="text" name='address' className="input w-full" placeholder="Address" />

                                <label className="label">Phone</label>
                                <input required type="number" name='phone' className="input w-full" placeholder="Phone" />

                                <label className="label">Additional Note</label>
                                <textarea
                                    name="additionalNote"
                                    className="w-full input py-2"
                                    rows={1}
                                    placeholder="Additional Note"
                                    required
                                />
                                <br />
                                <button className='btn btn-primary'>Order</button>

                            </form>
                        </div>
                    </dialog>
                </div>

            </div>
        </div>
    );
};

export default ServiceDetails;
