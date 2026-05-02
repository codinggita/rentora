import React, { useState, useEffect } from 'react';
import PropertyCard from './PropertyCard';
import { Link } from 'react-router-dom';
import API_BASE_URL from '../api/config';

const FeaturedProperties = () => {
  const [properties, setProperties] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProperties = async () => {
      try {
        const response = await fetch(`${API_BASE_URL}/properties`);
        const data = await response.json();
        if (response.ok) {
          // Just take the first 4 for featured
          setProperties(data.slice(0, 4));
        }
      } catch (err) {
        console.error('Failed to fetch featured properties:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchProperties();
  }, []);

  return (
    <section className="py-24 bg-white px-10 lg:px-20">
      <div className="max-w-[1440px] mx-auto">
        <div className="flex justify-between items-end mb-12">
          <div className="space-y-2">
            <h2 className="text-4xl font-bold text-text-main">Featured Properties</h2>
            <p className="text-gray-500">Highly rated homes in your area</p>
          </div>
          <Link to="/explore" className="text-brand-green font-bold flex items-center gap-1 hover:underline">
            View all 
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
          </Link>
        </div>

        {loading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[1, 2, 3, 4].map(i => (
              <div key={i} className="bg-gray-100 h-[400px] rounded-3xl animate-pulse"></div>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {properties.map((prop) => (
              <PropertyCard 
                key={prop._id} 
                {...prop} 
                image={prop.images[0]}
                reviews={prop.reviewsCount}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default FeaturedProperties;
