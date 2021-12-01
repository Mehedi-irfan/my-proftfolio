import React from 'react';
import HeaderBanner from '../HeaderBanner/HeaderBanner';
import Navigation from '../Navigation/Navigation';

const Home = () => {
    return (
        <div style={{background : '#212428'}}>
            <Navigation></Navigation>
            <HeaderBanner></HeaderBanner>
        </div>
    );
};

export default Home;