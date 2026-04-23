import { Routes, Route, Link } from 'react-router-dom'

function Home() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-slate-900 text-white">
      <h1 className="text-4xl font-bold mb-4">Welcome to Rentora</h1>
      <p className="text-slate-400 mb-8">Find your next perfect stay.</p>
      <Link to="/listings" className="bg-blue-600 hover:bg-blue-500 px-6 py-2 rounded-lg font-semibold transition-colors">
        View Listings
      </Link>
    </div>
  )
}

function Listings() {
  return (
    <div className="p-8 bg-slate-900 min-h-screen text-white">
      <h1 className="text-3xl font-bold mb-6">Available Listings</h1>
      <Link to="/" className="text-blue-400 hover:underline">← Back to Home</Link>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
        {[1, 2, 3].map((i) => (
          <div key={i} className="bg-slate-800 p-6 rounded-xl border border-slate-700">
            <div className="h-40 bg-slate-700 rounded-lg mb-4"></div>
            <h2 className="text-xl font-semibold">Luxury Apartment {i}</h2>
            <p className="text-slate-400 mt-2">$200 / night</p>
          </div>
        ))}
      </div>
    </div>
  )
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/listings" element={<Listings />} />
    </Routes>
  )
}

export default App
