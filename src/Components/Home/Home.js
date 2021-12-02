import React from 'react';
import About from '../About/About';
import Contact from '../Contact/Contact';
import Features from '../Features/Features';
import Footer from '../Footer/Footer';
import HeaderBanner from '../HeaderBanner/HeaderBanner';
import Navigation from '../Navigation/Navigation';
import Protfolio from '../Protfolio/Protfolio';

const Home = () => {
    return (
        <div style={{background : '#212428'}}>
            <Navigation></Navigation>
            <HeaderBanner></HeaderBanner>
            <Features></Features>
            <About></About>
            <Protfolio></Protfolio>
            <Contact></Contact>
            <Footer></Footer>
        </div>
    );
};

export default Home;