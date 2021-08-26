import React from 'react';
import AboutUs from './Components/AboutUs/AboutUs';
import Contact from './Components/Contact/Contact';
import Header from './Components/Header/Header';
import HowItWork from './Components/HowItWork/HowItWork';
import Services from './Components/Services/Services';
import './index.scss'

const Home = () => {
    return (
        <div>
            <Header />
            <HowItWork />
             <AboutUs />
            <Services />
            <Contact /> 
           
        </div>
    );
};

export default Home;