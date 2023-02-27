
import AboutUs from "./pages/AboutUs";
//GlobalStyle
import GlobalStyle from "./components/GlobalStyle";

import Nav from "./components/Nav";
import ContactUs from "./pages/ContactUs";
import OurWork from "./pages/OurWork";

import {Routes, Route, useLocation} from "react-router-dom"
import MovieDetail from "./pages/MovieDetail";
//Animation
import { AnimatePresence } from "framer-motion";
import ScrollTop from "./components/ScrollTop";
import Home from "./pages/Home";
import Footer from "./components/Footer";


function App() {
  const location = useLocation();


  return (
    <div className="App">
      <GlobalStyle/>
      <ScrollTop/>
      <Nav/>
      {/* Router */}
      <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
      <Route path="/" exact element={<Home/>}/>
        <Route path="/about" element={<AboutUs/>}/>
        <Route path="/work" element={<OurWork/>} />
        <Route path="/work/:id" exact element={<MovieDetail/>} />
        <Route path="/contact" element={<ContactUs/>} />
      </Routes>
      </AnimatePresence>
      <Footer/>
    </div>
  );
}

export default App;
