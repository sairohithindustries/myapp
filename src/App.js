import './App.css';
import {React} from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Receipes from './pages/Receipes';
import Products from './pages/Products';


function App() {

  
  //in case if you want to redirect in future.
    // useEffect(() => {
    //   window.location.href = "https://www.google.com";
    // }, []);

    // return null;

  return (
    <>
    <Router>
      <div style={styles.appContainer}>
      {/* <div style ={styles.navbar}>
        <Link style={styles.link} to="/myapp">Home</Link> 
        <Link style={styles.link} to ="/myapp/products">Products</Link>
        <Link style={styles.link} to="/myapp/contact">Contact Us </Link>
      </div> */}
      <Routes>
        <Route path="/myapp" element={<Home />} />
        <Route path="/myapp/contact" element={<Contact />}/>
        <Route path="/myapp/products" element={<Products/>}/>
      </Routes>
      </div>
    </Router>
    </>
    
  );
}

const styles = {

  appContainer : {
    display: "flex",
    flexDirection : "column",    
    justifyContent: "center", // Centers the navbar links
    width: "100%",
    backgroundColor: "rgba(251, 251, 249, 1)",
    padding: "0px 0px",
    gap : "0px"
  },

  navbar: {
    display: "flex",
    justifyContent: "center",
    padding: "15px 0px",
    backgroundColor: "rgba(17, 5, 2, 0.52)",
    width : "100%",
    position: "sticky",   // Makes it stick to the top
    top: "0",             // Sticks to the top of the viewport
    zIndex: "1000",       // Ensures it's above other elements
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
