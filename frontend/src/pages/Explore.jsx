import React, { useState, useEffect } from 'react';
import PropertyCard from '../components/PropertyCard';
import Footer from '../components/Footer';
import API_BASE_URL from '../api/config';

const Explore = () => {
  const [properties, setProperties] = useState([]);
  const [filteredProperties, setFilteredProperties] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // Filter States
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedQuickFilter, setSelectedQuickFilter] = useState('All');
  const [priceRange, setPriceRange] = useState(3400);
  const [minRating, setMinRating] = useState(4.5);
  const [selectedTypes, setSelectedTypes] = useState(['Apartment']);
  const [selectedAmenities, setSelectedAmenities] = useState(['Pet-friendly']);

  // Mock data
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
    if (searchQuery) {
      result = result.filter(p => p.title.toLowerCase().includes(searchQuery.toLowerCase()) || p.location.toLowerCase().includes(searchQuery.toLowerCase()));
    }
    setFilteredProperties(result);
    setIsSidebarOpen(false); // Close sidebar on mobile after applying
  };

  return (
    <div className="bg-white min-h-screen font-sans">
      {/* Search Bar Container - Responsive spacing */}
      <div className="max-w-[1440px] mx-auto px-6 md:px-10 lg:px-24 py-6 md:py-8 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="relative w-full md:flex-grow md:max-w-2xl order-2 md:order-1">
          <span className="absolute left-6 top-1/2 -translate-y-1/2 text-gray-400">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>
          </span>
          <input 
            type="text" 
            placeholder="Search by location..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-[#f3f0eb]/60 rounded-2xl py-4 pl-14 md:pl-16 pr-8 text-base md:text-lg placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-brand-green/20 border border-transparent transition-all"
          />
        </div>

        <div className="flex items-center justify-between w-full md:w-auto gap-4 order-1 md:order-2">
          {/* Filter Toggle Button (Mobile Only) */}
          <button 
            onClick={() => setIsSidebarOpen(true)}
            className="lg:hidden flex items-center gap-2 bg-[#f3f0eb]/60 px-5 py-3.5 rounded-2xl font-bold text-text-main"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><line x1="4" y1="21" x2="4" y2="14"/><line x1="4" y1="10" x2="4" y2="3"/><line x1="12" y1="21" x2="12" y2="12"/><line x1="12" y1="8" x2="12" y2="3"/><line x1="20" y1="21" x2="20" y2="16"/><line x1="20" y1="12" x2="20" y2="3"/><line x1="1" y1="14" x2="7" y2="14"/><line x1="9" y1="8" x2="15" y2="8"/><line x1="17" y1="16" x2="23" y2="16"/></svg>
            Filters
          </button>

          <div className="flex bg-[#f3f0eb]/60 rounded-2xl p-1.5 overflow-x-auto no-scrollbar max-w-[200px] md:max-w-none">
            {['All', 'Studio', '1BR', '2BR+'].map((opt) => (
              <button 
                key={opt} 
                onClick={() => setSelectedQuickFilter(opt)}
                className={`px-4 md:px-7 py-2 md:py-3 rounded-xl text-sm md:text-base font-bold transition-all whitespace-nowrap ${selectedQuickFilter === opt ? 'bg-white shadow-md text-text-main' : 'text-gray-500 hover:text-text-main'}`}
              >
                {opt}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-[1440px] mx-auto px-6 md:px-10 lg:px-24 py-4 md:py-6">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-14">
          
          {/* Sidebar Filters - Mobile Drawer + Desktop Sidebar */}
          <aside className={`fixed inset-0 z-[110] lg:relative lg:z-0 lg:block lg:w-80 flex-shrink-0 transition-opacity duration-300 ${isSidebarOpen ? 'opacity-100 visible' : 'opacity-0 invisible lg:visible lg:opacity-100'}`}>
            {/* Overlay */}
            <div className="absolute inset-0 bg-black/20 backdrop-blur-sm lg:hidden" onClick={() => setIsSidebarOpen(false)}></div>
            
            {/* Drawer Content */}
            <div className={`absolute left-0 top-0 bottom-0 w-80 bg-white p-8 lg:p-10 rounded-r-[3rem] lg:rounded-[3rem] shadow-2xl lg:shadow-[0_0_60px_rgba(0,0,0,0.03)] border border-gray-50 space-y-10 lg:space-y-12 overflow-y-auto lg:overflow-visible transition-transform duration-300 lg:translate-x-0 ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'}`}>
              <div className="flex items-center justify-between lg:block">
                <div className="flex items-center gap-3 text-brand-forest font-bold text-xl">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><line x1="4" y1="21" x2="4" y2="14"/><line x1="4" y1="10" x2="4" y2="3"/><line x1="12" y1="21" x2="12" y2="12"/><line x1="12" y1="8" x2="12" y2="3"/><line x1="20" y1="21" x2="20" y2="16"/><line x1="20" y1="12" x2="20" y2="3"/><line x1="1" y1="14" x2="7" y2="14"/><line x1="9" y1="8" x2="15" y2="8"/><line x1="17" y1="16" x2="23" y2="16"/></svg>
                  Filters
                </div>
                <button className="lg:hidden p-2 text-gray-400" onClick={() => setIsSidebarOpen(false)}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
                </button>
              </div>

              {/* Price Range */}
              <div className="space-y-5">
                <h4 className="font-bold text-text-main text-lg">Price Range</h4>
                <div className="relative pt-4">
                  <input type="range" min="500" max="5000" value={priceRange} onChange={(e) => setPriceRange(e.target.value)} className="w-full h-2 bg-gray-100 rounded-full appearance-none cursor-pointer accent-brand-green" />
                  <div className="absolute top-[1.4rem] left-0 h-2 bg-brand-green rounded-full pointer-events-none" style={{ width: `${((priceRange - 500) / 4500) * 100}%` }}></div>
                </div>
                <div className="flex justify-between text-sm font-bold text-gray-400">
                  <span>$500</span>
                  <span>${priceRange}</span>
                </div>
              </div>

              {/* Minimum Rating */}
              <div className="space-y-5">
                <h4 className="font-bold text-text-main text-lg">Minimum Rating</h4>
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
              <div className="space-y-5">
                <h4 className="font-bold text-text-main text-lg">Property Type</h4>
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

              <button onClick={applyFilters} className="w-full bg-brand-terracotta text-white py-5 rounded-2xl font-bold text-lg hover:shadow-xl transition-all active:scale-95">
                Apply Filters
              </button>
            </div>
          </aside>

          {/* Main Grid Content */}
          <main className="flex-grow space-y-8 md:space-y-12">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
              <h2 className="text-lg md:text-xl font-bold text-gray-400">
                <span className="text-text-main">{filteredProperties.length}</span> properties found
              </h2>
              <div className="relative group w-full md:w-auto">
                <select className="w-full md:w-auto appearance-none bg-white border border-gray-100 rounded-2xl py-3 px-6 md:px-10 pr-12 md:pr-14 font-bold text-gray-500 focus:outline-none cursor-pointer">
                  <option>Most Recent</option>
                  <option>Price: Low to High</option>
                  <option>Price: High to Low</option>
                </select>
                <div className="absolute right-6 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="m6 9 6 6 6-6"/></svg>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6 md:gap-10">
              {filteredProperties.map((prop) => (
                <PropertyCard key={prop._id} {...prop} image={prop.images ? prop.images[0] : prop.image} reviews={prop.reviewsCount || prop.reviews} />
              ))}
            </div>

            {/* Pagination */}
            <div className="flex flex-wrap justify-center items-center gap-2 md:gap-4 pt-8 md:pt-12">
              <button className="px-5 md:px-8 py-3 md:py-4 rounded-xl md:rounded-2xl border border-gray-100 font-bold text-gray-500 text-sm md:text-base">Previous</button>
              <button className="w-10 h-10 md:w-14 md:h-14 rounded-xl md:rounded-2xl bg-brand-green text-white font-bold shadow-lg shadow-brand-green/30">1</button>
              <button className="w-10 h-10 md:w-14 md:h-14 rounded-xl md:rounded-2xl border border-gray-100 font-bold text-gray-500">2</button>
              <button className="px-5 md:px-8 py-3 md:py-4 rounded-xl md:rounded-2xl border border-gray-100 font-bold text-gray-500 text-sm md:text-base">Next</button>
            </div>
          </main>

        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Explore;
