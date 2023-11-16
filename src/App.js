import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Academics from "./Academics/Academics";
import Admission from "./Admissions/Admission";
import Home from "./Home";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <nav className="navbar">
          <Link to="/">Home</Link>
          <span className="nav-divider">|</span>
          <Link to="/academics">Academics</Link>
          <span className="nav-divider">|</span>
          <Link to="/admission">Admission</Link>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/academics" element={<Academics />} />
          <Route path="/admission" element={<Admission />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
