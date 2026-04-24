import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'

function Home() {
  return (
    <div className="min-h-screen bg-[#FAF9F6] px-10 lg:px-20 py-20">
      <h1 className="text-5xl font-bold text-[#2C2C2C]">
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
    <div className="min-h-screen bg-[#FAF9F6]">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  )
}

export default App
