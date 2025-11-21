import React from 'react';
import Slider from '../Component/Slider';
import PopularSection from '../Component/PopularSection';
import MeetOurVets from '../Component/MeetOurVets';
import WinterCareTips from '../Component/WinterCareTips';

const Home = () => {
    return (
        <div>
            <title>Home</title>
            <Slider></Slider>
            <PopularSection></PopularSection>
            <WinterCareTips></WinterCareTips>
            <MeetOurVets></MeetOurVets>
        </div>
    );
};

export default Home;