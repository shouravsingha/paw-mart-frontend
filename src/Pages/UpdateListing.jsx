import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import { useNavigate, useParams } from 'react-router';
import axios from 'axios';

const UpdateListing = () => {
    const { user } = useContext(AuthContext);
    const { id } = useParams();
    const [updateListing, setUpdateListing] = useState();
    const [category, setCategory] = useState("");
    const navigation = useNavigate();

    useEffect(() => {
        axios.get(`http://localhost:3000/listing/${id}`)
            .then(res => {
                setUpdateListing(res.data);
                setCategory(res.data.category);
            });
    }, [id]);

    const handleSubmit = (e) => {
        e.preventDefault();

        const form = e.target;
        const name = form.name.value;
        const category = form.category.value;
        const price = parseInt(form.price.value);
        const location = form.location.value;
        const description = form.description.value;
        const image = form.image.value;
        const date = form.date.value;
        const email = form.email.value;

        const formData = {
            name,
            category,
            price,
            location,
            description,
            image,
            date,
            email,
            createdAt: updateListing?.createdAt
        };

        axios.put(`http://localhost:3000/update/${id}`, formData)
            .then(res => {
                navigation('/mylisting');
            })
            .catch(err => console.log(err));
    };

    return (
        <div className="max-w-xl mx-auto bg-base-100 p-6 rounded-xl shadow-md mt-16 text-base-content border-1">
            <h1 className="text-2xl font-bold mb-4">Update Listing</h1>

            <form onSubmit={handleSubmit} className="space-y-4">

                {/* Product Name */}
                <div>
                    <label className="block mb-1 font-medium">Product / Pet Name</label>
                    <input
                        defaultValue={updateListing?.name}
                        type="text"
                        name="name"
                        className="w-full border border-base-content/20 rounded-lg px-3 py-2 bg-base-200 focus:outline-none"
                        placeholder="Enter name"
                    />
                </div>

                {/* Category */}
                <div>
                    <label className="block mb-1 font-medium">Category</label>
                    <select
                        value={category}
                        name="category"
                        onChange={(e) => setCategory(e.target.value)}
                        className="w-full border border-base-content/20 rounded-lg px-3 py-2 bg-base-200"
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
                        defaultValue={updateListing?.price}
                        type="number"
                        name="price"
                        className="w-full border border-base-content/20 rounded-lg px-3 py-2 bg-base-200"
                    />
                </div>

                {/* Location */}
                <div>
                    <label className="block mb-1 font-medium">Location</label>
                    <input
                        defaultValue={updateListing?.location}
                        type="text"
                        name="location"
                        className="w-full border border-base-content/20 rounded-lg px-3 py-2 bg-base-200"
                        placeholder="Enter location"
                    />
                </div>

                {/* Description */}
                <div>
                    <label className="block mb-1 font-medium">Description</label>
                    <textarea
                        defaultValue={updateListing?.description}
                        name="description"
                        rows={3}
                        className="w-full border border-base-content/20 rounded-lg px-3 py-2 bg-base-200"
                        placeholder="Enter details"
                    />
                </div>

                {/* Image URL */}
                <div>
                    <label className="block mb-1 font-medium">Image URL</label>
                    <input
                        defaultValue={updateListing?.image}
                        type="text"
                        name="image"
                        className="w-full border border-base-content/20 rounded-lg px-3 py-2 bg-base-200"
                        placeholder="https://example.com/pet.jpg"
                    />
                </div>

                {/* Pick Up Date */}
                <div>
                    <label className="block mb-1 font-medium">Pick Up Date</label>
                    <input
                        defaultValue={updateListing?.date}
                        type="date"
                        name="date"
                        className="w-full border border-base-content/20 rounded-lg px-3 py-2 bg-base-200"
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
                        className="w-full border border-base-content/20 rounded-lg px-3 py-2 bg-base-300 text-base-content/70"
                    />
                </div>

                {/* Submit Button */}
                <button
                    type="submit"
                    className="w-full btn btn-primary"
                >
                    Update
                </button>
            </form>
        </div>
    );
};

export default UpdateListing;
