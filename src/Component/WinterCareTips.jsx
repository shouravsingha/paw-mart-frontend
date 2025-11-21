import React from 'react';


const winterTips = [
    {
        id: 1,
        title: "Keep Pets Warm Indoors",
        description: "Ensure your pets have a cozy, draft-free place to sleep. Provide blankets or heated beds for extra warmth.",
        image: "https://i.ibb.co.com/VpzV55Nv/42764-200.png"
    },
    {
        id: 2,
        title: "Protect Their Paws",
        description: "Apply pet-safe paw balm to prevent cracking. Avoid walking on salted sidewalks, or rinse paws after walks.",
        image: "https://i.ibb.co.com/tPpc7Wnb/download.png"
    },
    {
        id: 3,
        title: "Adjust Diet & Hydration",
        description: "Pets may need more calories in winter. Ensure fresh water is always available and not frozen.",
        image: "https://i.ibb.co.com/TMh4qw8d/download.png"
    },
    {
        id: 4,
        title: "Regular Grooming",
        description: "Keep your pet’s coat clean and brushed to maintain insulation and prevent matting in colder months.",
        image: "https://i.ibb.co.com/bj6hRD7j/download.png"
    }
];


const WinterCareTips = () => {
    return (
        <div className='mt-10 w-11/12 mx-auto'>
            <h2 className='font-bold text-4xl text-center mb-10'>Winter Care Tips for Pets</h2>
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8'>
                {winterTips.map((tip) => (
                    <div key={tip.id} className="card bg-base-100 shadow-sm border rounded-lg p-5">
                        <figure className='flex justify-center'>
                            <img className='w-20 h-20 object-contain' src={tip?.image} alt={tip?.title} />
                        </figure>
                        <div className="card-body text-center">
                            <h2 className="card-title text-lg">{tip?.title}</h2>
                            <p className='text-sm mt-2'>{tip?.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default WinterCareTips;