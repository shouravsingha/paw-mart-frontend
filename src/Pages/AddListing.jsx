import React, { useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import axios from 'axios';

const AddListing = () => {

    const { user } = useContext(AuthContext)

    const handleSubmit = (e) => {
        e.preventDefault()
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
        }
        console.log(formData);
        axios.post('http://localhost:3000/listing', formData)
        .then(res =>{
            console.log(res);
            
        })
        
    }
    return (
        <div className="max-w-xl mx-auto bg-white p-6 rounded-xl shadow-md">
            <h1 className="text-2xl font-bold mb-4">Add Product / Pet</h1>

            <form onSubmit={handleSubmit} className="space-y-4">

                {/* Product / Pet Name */}
                <div>
                    <label className="block mb-1 font-medium">Product / Pet Name</label>
                    <input
                        type="text"
                        name="name"
                        className="w-full border rounded-lg px-3 py-2 focus:ring"
                        placeholder="Enter name"
                    />
                </div>

                {/* Category */}
                <div>
                    <label className="block mb-1 font-medium">Category</label>
                    <select
                        name="category"
                        className="w-full border rounded-lg px-3 py-2"
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
                        className='w-full border rounded-lg px-3 py-2'
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
                    />
                </div>

                {/* Pick-up Date */}
                <div>
                    <label className="block mb-1 font-medium">Pick Up Date</label>
                    <input
                        type="date"
                        name="date"

                        className="w-full border rounded-lg px-3 py-2"
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

                {/* Submit Button */}
                <button
                    type="submit"
                    className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700"
                >
                    Submit
                </button>
            </form>
        </div>
    );
};

export default AddListing;