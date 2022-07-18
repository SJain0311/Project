import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from './components/Home';
import Navbar from './components/Navbar';
import Showdata from './components/Showdata';
import About from './components/About';

function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <div className="fluid-container" >
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/about" element={<About />} />
            <Route exact path="/show/:id" element={<Showdata />} />
          </Routes>

        </div>
      </Router>
    </div>
  );
}

export default App;
