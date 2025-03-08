
import{ BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

// PAGES
import Home from './pages/home'
import About from './pages/About'
import Contact from './pages/Contact'
import Projects from './pages/Projects';

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/projects" element={<Projects/>}></Route>
        <Route path="/contact" element={<Contact/>}></Route>

      </Routes>
    </Router>
  )
}

export default App
