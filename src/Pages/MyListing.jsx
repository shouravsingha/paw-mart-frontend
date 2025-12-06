import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import { Link } from 'react-router';
import axios from 'axios';
import Swal from 'sweetalert2';

const MyListing = () => {
    const [mylisting, setMyListing] = useState([]);
    const [loading, setLoading] = useState(true);
    const { user } = useContext(AuthContext)

    useEffect(() => {
        fetch(`https://paw-mart-backend-six.vercel.app/mylisting?email=${user?.email}`)
            .then(res => res.json())
            .then(data => {
                setMyListing(data);
                setLoading(false);
            })
            .catch(error => {
                console.log(error);
                setLoading(false);
            });
    }, [user?.email]);

    console.log(mylisting);

    const hanndleDelete = (id) => {

        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                axios.delete(`https://paw-mart-backend-six.vercel.app/delete/${id}`)
                    .then(res => {
                        console.log(res.data);
                        if (res.data.deletedCount == 1) {
                            const filterData = mylisting.filter(listing => listing._id != id)
                            console.log(filterData);
                            setMyListing(filterData)
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });
                        }

                    })
                    .catch(err => {
                        console.log(err);

                    })

            }
        });

    }

    return (
        <div>
            <div className="mt-10 w-11/12 mx-auto">

                {/* Mobile View (Card Layout) */}
                <div className="lg:hidden flex flex-col gap-4">
                    {mylisting?.map(listing => (
                        <div key={listing._id} className="p-4 border rounded-xl shadow-sm bg-white">

                            <div className="flex gap-3">
                                <img src={listing?.image} className="w-20 h-20 object-cover rounded-md" />
                                <div>
                                    <h3 className="font-bold text-lg">{listing?.name}</h3>
                                    <p className="text-sm text-gray-500">{listing?.location}</p>
                                </div>
                            </div>

                            <div className="mt-2">
                                <p className="font-medium">Date: {listing?.date}</p>
                                <p className="text-sm text-gray-700">Price: {listing?.price}$</p>
                                <p className="text-sm font-semibold">Category: {listing?.category}</p>
                            </div>

                            <div className="flex gap-3 mt-4">
                                <button
                                    onClick={() => hanndleDelete(listing?._id)}
                                    className="btn btn-secondary btn-sm w-1/2"
                                >
                                    Delete
                                </button>

                                <Link
                                    className="btn btn-primary btn-sm w-1/2"
                                    to={`/updatelisting/${listing._id}`}
                                >
                                    Edit
                                </Link>
                            </div>

                        </div>
                    ))}
                </div>

                {/* Desktop View (Table Layout) */}
                <div className="hidden lg:block overflow-x-auto">
                    <table className="table w-full">

                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Listing Date</th>
                                <th>Category</th>
                                <th>Action</th>
                            </tr>
                        </thead>

                        <tbody>
                            {mylisting?.map(listing => (
                                <tr key={listing._id}>

                                    <td>
                                        <div className="flex items-center gap-3">
                                            <div className="avatar">
                                                <div className="mask mask-squircle h-14 w-14">
                                                    <img src={listing?.image} alt="product image" />
                                                </div>
                                            </div>
                                            <div>
                                                <div className="font-bold">{listing?.name}</div>
                                                <div className="text-sm opacity-50">{listing?.location}</div>
                                            </div>
                                        </div>
                                    </td>

                                    <td>
                                        <h3 className="font-medium">{listing?.date}</h3>
                                        <span className="badge badge-ghost badge-sm mt-1">
                                            Price : {listing?.price}$
                                        </span>
                                    </td>

                                    <td>{listing?.category}</td>

                                    <td>
                                        <div className="flex gap-2">
                                            <button
                                                onClick={() => hanndleDelete(listing?._id)}
                                                className="btn btn-secondary btn-xs"
                                            >
                                                Delete
                                            </button>
                                            <Link to={`/updatelisting/${listing._id}`}>
                                                <button className="btn btn-primary btn-xs">Edit</button>
                                            </Link>
                                        </div>
                                    </td>

                                </tr>
                            ))}
                        </tbody>

                    </table>
                </div>

            </div>

        </div>
    );
};

export default MyListing;