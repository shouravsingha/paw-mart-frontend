import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Mousewheel, Keyboard } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import i1 from '../assets/ai-generated-8949581.jpg'
import i2 from '../assets/cocker-5996316.jpg'
import i3 from '../assets/dog-7514202.jpg'



const Slider = () => {
    return (
        <div>
            <Swiper
                cssMode={true}
                navigation={true}
                pagination={true}
                mousewheel={true}
                keyboard={true}
                modules={[Navigation, Pagination, Mousewheel, Keyboard]}
                className="mySwiper"
            >
                <SwiperSlide><img className='w-full h-150 object-cover' src={i1} alt="" /></SwiperSlide>
                <SwiperSlide><img className='w-full h-150 object-cover' src={i2} alt="" /></SwiperSlide>
                <SwiperSlide><img className='w-full h-150 object-cover' src={i3} alt="" /></SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Slider;