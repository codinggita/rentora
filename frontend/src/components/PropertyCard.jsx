import React from 'react';
import { Link } from 'react-router-dom';

const PropertyCard = ({ _id, image, title, price, location, rating, reviews, tags }) => {
  return (
    <Link to={`/property/${_id}`} className="bg-white rounded-[2rem] md:rounded-[2.5rem] overflow-hidden shadow-sm hover:shadow-xl transition-all border border-gray-100 group cursor-pointer block h-full">
      {/* Image Container */}
      <div className="relative h-48 md:h-60 overflow-hidden m-2 md:m-3 rounded-[1.5rem] md:rounded-[2rem]">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
        />
        <button 
          className="absolute top-3 right-3 md:top-4 md:right-4 w-8 h-8 md:w-10 md:h-10 bg-white/90 backdrop-blur-md rounded-full flex items-center justify-center text-gray-400 hover:text-red-500 hover:bg-white transition-all shadow-md group/heart"
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
          }}
        >
          <svg width="18" height="18" className="md:w-5 md:h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="group-hover/heart:fill-red-500 transition-all">
            <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
          </svg>
        </button>
      </div>

      {/* Content */}
      <div className="p-4 md:p-6 pt-2 md:pt-2 space-y-3 md:space-y-4">
        <div className="flex justify-between items-start gap-4">
          <h3 className="text-lg md:text-xl font-bold text-text-main leading-tight line-clamp-1 tracking-tight">{title}</h3>
          <span className="text-brand-green font-bold text-base md:text-lg whitespace-nowrap">{price}</span>
        </div>

        <div className="flex items-center gap-1.5 text-gray-400 text-[10px] md:text-sm font-bold uppercase tracking-wider">
          <svg width="16" height="16" className="md:w-[18px] md:h-[18px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
          <span className="line-clamp-1">{location}</span>
        </div>

        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1 text-brand-terracotta">
            <svg width="16" height="16" className="md:w-[18px] md:h-[18px]" fill="currentColor" viewBox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>
            <span className="font-bold text-text-main text-base md:text-lg">{rating}</span>
          </div>
          <span className="text-xs md:text-sm font-bold text-gray-400">({reviews} reviews)</span>
        </div>

        <div className="flex flex-wrap gap-2 pt-1 md:pt-2">
          {tags && tags.map((tag, idx) => (
            <span key={idx} className="bg-[#f3f0eb] text-gray-500 text-[9px] md:text-xs font-bold px-3 md:px-4 py-1 md:py-1.5 rounded-full uppercase tracking-widest">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </Link>
  );
};

export default PropertyCard;
