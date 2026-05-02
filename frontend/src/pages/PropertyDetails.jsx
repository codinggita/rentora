import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Footer from '../components/Footer';
import API_BASE_URL from '../api/config';

const PropertyDetails = () => {
  const { id } = useParams();
  const [property, setProperty] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchProperty = async () => {
      try {
        const response = await fetch(`${API_BASE_URL}/properties/${id}`);
        const data = await response.json();
        
        if (!response.ok) {
          throw new Error(data.message || 'Failed to fetch property details');
        }
        
        setProperty(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProperty();
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="w-12 h-12 border-4 border-brand-green border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  if (error || !property) {
    return (
      <div className="min-h-screen flex items-center justify-center p-10">
        <div className="bg-red-50 text-red-500 p-8 rounded-[2rem] text-center max-w-lg">
          <h2 className="text-2xl font-bold mb-2">Error</h2>
          <p>{error || 'Property not found'}</p>
        </div>
      </div>
    );
  }

  return (
    <>
      <div className="bg-bg-off-white min-h-screen">
        {/* Simple Detail Header */}
        <div className="relative h-[50vh] overflow-hidden">
          <img 
            src={property.images[0]} 
            alt={property.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
          <div className="absolute bottom-0 left-0 w-full p-10 lg:px-20 text-white">
            <div className="max-w-7xl mx-auto space-y-4">
              <div className="flex flex-wrap gap-2">
                {property.tags.map((tag, idx) => (
                  <span key={idx} className="bg-white/20 backdrop-blur-md px-4 py-1 rounded-full text-sm font-bold">
                    {tag}
                  </span>
                ))}
              </div>
              <h1 className="text-5xl font-bold">{property.title}</h1>
              <div className="flex items-center gap-6">
                <span className="text-2xl font-bold text-brand-sand">{property.price}</span>
                <span className="flex items-center gap-1">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="text-yellow-400"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>
                  <span className="font-bold">{property.rating}</span> ({property.reviewsCount} reviews)
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto py-20 px-10 lg:px-20 grid grid-cols-1 lg:grid-cols-3 gap-16">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-12">
            <section>
              <h2 className="text-3xl font-bold text-text-main mb-6">Description</h2>
              <p className="text-gray-600 text-lg leading-relaxed font-medium">
                {property.description}
              </p>
            </section>

            <section className="bg-white p-10 rounded-[3rem] border border-gray-100 shadow-sm">
              <h2 className="text-2xl font-bold text-text-main mb-8">Location</h2>
              <div className="flex items-center gap-4 text-gray-500 mb-6">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
                <span className="text-lg font-bold text-text-main">{property.location}</span>
              </div>
              {/* Map Placeholder */}
              <div className="bg-brand-sand/40 h-64 rounded-3xl flex items-center justify-center border-2 border-dashed border-brand-sand">
                <p className="text-gray-400 font-bold italic">Interactive map integration coming soon...</p>
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            <div className="bg-brand-forest p-10 rounded-[3rem] text-white space-y-8 sticky top-28">
              <h3 className="text-2xl font-bold">Interested?</h3>
              <p className="text-gray-300 font-medium">Contact the owner to schedule a viewing or ask questions about the property.</p>
              
              <div className="pt-4 space-y-4">
                <button className="w-full bg-brand-terracotta text-white py-5 rounded-2xl font-bold text-lg hover:shadow-lg transition-all active:scale-95">
                  Contact Owner
                </button>
                <button className="w-full bg-white/10 border border-white/20 text-white py-5 rounded-2xl font-bold text-lg hover:bg-white/20 transition-all">
                  Save for Later
                </button>
              </div>

              <div className="pt-8 border-t border-white/10">
                <p className="text-sm text-gray-400 mb-2">Listed by</p>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-brand-green/20 rounded-full flex items-center justify-center font-bold text-brand-green">
                    {property.owner.username[0].toUpperCase()}
                  </div>
                  <span className="font-bold text-lg">{property.owner.username}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default PropertyDetails;
