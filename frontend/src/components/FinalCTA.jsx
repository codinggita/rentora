import React from 'react';

const FinalCTA = () => {
  return (
    <section className="py-24 px-10 lg:px-20 bg-white">
      <div className="max-w-[1440px] mx-auto">
        <div className="relative bg-brand-forest rounded-[48px] overflow-hidden py-20 px-10 text-center space-y-8">
          {/* Abstract background shapes */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-brand-green/20 rounded-full blur-3xl -mr-32 -mt-32"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-brand-terracotta/10 rounded-full blur-3xl -ml-32 -mb-32"></div>
          
          <div className="relative z-10 space-y-6">
            <h2 className="text-4xl lg:text-6xl font-bold text-white leading-tight">
              Ready to find your <br className="hidden lg:block" /> perfect home?
            </h2>
            <p className="text-gray-300 text-lg lg:text-xl max-w-2xl mx-auto">
              Join Rentora today and discover rental properties with complete transparency and community-driven insights.
            </p>
            <div className="pt-4">
              <button className="bg-brand-terracotta text-white px-10 py-5 rounded-2xl font-bold text-lg hover:shadow-2xl hover:scale-105 transition-all">
                Get Started Free
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
