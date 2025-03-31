import React from 'react';
import '../../src/index.css';
import FormCard from './FormCard';
import HeroSection from './herosection';
import Services from './sevices'; // Ensure this is correctly imported
import AcList from './aclist';
import CustomerReviews from './customerReviews';
import SellCard from './sellcard';
import Footer from '../common components/footer';
import Navbar from '../common components/navbar';

const Main = () => {
    return (
        <>
            <Navbar />
            <HeroSection />
            <FormCard />
            <h1 className="service-heading">
                Our
                <span className='sub-heading'> Services</span>
            </h1>
            <div className='services-block'>
                <Services />
                <Services />
                <Services />
                <Services />
            </div>
            <h1 className="service-heading">
                Old Listed
                <span className='sub-heading'> AC Products</span>
            </h1>
            <div className='aclist-block'>
                <AcList />
                <AcList />
                <AcList />
                <AcList />
                <AcList />
                <AcList />
            </div>
            <CustomerReviews />
            <SellCard />
            <Footer />
        </>
    );
};

export default Main;