import './App.css';
import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Receipes from './pages/Receipes';


function App() {
  return (
    <div style={styles.body}>
    <Router>
      <div style ={styles.navbar}>
        <Link style={styles.link} to="/">Home</Link> 
        <Link style={styles.link} to="/about">About</Link>
        <Link style={styles.link} to="/contact">Contact Us </Link>
        <Link style={styles.link} to ="/receipes">Receipes</Link>
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />}/>
        <Route path="/receipes" element={<Receipes />}/>
      </Routes>
    </Router>
    </div>
  );
}

const styles = {

  navbar: {
    display: "flex",
    justifyContent: "center",
    padding: "15px 0px",
    backgroundColor: "rgba(17, 5, 2, 0.52)",
  },
  link: {
    color: "white",
    textDecoration: "none",
    fontSize: "18px",
    fontWeight: "bold",
    padding: "10px 15px",
    borderRadius: "5px",
    transition: "background 0.3s",
  }
};

export default App;
