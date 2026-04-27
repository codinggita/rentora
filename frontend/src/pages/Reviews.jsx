import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Reviews = () => {
  const [rating, setRating] = useState(0);
  const [selectedIssues, setSelectedIssues] = useState([]);

  const toggleIssue = (issue) => {
    if (selectedIssues.includes(issue)) {
      setSelectedIssues(selectedIssues.filter(i => i !== issue));
    } else {
      setSelectedIssues([...selectedIssues, issue]);
    }
  };

  const issues = [
    { id: 'noise', label: 'Noise', icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M11 5L6 9H2v6h4l5 4V5zM19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07" />
      </svg>
    )},
    { id: 'pests', label: 'Pests', icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M8 6c2-3 6-3 8 0M7 10c-2-3-6-3-8 0M21 10c2-3 6-3 8 0M12 12v10M8 15l4-2 4 2M8 19l4-2 4 2" />
      </svg>
    )},
    { id: 'safety', label: 'Safety', icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    )},
    { id: 'cleanliness', label: 'Cleanliness', icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2v2M7.89 6.05 6.44 4.6M4.95 14.86l-1.41-1.41M16.11 6.05l1.45-1.45M19.05 14.86l1.41-1.41M12 12h8a8 8 0 0 1-8 8v-8Z" />
      </svg>
    )},
    { id: 'water', label: 'Water Issues', icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z" />
      </svg>
    )},
  ];

  return (
    <div className="min-h-screen bg-bg-off-white flex flex-col font-sans">
      <Navbar />
      
      <main className="flex-grow container mx-auto px-4 py-12 lg:py-16 max-w-6xl">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl lg:text-5xl font-bold text-brand-forest mb-4">Share Your Experience</h1>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto font-medium">
            Help others make informed decisions by sharing your rental experience
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Form Section */}
          <div className="lg:col-span-8 bg-white rounded-[2rem] shadow-sm p-8 lg:p-10 border border-gray-50">
            <form className="space-y-8">
              {/* Select Property */}
              <div className="space-y-3">
                <label className="block text-brand-forest font-bold text-lg">Select Property</label>
                <div className="relative group">
                  <select className="w-full bg-brand-sand/40 border-none rounded-2xl py-4 px-6 text-gray-700 appearance-none focus:ring-2 focus:ring-brand-green/20 transition-all cursor-pointer font-medium text-base">
                    <option>Modern Downtown Loft - 123 Main St, NYC</option>
                    <option>Sunset Heights Apartments - 456 Park Ave, LA</option>
                    <option>The Garden Residency - 789 Elm St, CHI</option>
                  </select>
                  <div className="absolute right-6 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400 group-hover:text-brand-forest transition-colors">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="m6 9 6 6 6-6" />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Overall Rating */}
              <div className="space-y-3">
                <label className="block text-brand-forest font-bold text-lg">Overall Rating</label>
                <div className="flex gap-2">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button
                      key={star}
                      type="button"
                      onClick={() => setRating(star)}
                      className={`transition-all transform hover:scale-110 ${star <= rating ? 'text-yellow-400 fill-yellow-400' : 'text-brand-sand fill-brand-sand'}`}
                    >
                      <svg width="36" height="36" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                      </svg>
                    </button>
                  ))}
                </div>
              </div>

              {/* Review Title */}
              <div className="space-y-3">
                <label className="block text-brand-forest font-bold text-lg">Review Title</label>
                <input 
                  type="text" 
                  placeholder="Sum up your experience in one sentence"
                  className="w-full bg-brand-sand/40 border-none rounded-2xl py-4 px-6 text-gray-700 placeholder:text-gray-400 focus:ring-2 focus:ring-brand-green/20 transition-all font-medium"
                />
              </div>

              {/* Your Review */}
              <div className="space-y-3">
                <label className="block text-brand-forest font-bold text-lg">Your Review</label>
                <textarea 
                  rows="5"
                  placeholder="Share details about your experience living here. What did you like? What could be improved?"
                  className="w-full bg-brand-sand/40 border-none rounded-2xl py-4 px-6 text-gray-700 placeholder:text-gray-400 focus:ring-2 focus:ring-brand-green/20 transition-all font-medium resize-none"
                />
                <p className="text-gray-400 text-sm font-medium">Minimum 50 characters</p>
              </div>

              {/* Issues */}
              <div className="space-y-4">
                <div className="space-y-1">
                  <label className="block text-brand-forest font-bold text-lg">Issues (if any)</label>
                  <p className="text-gray-400 text-sm font-medium">Select all that apply to help future renters</p>
                </div>
                <div className="flex flex-wrap gap-3">
                  {issues.map((issue) => (
                    <button
                      key={issue.id}
                      type="button"
                      onClick={() => toggleIssue(issue.id)}
                      className={`flex items-center gap-2 px-5 py-2.5 rounded-full border-2 transition-all font-semibold ${
                        selectedIssues.includes(issue.id)
                          ? 'bg-brand-green/10 border-brand-green text-brand-green'
                          : 'bg-white border-brand-sand text-gray-500 hover:border-brand-green/30'
                      }`}
                    >
                      {issue.icon}
                      {issue.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <button className="flex-grow bg-brand-terracotta text-white py-4 px-8 rounded-2xl font-bold text-lg hover:shadow-lg hover:opacity-90 transition-all active:scale-[0.98]">
                  Submit Review
                </button>
                <button type="button" className="sm:px-10 border-2 border-brand-sand rounded-2xl py-4 px-8 font-bold text-gray-500 hover:bg-brand-sand/20 transition-all active:scale-[0.98]">
                  Cancel
                </button>
              </div>
            </form>
          </div>

          {/* Sidebar Section */}
          <div className="lg:col-span-4 space-y-6">
            <div className="bg-brand-forest rounded-[2rem] p-8 text-white relative overflow-hidden group">
              {/* Decorative circle */}
              <div className="absolute -right-4 -top-4 w-24 h-24 bg-brand-green/10 rounded-full blur-2xl group-hover:bg-brand-green/20 transition-all duration-700"></div>
              
              <h3 className="text-2xl font-bold mb-8 relative z-10">Tips for a Great Review</h3>
              
              <ul className="space-y-6 relative z-10">
                {[
                  'Be honest and specific about your experience',
                  'Mention both positives and areas for improvement',
                  'Include details about maintenance and management',
                  'Describe the neighborhood and amenities',
                  'Keep it constructive and helpful for others'
                ].map((tip, idx) => (
                  <li key={idx} className="flex gap-4 items-start group/tip">
                    <div className="mt-1 flex-shrink-0 w-5 h-5 rounded-full bg-brand-green/20 flex items-center justify-center group-hover/tip:bg-brand-green transition-colors">
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" className="text-brand-green group-hover/tip:text-white transition-colors">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    </div>
                    <span className="text-gray-100 font-medium leading-tight">{tip}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-12 p-6 bg-[#263224] rounded-2xl border border-white/5 relative z-10">
                <p className="text-gray-300 text-sm leading-relaxed font-medium italic">
                  Your review helps thousands of renters make better housing decisions. Thank you for contributing to our community!
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Reviews;

