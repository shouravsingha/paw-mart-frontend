import axios from "axios";
import React, { useState } from "react";

const CreateDonation = () => {
    const [showHome, setShowHome] = useState();

    const handleChange = (e) => {
        e.preventDefault()
        const form = e.target;
        const requesterName = form.requesterName.value
        const requesterEmail = form.requesterEmail.value
        const bloodGroup = form.bloodGroup.value
        const district = form.district.value
        const upazila = form.upazila.value
        const hospitalName = form.hospitalName.value
        const fullAddress = form.fullAddress.value
        const donationDate = form.donationDate.value
        const donationTime = form.donationTime.value
        const patientName = form.patientName.value
        const reason = form.reason.value

        const formData = {
            requesterName,
            requesterEmail,
            bloodGroup,
            district,
            upazila,
            hospitalName,
            fullAddress,
            donationDate,
            donationTime,
            patientName,
            reason,
            showHome
        }
        console.log(formData);
        axios.post('http://localhost:5000/donations', formData)
        .then(res => {
            console.log(res.data);
        })
        .catch(err => console.log(err));
        

    };

    return (
        <div className="min-h-screen bg-slate-50 sm:pl-20 pl-20 px-4 sm:px-6 py-6">
            {/* Main Card */}
            <div className="max-w-5xl mx-auto bg-white rounded-xl shadow p-4 sm:p-6">
                <h2 className="text-xl sm:text-2xl font-semibold mb-6">
                    Create Blood Donation Request
                </h2>

                <form onSubmit={handleChange} className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5">
                    <div>
                        <label className="label text-sm">Requester Name</label>
                        <input
                            type="text"
                            name="requesterName"
                            placeholder="requester name"
                            className="input input-bordered w-full"
                        />
                    </div>

                    <div>
                        <label className="label text-sm">Requester Email</label>
                        <input
                            type="email"
                            name="requesterEmail"
                            placeholder="requester email"
                            className="input input-bordered w-full"
                        />
                    </div>

                    <div>
                        <label className="label text-sm">Blood Group</label>
                        <select
                            name="bloodGroup"

                            placeholder="blood group"
                            className="select select-bordered w-full"
                        >
                            <option value="">Select Blood Group</option>
                            <option>A+</option>
                            <option>A-</option>
                            <option>B+</option>
                            <option>B-</option>
                            <option>AB+</option>
                            <option>AB-</option>
                            <option>O+</option>
                            <option>O-</option>
                        </select>
                    </div>

                    <div>
                        <label className="label text-sm">District</label>
                        <input
                            type="text"
                            name="district"
                            placeholder="district"
                            className="input input-bordered w-full"
                        />
                    </div>

                    <div>
                        <label className="label text-sm">Upazila</label>
                        <input
                            type="text"
                            name="upazila"
                            placeholder='upazila'
                            className="input input-bordered w-full"
                        />
                    </div>

                    <div>
                        <label className="label text-sm">Hospital Name</label>
                        <input
                            type="text"
                            name="hospitalName"
                            placeholder="hospital name"
                            className="input input-bordered w-full"
                        />
                    </div>

                    <div className="md:col-span-2">
                        <label className="label text-sm">Full Address</label>
                        <textarea
                            name="fullAddress"
                            placeholder="full address"
                            className="textarea textarea-bordered w-full"
                        />
                    </div>

                    <div>
                        <label className="label text-sm">Donation Date</label>
                        <input
                            type="date"
                            name="donationDate"
                            placeholder="donation date"
                            className="input input-bordered w-full"
                        />
                    </div>

                    <div>
                        <label className="label text-sm">Donation Time</label>
                        <input
                            type="time"
                            name="donationTime"
                            placeholder="donation time"
                            className="input input-bordered w-full"
                        />
                    </div>

                    <div>
                        <label className="label text-sm">Patient Name</label>
                        <input
                            type="text"
                            name="patientName"
                            placeholder="patient name"
                            className="input input-bordered w-full"
                        />
                    </div>

                    <div>
                        <label className="label text-sm">Reason</label>
                        <input
                            type="text"
                            name="reason"
                            placeholder="reason"
                            className="input input-bordered w-full"
                        />
                    </div>

                    <div className="md:col-span-2">
                        <button className="btn btn-primary w-full">
                            Create Donation Request
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default CreateDonation;
