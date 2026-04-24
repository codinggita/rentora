import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

import Hero from './components/Hero'
import FeaturedProperties from './components/FeaturedProperties'
import HowItWorks from './components/HowItWorks'
import TrustSection from './components/TrustSection'
import FinalCTA from './components/FinalCTA'

function Home() {
  return (
    <div className="flex flex-col">
      <Hero />
      <FeaturedProperties />
      <HowItWorks />
      <TrustSection />
      <FinalCTA />
    </div>
  )
}

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-bg-off-white">
      <Navbar />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App
