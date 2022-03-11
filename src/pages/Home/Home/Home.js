import React from 'react';
import ContactUs from '../../ContactUs/ContactUs';
import CarList from '../CarList/CarList';
import DiscoverCar from '../CarList/DiscoverCar/DiscoverCar';
import HomeBanner from '../HomeBanner/HomeBanner';

const Home = () => {
    return (
        <div>
            <HomeBanner></HomeBanner>
            <CarList></CarList>
            <DiscoverCar></DiscoverCar>
            <ContactUs></ContactUs>
        </div>
    );
};

export default Home;