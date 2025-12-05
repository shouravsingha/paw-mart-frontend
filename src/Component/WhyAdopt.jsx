import React from 'react';
import { FaPaw, FaHeart, FaHandHoldingHeart } from "react-icons/fa";

const WhyAdopt = () => {
    return (
        <div>
            <div className="w-11/12 lg:w-10/12 mx-auto mt-24">
                <h2 className="text-4xl font-bold text-center mb-10">
                    Why Adopt from <span className="text-primary">PawMart?</span>
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

                    <div className="p-8 bg-base-200 rounded-xl shadow-md text-center">
                        <FaPaw className="text-5xl mx-auto mb-5 text-primary" />
                        <h3 className="text-xl font-bold mb-3">Save a Life</h3>
                        <p className="text-gray-600">
                            Every adoption gives a pet a second chance at a happy life.
                        </p>
                    </div>

                    <div className="p-8 bg-base-200 rounded-xl shadow-md text-center">
                        <FaHeart className="text-5xl mx-auto mb-5 text-primary" />
                        <h3 className="text-xl font-bold mb-3">Rescue, Don’t Shop</h3>
                        <p className="text-gray-600">
                            Help reduce homeless animals by providing love & care.
                        </p>
                    </div>

                    <div className="p-8 bg-base-200 rounded-xl shadow-md text-center">
                        <FaHandHoldingHeart className="text-5xl mx-auto mb-5 text-primary" />
                        <h3 className="text-xl font-bold mb-3">Trusted & Safe</h3>
                        <p className="text-gray-600">
                            PawMart ensures every pet is healthy and ready for a new home.
                        </p>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default WhyAdopt;