import './App.css'
import { Route, Routes } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import AvailableTours from './pages/AvailableTours'

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/available-tours" element={<AvailableTours />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
