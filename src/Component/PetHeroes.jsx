import React from "react";

const heroData = [
    {
        id: 1,
        name: "Ayaan Rahman",
        image: "https://i.ibb.co.com/20MjZ077/download.jpg",
        desc: "Adopted a rescued puppy and provided a loving new home.",
    },
    {
        id: 2,
        name: "Jannat Akter",
        image: "https://i.ibb.co.com/v6vbyJtk/download.jpg",
        desc: "Helps foster abandoned pets until they find families.",
    },
    {
        id: 3,
        name: "Rifat Hasan",
        image: "https://i.ibb.co.com/yms5kZqR/images.jpg",
        desc: "Actively involved in animal rescue and care programs.",
    },
];

const PetHeroes = () => {
    return (
        <div className="w-11/12 lg:w-10/12 mx-auto my-24">
            <h2 className="text-4xl font-bold text-center mb-12">
                Meet Our <span className="text-primary">Pet Heroes</span>
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">

                {heroData.map(hero => (
                    <div
                        key={hero.id}
                        className="card bg-base-200 shadow-md rounded-xl p-6 text-center"
                    >
                        <img
                            src={hero.image}
                            alt={hero.name}
                            className="w-32 h-32 rounded-full mx-auto object-cover mb-5"
                        />

                        <h3 className="text-xl font-bold">{hero.name}</h3>
                        <p className="text-gray-600 mt-2">{hero.desc}</p>
                    </div>
                ))}

            </div>
        </div>
    );
};

export default PetHeroes;
