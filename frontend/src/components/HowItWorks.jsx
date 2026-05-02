import React from 'react';

const steps = [
  {
    number: '1',
    title: 'Discover',
    description: 'Search for properties in your desired neighborhood with our intuitive filters.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/>
      </svg>
    ),
    bgColor: 'bg-brand-green/10',
    iconColor: 'text-brand-green'
  },
  {
    number: '2',
    title: 'Explore',
    description: 'Read authentic reviews and ratings from real renters who lived there.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"/><circle cx="12" cy="12" r="3"/>
      </svg>
    ),
    bgColor: 'bg-brand-terracotta/10',
    iconColor: 'text-brand-terracotta'
  },
  {
    number: '3',
    title: 'Decide',
    description: 'Make an informed decision with complete transparency and peace of mind.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z"/>
      </svg>
    ),
    bgColor: 'bg-brand-forest/10',
    iconColor: 'text-brand-forest'
  }
];

const HowItWorks = () => {
  return (
    <section className="py-16 md:py-24 bg-white px-6 md:px-10 lg:px-20">
      <div className="max-w-[1440px] mx-auto text-center">
        <div className="space-y-4 mb-12 md:mb-20">
          <h2 className="text-3xl md:text-4xl font-bold text-text-main tracking-tight">How It Works</h2>
          <p className="text-gray-500 max-w-2xl mx-auto text-base md:text-lg font-medium">
            Three simple steps to find your perfect home
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-16">
          {steps.map((step, idx) => (
            <div key={idx} className="flex flex-col items-center space-y-4 md:space-y-6 group">
              <div className={`w-16 h-16 md:w-20 md:h-20 ${step.bgColor} ${step.iconColor} rounded-2xl md:rounded-full flex items-center justify-center transition-transform group-hover:scale-110 duration-300 shadow-sm`}>
                {step.icon}
              </div>
              <div className="space-y-2 md:space-y-3">
                <h3 className="text-xl md:text-2xl font-bold text-text-main">
                  {step.number}. {step.title}
                </h3>
                <p className="text-gray-500 leading-relaxed max-w-xs mx-auto text-sm md:text-base font-medium">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
