import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import FeaturedProperties from '../components/FeaturedProperties';
import HowItWorks from '../components/HowItWorks';
import TrustSection from '../components/TrustSection';
import FinalCTA from '../components/FinalCTA';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <div className="flex flex-col">
      <Hero />
      <FeaturedProperties />
      <HowItWorks />
      <TrustSection />
      {/* <FinalCTA /> */}
      <Footer />
    </div>
  );
};

export default Home;
