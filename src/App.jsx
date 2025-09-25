import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from './pages/Home'
import Survey from './pages/Survey'
import FAQSAccordion from './pages/components/FAQSAccordion'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/survey" element={<Survey />} />
        <Route path="/faqs" element={<FAQSAccordion />} />
      </Routes>
    </Router>
  )
}

export default App