import React from 'react';
import { motion } from "motion/react"


const doctors = [
    {
        id: 1,
        name: "Dr. Scarlett Pine",
        specialization: "Pet Allergies & Dry Skin",
        experience: "5 Year Exp",
        image: "https://i.ibb.co.com/k2Gz41Ky/veterinary-clinic-female-doctor-portrait-at-the-animal-hospital-holding-cute-sick-cat-free-photo.jpg"
    },
    {
        id: 2,
        name: "Dr. Liam Johnson",
        specialization: "Pet Nutrition & Diet",
        experience: "7 Year Exp",
        image: "https://i.ibb.co.com/zVRSFLcR/premium-photo-1661962785160-458b1a95750b.jpg"
    },
    {
        id: 3,
        name: "Dr. Olivia Smith",
        specialization: "Pet Dental Care",
        experience: "6 Year Exp",
        image: "https://i.ibb.co.com/nq71PYYc/veterinary-clinic-female-doctor-portrait-at-the-animal-hospital-holding-cute-sick-cat-free-photo.jpg"
    }
];

const MeetOurVets = () => {
    return (
        <div className='mt-15 w-11/12 mx-auto mb-30'>
            <div>
                <h2 className='font-bold text-4xl text-center mb-15'>Meet Our Expert Vets</h2>
            </div>
            <div className='mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8'>
                {doctors.map((vet) => (
                    <motion.div whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        onHoverStart={() => console.log('hover started!')}
                        key={vet.id} className="card bg-base-100 shadow-2xl">
                        <figure>
                            <img
                                className='h-60 w-full object-cover'
                                src={vet?.image}
                                alt={vet?.name}
                            />
                        </figure>
                        <div className="card-body">
                            <h2 className="card-title">{vet?.name}</h2>
                            <p>{vet?.specialization}</p>
                            <p>{vet?.experience}</p>
                            <div className="card-actions justify-end mt-2">
                                <button className="btn btn-primary w-full">Book Appointment</button>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default MeetOurVets;