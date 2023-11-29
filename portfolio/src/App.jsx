import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./components/Homepage";
import Footer from "./components/Footer";
import About from "./components/About";
import Navigation from "./components/Navigation";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";


function App() {
  return (
    <>

      <div className="App">
        <BrowserRouter>

          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/Navigation" element={<Navigation />} />
            
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
