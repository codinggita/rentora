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
import ProtectedRoute from './components/ProtectedRoute'

function App() {
  const token = localStorage.getItem('token');
  const location = useLocation();

  // Hide navbar on Landing (unauthenticated root), Login, and Signup pages
  const hideNavbar = (!token && location.pathname === '/') || 
                     location.pathname === '/login' || 
                     location.pathname === '/signup';

  return (
    <div className="min-h-screen flex flex-col bg-bg-off-white">
      {!hideNavbar && <Navbar />}
      <main className="flex-grow">
        <Routes>
          {/* Landing page for fresh users, Home dashboard for logged in users */}
          <Route path="/" element={token ? <Home /> : <Landing />} />
          
          <Route path="/explore" element={<Explore />} />
          <Route path="/reviews" element={
            <ProtectedRoute>
              <Reviews />
            </ProtectedRoute>
          } />
          <Route path="/about" element={<About />} />
          <Route path="/property/:id" element={<PropertyDetails />} />
          
          {/* Prevent logged in users from seeing Login/Signup */}
          <Route path="/login" element={!token ? <Login /> : <Navigate to="/" replace />} />
          <Route path="/signup" element={!token ? <Signup /> : <Navigate to="/" replace />} />
          
          {/* Catch all */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
