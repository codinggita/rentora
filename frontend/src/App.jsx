import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'

// Page Imports
import Home from './pages/Home'
import Explore from './pages/Explore'
import Reviews from './pages/Reviews'
import About from './pages/About'
import PropertyDetails from './pages/PropertyDetails'
import Login from './pages/Login'
import Signup from './pages/Signup'
import ProtectedRoute from './components/ProtectedRoute'

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-bg-off-white">
      <Navbar />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/explore" element={<Explore />} />
          <Route path="/reviews" element={
            <ProtectedRoute>
              <Reviews />
            </ProtectedRoute>
          } />
          <Route path="/about" element={<About />} />
          <Route path="/property/:id" element={<PropertyDetails />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </main>
    </div>
    
  )
}

export default App
