import React from 'react';
import Slider from '../Component/Slider';
import PopularSection from '../Component/PopularSection';
import MeetOurVets from '../Component/MeetOurVets';
import WinterCareTips from '../Component/WinterCareTips';
import ServiceCategory from '../Component/ServiceCategory';
import WhyAdopt from '../Component/WhyAdopt';
import PetHeroes from '../Component/PetHeroes';

const Home = () => {
    return (
        <div>
            <title>Home</title>
            <Slider></Slider>
            <ServiceCategory></ServiceCategory>
            <PopularSection></PopularSection>
            <WhyAdopt></WhyAdopt>
            <PetHeroes></PetHeroes>
            <WinterCareTips></WinterCareTips>
            <MeetOurVets></MeetOurVets>
        </div>
    );
};

export default Home;