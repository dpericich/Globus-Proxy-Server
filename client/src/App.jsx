import './App.css'
import { Route, Routes } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import AvailableTours from './components/tours/AvailableTours'
import TourMediaDetails from './components/tours/TourMediaDetails'
import GlobusTours from './components/tours/GlobusTours'
import CosmosTours from './components/tours/CosmosTours'
import ThankYou from './pages/ThankYou'
import NotFound from './pages/NotFound'
import AvalonTours from './components/tours/avalon/AvalonTours'
import { GlobusToursContextProvider } from './context/GlobusContext'
import { CosmosToursContextProvider } from './context/CosmosContext'
import { AvalonToursContextProvider } from './context/AvalonContext'
import AvalonTourMediaDetails from './components/tours/avalon/AvalonTourMediaDetails'

function App() {
  return (
    <>
      <GlobusToursContextProvider>
        <AvalonToursContextProvider>
          <CosmosToursContextProvider>
            <Routes>
              <Route path="/" element={<Layout />}>
                <Route index element={<Home />} />
                <Route path="/available-tours" element={<AvailableTours />} />
                <Route
                  path="/tour-media/:id/:brand"
                  element={<TourMediaDetails />}
                />
                <Route
                  path="/avalon/tour-media/:id/:brand"
                  element={<AvalonTourMediaDetails />}
                />
                <Route
                  path="/avalon-tour-media/:id/:brand"
                  element={<AvalonTourMediaDetails />}
                />
                <Route path="/globus-tours" element={<GlobusTours />} />
                <Route path="/avalon-tours" element={<AvalonTours />} />
                <Route path="/cosmos-tours" element={<CosmosTours />} />
                <Route path="/thank-you" element={<ThankYou />} />

                <Route path="*" element={<NotFound />} />
              </Route>
            </Routes>
          </CosmosToursContextProvider>
        </AvalonToursContextProvider>
      </GlobusToursContextProvider>
    </>
  )
}

export default App
