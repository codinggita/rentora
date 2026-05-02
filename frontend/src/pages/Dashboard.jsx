import React from 'react';
import { 
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
  PieChart, Pie, Cell, Legend
} from 'recharts';
import SEO from '../components/SEO';
import Footer from '../components/Footer';

const Dashboard = () => {
  const user = JSON.parse(localStorage.getItem('user')) || { username: 'John Doe' };
  
  // Mock Data for Charts
  const ratingsData = [
    { name: '5 Star', count: 45 },
    { name: '4 Star', count: 12 },
    { name: '3 Star', count: 5 },
    { name: '2 Star', count: 2 },
    { name: '1 Star', count: 1 },
  ];

  const issueData = [
    { name: 'Noise', value: 35 },
    { name: 'Pests', value: 20 },
    { name: 'Safety', value: 25 },
    { name: 'Cleanliness', value: 20 },
  ];

  const COLORS = ['#E07A5F', '#815B3E', '#6B8E23', '#2F3E2C'];

  const recentReviews = [
    {
      id: 1,
      property: 'Modern Downtown Loft',
      text: 'Absolutely loved living here! The apartment is exactly as described...',
      date: 'April 15, 2026',
      rating: 5
    },
    {
      id: 2,
      property: 'Cozy Studio Apartment',
      text: 'Nice place overall. The unit is well-maintained and the building...',
      date: 'March 28, 2026',
      rating: 4
    },
    {
      id: 3,
      property: 'Spacious 2BR with View',
      text: 'Perfect starter apartment! Clean, modern, and in a safe...',
      date: 'March 12, 2026',
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-[#FDFBF9] font-sans">
      <SEO 
        title="Dashboard Overview" 
        description="View your activity, reviews, and saved properties on Rentora."
      />
      
      <div className="max-w-[1440px] mx-auto px-6 md:px-10 lg:px-24 py-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          
          {/* Sidebar */}
          <aside className="lg:col-span-3">
            <div className="bg-white rounded-[2.5rem] p-6 md:p-8 shadow-sm border border-gray-50 flex flex-col items-center lg:sticky lg:top-32">
              <div className="w-16 h-16 md:w-20 md:h-20 bg-brand-green rounded-full flex items-center justify-center text-white text-2xl md:text-3xl font-bold mb-4 shadow-lg shadow-brand-green/20">
                {user.username.substring(0, 2).toUpperCase()}
              </div>
              <h2 className="text-lg md:text-xl font-bold text-text-main">{user.username}</h2>
              <p className="text-gray-400 text-xs md:text-sm font-medium">Member since 2025</p>
              
              <div className="w-full h-[1px] bg-gray-100 my-6 md:my-8"></div>
              
              <nav className="w-full flex flex-row lg:flex-col gap-2 overflow-x-auto no-scrollbar lg:overflow-visible pb-2 lg:pb-0">
                {[
                  { name: 'Overview', icon: 'M4 6h16M4 12h16M4 18h16', active: true },
                  { name: 'My Reviews', icon: 'M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z', active: false },
                  { name: 'Saved Properties', icon: 'M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z', active: false },
                  { name: 'Profile Settings', icon: 'M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z', active: false },
                  { name: 'Log Out', icon: 'M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1', active: false, color: 'text-brand-terracotta' }
                ].map((item) => (
                  <button 
                    key={item.name}
                    className={`flex-shrink-0 lg:w-full flex items-center gap-3 md:gap-4 px-4 md:px-6 py-3 md:py-4 rounded-xl md:rounded-2xl font-bold transition-all whitespace-nowrap ${
                      item.active 
                      ? 'bg-brand-green text-white shadow-lg shadow-brand-green/20' 
                      : `${item.color || 'text-gray-400'} hover:bg-gray-50`
                    }`}
                  >
                    <svg width="18" height="18" className="md:w-5 md:h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d={item.icon} />
                    </svg>
                    <span className="text-sm md:text-base">{item.name}</span>
                  </button>
                ))}
              </nav>
            </div>
          </aside>

          {/* Main Content */}
          <main className="lg:col-span-9 space-y-8 md:space-y-12">
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-text-main">Dashboard Overview</h1>
            
            {/* Stats Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
              {[
                { label: 'Total Reviews', value: '12', icon: 'M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z', color: 'bg-brand-green/10 text-brand-green' },
                { label: 'Average Rating', value: '4.7', icon: 'M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.54 1.118l-3.976-2.888a1 1 0 00-1.175 0l-3.976 2.888c-.784.57-1.838-.196-1.539-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z', color: 'bg-brand-terracotta/10 text-brand-terracotta' },
                { label: 'Saved Properties', value: '8', icon: 'M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z', color: 'bg-brand-forest/10 text-brand-forest' }
              ].map((stat) => (
                <div key={stat.label} className="bg-white rounded-[2rem] p-6 md:p-8 shadow-sm border border-gray-50 relative group hover:shadow-md transition-all">
                  <div className={`w-10 h-10 md:w-12 md:h-12 ${stat.color} rounded-xl flex items-center justify-center mb-4 md:mb-6`}>
                    <svg width="20" height="20" className="md:w-6 md:h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d={stat.icon} />
                    </svg>
                  </div>
                  <p className="text-3xl md:text-4xl font-bold text-text-main mb-1 md:mb-2">{stat.value}</p>
                  <p className="text-gray-400 font-bold text-[10px] md:text-xs uppercase tracking-widest">{stat.label}</p>
                </div>
              ))}
            </div>

            {/* Charts Row */}
            <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 md:gap-8">
              {/* Ratings Distribution */}
              <div className="bg-white rounded-[2rem] md:rounded-[2.5rem] p-6 md:p-10 shadow-sm border border-gray-50 space-y-6 md:space-y-8">
                <h3 className="text-lg md:text-xl font-bold text-text-main">Ratings Distribution</h3>
                <div className="h-[250px] md:h-[300px] w-full">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={ratingsData} margin={{ top: 20, right: 10, left: -20, bottom: 0 }}>
                      <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#F0F0F0" />
                      <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fill: '#A0A0A0', fontSize: 10, fontWeight: 600 }} dy={10} />
                      <YAxis axisLine={false} tickLine={false} tick={{ fill: '#A0A0A0', fontSize: 10, fontWeight: 600 }} />
                      <Tooltip cursor={{ fill: 'transparent' }} contentStyle={{ borderRadius: '16px', border: 'none', boxShadow: '0 10px 20px rgba(0,0,0,0.05)' }} />
                      <Bar dataKey="count" fill="#6B8E23" radius={[6, 6, 6, 6]} barSize={30} />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </div>

              {/* Issue Categories */}
              <div className="bg-white rounded-[2rem] md:rounded-[2.5rem] p-6 md:p-10 shadow-sm border border-gray-50 space-y-6 md:space-y-8">
                <h3 className="text-lg md:text-xl font-bold text-text-main">Issue Categories</h3>
                <div className="h-[250px] md:h-[300px] w-full relative">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={issueData}
                        cx="50%"
                        cy="50%"
                        innerRadius={50}
                        outerRadius={70}
                        paddingAngle={8}
                        dataKey="value"
                        stroke="none"
                      >
                        {issueData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                      </Pie>
                      <Tooltip contentStyle={{ borderRadius: '16px', border: 'none', boxShadow: '0 10px 20px rgba(0,0,0,0.05)' }} />
                      <Legend verticalAlign="bottom" height={36} iconType="circle" wrapperStyle={{ fontWeight: 600, fontSize: '12px', color: '#2C2C2C', paddingTop: '20px' }} />
                    </PieChart>
                  </ResponsiveContainer>
                </div>
              </div>
            </div>

            {/* Recent Reviews */}
            <div className="bg-white rounded-[2rem] md:rounded-[2.5rem] p-6 md:p-10 shadow-sm border border-gray-50 space-y-8 md:space-y-10">
              <div className="flex justify-between items-center">
                <h3 className="text-lg md:text-xl font-bold text-text-main">Recent Reviews</h3>
                <button className="text-brand-green font-bold text-xs md:text-sm hover:underline">View All</button>
              </div>
              
              <div className="space-y-6 md:space-y-8">
                {recentReviews.map((review, idx) => (
                  <div key={review.id} className={`space-y-3 md:space-y-4 ${idx !== recentReviews.length - 1 ? 'pb-6 md:pb-8 border-b border-gray-100' : ''}`}>
                    <div className="flex flex-col sm:flex-row justify-between items-start gap-2">
                      <h4 className="text-base md:text-lg font-bold text-text-main">{review.property}</h4>
                      <div className="flex gap-0.5 text-yellow-400">
                        {[...Array(5)].map((_, i) => (
                          <svg key={i} width="14" height="14" md:width="16" md:height="16" viewBox="0 0 24 24" fill={i < review.rating ? "currentColor" : "none"} stroke="currentColor" strokeWidth="2">
                            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                          </svg>
                        ))}
                      </div>
                    </div>
                    <p className="text-gray-500 text-sm md:text-base font-medium leading-relaxed line-clamp-2 md:line-clamp-none">{review.text}</p>
                    <p className="text-gray-400 text-[10px] md:text-xs font-bold uppercase tracking-wider">{review.date}</p>
                  </div>
                ))}
              </div>
            </div>
          </main>

        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Dashboard;
