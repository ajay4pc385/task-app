import React from "react";
import { BrowserRouter as Router , Routes ,Route  } from "react-router-dom";
import Home from "./pages/Home";
import Headers from "./Components/Headers";
import Footer from "./Components/Footer";
import About from "./pages/About";
import ServicesSection from "./Components/Services/HeroSection";

function App() {
  return (
    <div className="App">
   <Router>
    <Headers/>
    <Routes>
  <Route path="/" element={<Home/>}/>
  <Route path="/about-us" element={<About/>}/>
  <Route path="/services" element={<ServicesSection/>}/>


    </Routes>
    <Footer/>
   </Router>
    </div>
  );
}

export default App;
