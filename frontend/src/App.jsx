import { Routes, Route, Navigate, useLocation } from 'react-router-dom'
import Navbar from './components/Navbar'

// Page Imports
import Landing from './pages/Landing'
import Home from './pages/Home'
import Explore from './pages/Explore'
import Reviews from './pages/Reviews'
import About from './pages/About'
import PropertyDetails from './pages/PropertyDetails'
import Login from './pages/Login'
import Signup from './pages/Signup'
import Dashboard from './pages/Dashboard'
import MyReviews from './pages/MyReviews'
import SavedProperties from './pages/SavedProperties'
import ProfileSettings from './pages/ProfileSettings'
import ProtectedRoute from './components/ProtectedRoute'

function App() {
  const location = useLocation();

  // Hide navbar on Landing, Login, and Signup pages
  const hideNavbar = location.pathname === '/' || 
                     location.pathname === '/login' || 
                     location.pathname === '/signup';

  return (
    <div className="min-h-screen flex flex-col bg-bg-off-white">
      {!hideNavbar && <Navbar />}
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/home" element={<Home />} />
          <Route path="/explore" element={<Explore />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/my-reviews" element={<MyReviews />} />
          <Route path="/saved-properties" element={<SavedProperties />} />
          <Route path="/settings" element={<ProfileSettings />} />
          <Route path="/reviews" element={<Reviews />} />
          <Route path="/about" element={<About />} />
          <Route path="/property/:id" element={<PropertyDetails />} />
          
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
    </div>
  );
}

export default App
