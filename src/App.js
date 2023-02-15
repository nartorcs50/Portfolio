import "./App.css";
import Contact from "./components/Contact";
import Exp from "./components/Exp";
import Projects from "./components/Projects";
import Home from "./pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="app">
      <Router>
        <Routes>
           <Route path="/" element={<Home />} />
           <Route path="#projects" component={<Projects />} />
           <Route path="/exp" component={<Exp />} />
           <Route path="/contact" component={<Contact />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
