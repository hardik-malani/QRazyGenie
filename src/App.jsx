import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import About from "./pages/About";
import { useSelector } from "react-redux";
import { useEffect } from "react";


function App() {

    const Store = useSelector((state) => state.linkValue);
 
    // useEffect(() => {
    //   console.log(Store)
    // })

  return (
    <div className="no-scroll">
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About/>} />
      </Routes>
      <Footer/>
    </Router>
    </div>
  );
}

export default App;
