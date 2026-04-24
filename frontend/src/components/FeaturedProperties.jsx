import React from 'react';
import PropertyCard from './PropertyCard';

const properties = [
  {
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80',
    title: 'Modern Downtown Loft',
    price: '$2,400/mo',
    location: 'Downtown, NYC',
    rating: '4.8',
    reviews: '128',
    tags: ['Safe', 'Quiet', 'Pet-friendly']
  },
  {
    image: 'https://images.unsplash.com/photo-1493809842364-78817add7ffb?auto=format&fit=crop&w=800&q=80',
    title: 'Cozy Studio Apartment',
    price: '$1,800/mo',
    location: 'Brooklyn, NYC',
    rating: '4.6',
    reviews: '89',
    tags: ['Renovated', 'Natural Light']
  },
  {
    image: 'https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=800&q=80',
    title: 'Spacious 2BR with View',
    price: '$3,200/mo',
    location: 'Manhattan, NYC',
    rating: '4.9',
    reviews: '156',
    tags: ['City View', 'Modern']
  },
  {
    image: 'https://images.unsplash.com/photo-1499955085172-a104c9463ece?auto=format&fit=crop&w=800&q=80',
    title: 'Bright Corner Unit',
    price: '$2,100/mo',
    location: 'Queens, NYC',
    rating: '4.7',
    reviews: '92',
    tags: ['Backyard', 'Updated']
  }
];

const FeaturedProperties = () => {
  return (
    <section className="py-24 bg-white px-10 lg:px-20">
      <div className="max-w-[1440px] mx-auto">
        <div className="flex justify-between items-end mb-12">
          <div className="space-y-2">
            <h2 className="text-4xl font-bold text-text-main">Featured Properties</h2>
            <p className="text-gray-500">Highly rated homes in your area</p>
          </div>
          <button className="text-brand-green font-bold flex items-center gap-1 hover:underline">
            View all 
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {properties.map((prop, idx) => (
            <PropertyCard key={idx} {...prop} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProperties;
