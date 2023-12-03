import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Footer from "./components/Footer";
import About from "./pages/About";
import Navigation from "./components/Navigation";
import Resume from "./pages/Resume";
import Navbar2 from "./components/Navbar2";
import Project from "./pages/Project";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";


function App() {
  return (
    <>
    <Navbar2 />

      <div className="App">
        <BrowserRouter>

          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/Navigation" element={<Navigation />} />
            <Route path="/About" element={<About />} />
            <Route path="/Project" element={<Project />} />
            <Route path="/Resume" element={<Resume />} />
 
            
          </Routes>
          
        </BrowserRouter>

      </div>
      <div>

    
      <Footer />

      </div>
    </>


  );
}

export default App;
