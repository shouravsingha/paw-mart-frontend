import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Mousewheel, Keyboard } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import i1 from '../assets/pexels-jagheterjohann-1254140.jpg'
import i2 from '../assets/pexels-anntarazevich-14751278.jpg'
import i3 from '../assets/pexels-wolpido-1472999.jpg'
import i4 from '../assets/ai-generated-8949581.jpg'
import i5 from '../assets/cocker-5996316.jpg'




const Slider = () => {
    return (
        <div className="relative">
            <Swiper
                cssMode={true}
                navigation={true}
                pagination={true}
                mousewheel={true}
                keyboard={true}
                modules={[Navigation, Pagination, Mousewheel, Keyboard]}
                className="mySwiper"
            >
                <SwiperSlide className="relative">
                    <img className='w-full h-[500px] object-cover' src={i1} alt="" />
                    <h1 className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-4xl md:text-5xl font-bold drop-shadow-lg text-center'>
                        Find Your Furry Friend Today!
                    </h1>
                </SwiperSlide>

                <SwiperSlide className="relative">
                    <img className='w-full h-[500px] object-cover' src={i2} alt="" />
                    <h1 className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-4xl md:text-5xl font-bold drop-shadow-lg text-center'>
                        Adopt, Don’t Shop — Give a Pet a Home
                    </h1>
                </SwiperSlide>

                <SwiperSlide className="relative">
                    <img className='w-full h-[500px] object-cover' src={i3} alt="" />
                    <h1 className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-4xl md:text-5xl font-bold drop-shadow-lg text-center'>
                        Because Every Pet Deserves Love and Care
                    </h1>
                </SwiperSlide>

                <SwiperSlide className="relative">
                    <img className='w-full h-[500px] object-cover' src={i4} alt="" />
                    
                </SwiperSlide>

                <SwiperSlide className="relative">
                    <img className='w-full h-[500px] object-cover' src={i5} alt="" />
                    
                </SwiperSlide>
            </Swiper>
        </div>

    );
};

export default Slider;