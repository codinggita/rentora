import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

function Home() {
  return (
    <div className="flex-grow bg-bg-off-white px-10 lg:px-20 py-20">
      <h1 className="text-5xl font-bold text-text-main">
        Landing Page placeholder
      </h1>
      <p className="text-xl text-gray-600 mt-4">
        Feature by feature implementation in progress...
      </p>
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
