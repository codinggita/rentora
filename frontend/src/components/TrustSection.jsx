import React from 'react';

const stats = [
  {
    value: '50K+',
    label: 'Active Users',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
    ),
    iconColor: 'text-brand-green',
    bgColor: 'bg-brand-green/10'
  },
  {
    value: '100K+',
    label: 'Reviews',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
    ),
    iconColor: 'text-brand-terracotta',
    bgColor: 'bg-brand-terracotta/10'
  },
  {
    value: '4.8',
    label: 'Average Rating',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="8" r="7"/><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"/></svg>
    ),
    iconColor: 'text-brand-forest',
    bgColor: 'bg-brand-forest/10'
  },
  {
    value: '25K+',
    label: 'Properties',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>
    ),
    iconColor: 'text-brand-green',
    bgColor: 'bg-brand-green/10'
  }
];

const TrustSection = () => {
  return (
    <section className="py-16 md:py-24 bg-[#F5F1E9]/40 px-6 md:px-10 lg:px-20">
      <div className="max-w-[1440px] mx-auto text-center">
        <div className="space-y-3 md:space-y-4 mb-12 md:mb-20">
          <h2 className="text-3xl md:text-4xl font-bold text-text-main tracking-tight px-4">Real reviews from real renters</h2>
          <p className="text-gray-500 max-w-2xl mx-auto text-base md:text-lg font-medium px-4">
            Join thousands of renters making smarter housing decisions
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {stats.map((stat, idx) => (
            <div key={idx} className="bg-white p-8 md:p-10 rounded-[2rem] md:rounded-[32px] shadow-sm hover:shadow-md transition-shadow flex flex-col items-center space-y-4 border border-gray-50">
              <div className={`w-12 h-12 md:w-14 md:h-14 ${stat.bgColor} ${stat.iconColor} rounded-2xl md:rounded-full flex items-center justify-center`}>
                {stat.icon}
              </div>
              <div className="space-y-1">
                <span className="text-3xl md:text-4xl font-bold text-text-main block tracking-tight">{stat.value}</span>
                <span className="text-gray-500 font-bold text-xs md:text-sm uppercase tracking-widest">{stat.label}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustSection;
