import React, { useState, useEffect } from 'react';
import PropertyCard from '../components/PropertyCard';
import Footer from '../components/Footer';
import API_BASE_URL from '../api/config';

const Explore = () => {
  const [properties, setProperties] = useState([]);
  const [filteredProperties, setFilteredProperties] = useState([]);
  const [loading, setLoading] = useState(true);

  // Filter States
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedQuickFilter, setSelectedQuickFilter] = useState('All');
  const [priceRange, setPriceRange] = useState(3400);
  const [minRating, setMinRating] = useState(4.5);
  const [selectedTypes, setSelectedTypes] = useState(['Apartment']); // Default from photo
  const [selectedAmenities, setSelectedAmenities] = useState(['Pet-friendly']); // Default from photo

  // Mock data for consistency with design
  const MOCK_DATA = [
    { _id: '1', title: 'Modern Downtown...', price: '$2,400/mo', location: 'Downtown, NYC', rating: 4.8, reviewsCount: 124, tags: ['Safe', 'Quiet', 'Pet-friendly'], images: ['https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80'] },
    { _id: '2', title: 'Cozy Studio...', price: '$1,800/mo', location: 'Brooklyn, NYC', rating: 4.6, reviewsCount: 89, tags: ['Renovated', 'Natural Light'], images: ['https://images.unsplash.com/photo-1493809842364-78817add7ffb?auto=format&fit=crop&w=800&q=80'] },
    { _id: '3', title: 'Spacious 2BR with...', price: '$3,200/mo', location: 'Manhattan, NYC', rating: 4.9, reviewsCount: 156, tags: ['City View', 'Modern'], images: ['https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=800&q=80'] },
    { _id: '4', title: 'Bright Corner Unit', price: '$2,100/mo', location: 'Queens, NYC', rating: 4.7, reviewsCount: 92, tags: ['Sunlit', 'Updated'], images: ['https://images.unsplash.com/photo-1499955085172-a104c9463ece?auto=format&fit=crop&w=800&q=80'] },
    { _id: '5', title: 'Elegant 3BR...', price: '$4,500/mo', location: 'Upper East Side, NYC', rating: 4.9, reviewsCount: 203, tags: ['Luxury', 'Terrace'], images: ['https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=1200&q=80'] },
    { _id: '6', title: 'Charming 1BR...', price: '$1,950/mo', location: 'East Village, NYC', rating: 4.5, reviewsCount: 67, tags: ['Character', 'Location'], images: ['https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=1200&q=80'] }
  ];

  useEffect(() => {
    const fetchProperties = async () => {
      try {
        const response = await fetch(`${API_BASE_URL}/properties`);
        const data = await response.json();
        if (response.ok && data.length > 0) {
          setProperties(data);
          setFilteredProperties(data);
        } else {
          setProperties(MOCK_DATA);
          setFilteredProperties(MOCK_DATA);
        }
      } catch (err) {
        setProperties(MOCK_DATA);
        setFilteredProperties(MOCK_DATA);
      } finally {
        setLoading(false);
      }
    };
    fetchProperties();
  }, []);

  const handleTypeToggle = (type) => {
    setSelectedTypes(prev => prev.includes(type) ? prev.filter(t => t !== type) : [...prev, type]);
  };

  const handleAmenityToggle = (amenity) => {
    setSelectedAmenities(prev => prev.includes(amenity) ? prev.filter(a => a !== amenity) : [...prev, amenity]);
  };

  const applyFilters = () => {
    let result = properties;
    // Dummy filtering logic
    if (searchQuery) {
      result = result.filter(p => p.title.toLowerCase().includes(searchQuery.toLowerCase()) || p.location.toLowerCase().includes(searchQuery.toLowerCase()));
    }
    setFilteredProperties(result);
  };

  return (
    <div className="bg-white min-h-screen font-sans">
      {/* Search Bar Container */}
      <div className="max-w-[1440px] mx-auto px-6 lg:px-24 py-8 flex flex-wrap items-center justify-between gap-6">
        <div className="relative flex-grow max-w-2xl">
          <span className="absolute left-6 top-1/2 -translate-y-1/2 text-gray-400">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>
          </span>
          <input 
            type="text" 
            placeholder="Search by location, neighborhood..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-[#f3f0eb]/60 rounded-2xl py-4.5 pl-16 pr-8 text-lg placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-brand-green/20 border border-transparent transition-all"
          />
        </div>

        <div className="flex items-center gap-5">
          <div className="flex bg-[#f3f0eb]/60 rounded-2xl p-1.5">
            {['All', 'Studio', '1BR', '2BR+'].map((opt) => (
              <button 
                key={opt} 
                onClick={() => setSelectedQuickFilter(opt)}
                className={`px-7 py-3 rounded-xl text-base font-bold transition-all ${selectedQuickFilter === opt ? 'bg-white shadow-md text-text-main scale-105' : 'text-gray-500 hover:text-text-main'}`}
              >
                {opt}
              </button>
            ))}
          </div>
          <button className="w-14 h-14 bg-brand-green rounded-2xl flex items-center justify-center text-white shadow-xl shadow-brand-green/20 hover:scale-105 transition-all">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
          </button>
        </div>
      </div>

      <div className="max-w-[1440px] mx-auto px-6 lg:px-24 py-6">
        <div className="flex flex-col lg:flex-row gap-14">
          
          {/* Sidebar Filters */}
          <aside className="w-full lg:w-80 flex-shrink-0">
            <div className="bg-white p-10 rounded-[3rem] shadow-[0_0_60px_rgba(0,0,0,0.03)] border border-gray-50 space-y-12 sticky top-28">
              <div className="flex items-center gap-3 text-brand-forest font-bold text-xl">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><line x1="4" y1="21" x2="4" y2="14"/><line x1="4" y1="10" x2="4" y2="3"/><line x1="12" y1="21" x2="12" y2="12"/><line x1="12" y1="8" x2="12" y2="3"/><line x1="20" y1="21" x2="20" y2="16"/><line x1="20" y1="12" x2="20" y2="3"/><line x1="1" y1="14" x2="7" y2="14"/><line x1="9" y1="8" x2="15" y2="8"/><line x1="17" y1="16" x2="23" y2="16"/></svg>
                Filters
              </div>

              {/* Price Range */}
              <div className="space-y-6">
                <h4 className="font-bold text-text-main text-lg tracking-tight">Price Range</h4>
                <div className="relative pt-4">
                  <input 
                    type="range" 
                    min="500" 
                    max="5000" 
                    value={priceRange}
                    onChange={(e) => setPriceRange(e.target.value)}
                    className="w-full h-2 bg-gray-100 rounded-full appearance-none cursor-pointer accent-brand-green"
                  />
                  {/* Custom Track Overlay for Pixel Perfection */}
                  <div className="absolute top-[1.4rem] left-0 h-2 bg-brand-green rounded-full pointer-events-none" style={{ width: `${((priceRange - 500) / 4500) * 100}%` }}></div>
                </div>
                <div className="flex justify-between text-sm font-bold text-gray-400">
                  <span>$500</span>
                  <span>${priceRange}</span>
                </div>
              </div>

              {/* Minimum Rating */}
              <div className="space-y-6">
                <h4 className="font-bold text-text-main text-lg tracking-tight">Minimum Rating</h4>
                <div className="space-y-4">
                  {[4.5, 4, 3.5, 3].map((val) => (
                    <label key={val} className="flex items-center gap-4 cursor-pointer group">
                      <input type="radio" name="rating" className="hidden" checked={minRating === val} onChange={() => setMinRating(val)} />
                      <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all ${minRating === val ? 'border-brand-green bg-brand-green' : 'border-gray-200 group-hover:border-brand-green'}`}>
                        {minRating === val && <div className="w-2.5 h-2.5 bg-white rounded-full"></div>}
                      </div>
                      <span className={`text-base font-bold transition-colors ${minRating === val ? 'text-text-main' : 'text-gray-400 group-hover:text-text-main'}`}>{val}+ stars</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Property Type */}
              <div className="space-y-6">
                <h4 className="font-bold text-text-main text-lg tracking-tight">Property Type</h4>
                <div className="space-y-4">
                  {['Apartment', 'House', 'Condo', 'Loft'].map((type) => (
                    <label key={type} className="flex items-center gap-4 cursor-pointer group">
                      <input type="checkbox" className="hidden" checked={selectedTypes.includes(type)} onChange={() => handleTypeToggle(type)} />
                      <div className={`w-6 h-6 rounded-lg border-2 flex items-center justify-center transition-all ${selectedTypes.includes(type) ? 'border-brand-green bg-brand-green' : 'border-gray-200 group-hover:border-brand-green'}`}>
                        {selectedTypes.includes(type) && <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="4"><polyline points="20 6 9 17 4 12"/></svg>}
                      </div>
                      <span className={`text-base font-bold transition-colors ${selectedTypes.includes(type) ? 'text-text-main' : 'text-gray-400 group-hover:text-text-main'}`}>{type}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Amenities */}
              <div className="space-y-6">
                <h4 className="font-bold text-text-main text-lg tracking-tight">Amenities</h4>
                <div className="space-y-4">
                  {['Pet-friendly', 'Parking', 'Laundry', 'Gym', 'Doorman'].map((item) => (
                    <label key={item} className="flex items-center gap-4 cursor-pointer group">
                      <input type="checkbox" className="hidden" checked={selectedAmenities.includes(item)} onChange={() => handleAmenityToggle(item)} />
                      <div className={`w-6 h-6 rounded-lg border-2 flex items-center justify-center transition-all ${selectedAmenities.includes(item) ? 'border-brand-green bg-brand-green' : 'border-gray-200 group-hover:border-brand-green'}`}>
                        {selectedAmenities.includes(item) && <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="4"><polyline points="20 6 9 17 4 12"/></svg>}
                      </div>
                      <span className={`text-base font-bold transition-colors ${selectedAmenities.includes(item) ? 'text-text-main' : 'text-gray-400 group-hover:text-text-main'}`}>{item}</span>
                    </label>
                  ))}
                </div>
              </div>

              <button 
                onClick={applyFilters}
                className="w-full bg-brand-terracotta text-white py-5 rounded-[1.5rem] font-bold text-lg hover:shadow-2xl hover:shadow-brand-terracotta/30 transition-all active:scale-95 mt-4"
              >
                Apply Filters
              </button>
            </div>
          </aside>

          {/* Main Grid Content */}
          <main className="flex-grow space-y-12">
            <div className="flex justify-between items-center">
              <h2 className="text-xl font-bold text-gray-400">
                <span className="text-text-main">{filteredProperties.length}</span> properties found
              </h2>
              <div className="relative group">
                <select className="appearance-none bg-white border border-gray-100 rounded-2xl py-3.5 px-10 pr-14 font-bold text-gray-500 focus:outline-none cursor-pointer hover:border-brand-green transition-all shadow-sm">
                  <option>Most Recent</option>
                  <option>Price: Low to High</option>
                  <option>Price: High to Low</option>
                </select>
                <div className="absolute right-6 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400 group-hover:text-brand-green transition-colors">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="m6 9 6 6 6-6"/></svg>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10">
              {filteredProperties.map((prop) => (
                <PropertyCard key={prop._id} {...prop} image={prop.images ? prop.images[0] : prop.image} reviews={prop.reviewsCount || prop.reviews} />
              ))}
            </div>

            {/* Pagination */}
            <div className="flex justify-center items-center gap-4 pt-12">
              <button className="px-10 py-5 rounded-2xl border border-gray-100 font-bold text-gray-500 hover:bg-white hover:shadow-xl transition-all active:scale-95">Previous</button>
              <button className="w-16 h-16 rounded-2xl bg-brand-green text-white font-bold shadow-xl shadow-brand-green/40 scale-110">1</button>
              <button className="w-16 h-16 rounded-2xl border border-gray-100 font-bold text-gray-500 hover:bg-white transition-all hover:scale-105 active:scale-95">2</button>
              <button className="w-16 h-16 rounded-2xl border border-gray-100 font-bold text-gray-500 hover:bg-white transition-all hover:scale-105 active:scale-95">3</button>
              <button className="px-10 py-5 rounded-2xl border border-gray-100 font-bold text-gray-500 hover:bg-white hover:shadow-xl transition-all active:scale-95">Next</button>
            </div>
          </main>

        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Explore;
