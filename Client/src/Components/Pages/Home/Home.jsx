import React from 'react';
import HeroSection from './HeroSection';
import OurService from './OurService';
import ServiceCenters from './ServiceCenters';
import Testimonials from './Testimonials';
import CallToAction from './CallToAction';
import Footer from '../../Footer';



function Home() {
    return (
        <div>
           <HeroSection />
           <OurService/>
           <ServiceCenters/>
           <Testimonials/>
           <CallToAction/>
           <Footer />
        </div>
    )
}

export default Home
