import './App.css'
import { Route, Routes } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import AvailableTours from './components/tours/AvailableTours'
import TourMediaDetails from './components/tours/TourMediaDetails'
import GlobusTours from './components/tours/GlobusTours'
import CosmosTours from './components/tours/Cosmos'

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/available-tours" element={<AvailableTours />} />
          <Route path="/tour-media/:id" element={<TourMediaDetails />} />
          <Route path="/globus-tours" element={<GlobusTours />} />
          <Route path="/avalon-tours" element={<AvailableTours />} />
          <Route path="/cosmos-tour" element={<CosmosTours />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
