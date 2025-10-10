import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from './pages/Home'
import Survey from './pages/Survey'
import FaqsView from './pages/components/views/FaqsView'
import PrizeView from './pages/components/views/PrizeView'
import ActivitiesView from './pages/components/views/ActivitiesView'
import ItineraryView from './pages/components/views/ItineraryView'
import MainLayout from './pages/components/MainLayout'
import NoLayout from './pages/components/NoLayout'
import Organizers from './pages/components/Organizers'
import Gallery from './pages/components/Gallery'


function App() {
  return (
    <Router>
      <Routes>
        {/* Rutas con Navbar + Footer */}
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/itinerary" element={<ItineraryView />} />
          <Route path="/faqs" element={<FaqsView />} />
          <Route path="/prizes" element={<PrizeView />} />
          <Route path="/activities" element={<ActivitiesView />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/organizers" element={<Organizers />} />
        </Route>

        {/* Rutas sin Navbar + Footer */}
        <Route element={<NoLayout />}>
          <Route path="/survey" element={<Survey />} />
        </Route>
      </Routes>
    </Router>
  )
}

export default App