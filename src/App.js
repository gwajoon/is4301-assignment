import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
} from "react-router-dom";
import Academics from "./Academics/Academics";
import Admission from "./Admissions/Admission";
import Home from "./Home";
import "./App.css";
import Login from "./Login/Login";
import Register from "./Register/Register";

function App() {
  return (
    <Router>
      <Login />
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
          <Route path="/register" element={<Register />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
