import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const PropertyDetails = () => {
  return (
    <>
      <div className="py-20 px-10 lg:px-20 min-h-[60vh]">
        <h1 className="text-4xl font-bold text-text-main">Property Details</h1>
        <p className="text-gray-500 mt-4 text-lg italic">Placeholder for detailed listing information, images, and reviews...</p>
      </div>
      <Footer />
    </>
  );
};

export default PropertyDetails;
