import React from "react";
import { BrowserRouter as Router , Routes ,Route  } from "react-router-dom";
import Home from "./pages/Home";
import Headers from "./Components/Headers";
import Footer from "./Components/Footer";
function App() {
  return (
    <div className="App">
   <Router>
    <Headers/>
    <Routes>
  <Route path="/" element={<Home/>}/>
    </Routes>
    <Footer/>
   </Router>
    </div>
  );
}

export default App;
