import React, { useContext, useState, useEffect } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import axios from 'axios';
import toast, { Toaster } from 'react-hot-toast';
import Swal from 'sweetalert2';

const AddListing = () => {
    const { user } = useContext(AuthContext);


    const [category, setCategory] = useState("");
    const [price, setPrice] = useState("");


    useEffect(() => {
        if (category === "Pets") {
            setPrice(0);
        }
    }, [category]);

    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;

        const formData = {
            name: form.name.value,
            category: category,
            price: parseInt(price),
            location: form.location.value,
            description: form.description.value,
            image: form.image.value,
            date: form.date.value,
            email: form.email.value,
        };

        axios.post('http://localhost:3000/listing', formData)
            .then(res => {
                console.log(res);
                Swal.fire({
                    title: "Listing Successfully!",
                    icon: "success",
                    draggable: true
                });
                form.reset();


                setCategory("");
                setPrice("");
            })
            .catch(err => {
                console.log(err);
                toast.error("Something went wrong!");
            });
    };

    return (
        <div className="max-w-xl mx-auto bg-white p-6 rounded-xl shadow-md">
            <Toaster position="top-right" reverseOrder={false} />

            <h1 className="text-2xl font-bold mb-4">Add Product / Pet</h1>

            <form onSubmit={handleSubmit} className="space-y-4">


                <div>
                    <label className="block mb-1 font-medium">Product / Pet Name</label>
                    <input
                        type="text"
                        name="name"
                        className="w-full border rounded-lg px-3 py-2 focus:ring"
                        placeholder="Enter name"
                        required
                    />
                </div>

                {/* Category */}
                <div>
                    <label className="block mb-1 font-medium">Category</label>
                    <select
                        name="category"
                        className="w-full border rounded-lg px-3 py-2"
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}
                        required
                    >
                        <option value="">Select Category</option>
                        <option value="Pets">Pets</option>
                        <option value="Food">Food</option>
                        <option value="Accessories">Accessories</option>
                        <option value="Care Products">Care Products</option>
                    </select>
                </div>

                {/* Price */}
                <div>
                    <label className="block mb-1 font-medium">Price</label>
                    <input
                        type="number"
                        name="price"
                        className="w-full border rounded-lg px-3 py-2"
                        value={price}
                        onChange={(e) => setPrice(e.target.value)}
                        disabled={category === "Pets"}   // 🔥 Disable when pets
                        required
                    />
                </div>

                {/* Location */}
                <div>
                    <label className="block mb-1 font-medium">Location</label>
                    <input
                        type="text"
                        name="location"
                        className="w-full border rounded-lg px-3 py-2"
                        placeholder="Enter location"
                        required
                    />
                </div>

                {/* Description */}
                <div>
                    <label className="block mb-1 font-medium">Description</label>
                    <textarea
                        name="description"
                        className="w-full border rounded-lg px-3 py-2"
                        rows={3}
                        placeholder="Enter details"
                        required
                    />
                </div>

                {/* Image URL */}
                <div>
                    <label className="block mb-1 font-medium">Image URL</label>
                    <input
                        type="text"
                        name="image"
                        className="w-full border rounded-lg px-3 py-2"
                        placeholder="https://example.com/pet.jpg"
                        required
                    />
                </div>

                {/* Date */}
                <div>
                    <label className="block mb-1 font-medium">Pick Up Date</label>
                    <input
                        type="date"
                        name="date"
                        className="w-full border rounded-lg px-3 py-2"
                        required
                    />
                </div>

                {/* Email */}
                <div>
                    <label className="block mb-1 font-medium">Email</label>
                    <input
                        type="email"
                        name="email"
                        value={user?.email}
                        readOnly
                        className="w-full border rounded-lg px-3 py-2 bg-gray-100 text-gray-600"
                    />
                </div>


                <button
                    type="submit"
                    className="w-full btn btn-primary text-white py-2 rounded-lg"
                >
                    Submit
                </button>
            </form>
        </div>
    );
};

export default AddListing;
