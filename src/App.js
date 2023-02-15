
import AboutUs from "./pages/AboutUs";
//GlobalStyle
import GlobalStyle from "./components/GlobalStyle";

import Nav from "./components/Nav";
import ContactUs from "./pages/ContactUs";
import OurWork from "./pages/OurWork";

import {Routes, Route} from "react-router-dom"
import MovieDetail from "./pages/MovieDetail";

function App() {
  return (
    <div className="App">
      <GlobalStyle/>
      <Nav/>
      {/* Router */}
      <Routes>
        <Route path="/" exact element={<AboutUs/>}/>
        <Route path="/work" element={<OurWork/>} />
        <Route path="/work/:id" exact element={<MovieDetail/>} />
        <Route path="/contact" element={<ContactUs/>} />
      </Routes>
      
    </div>
  );
}

export default App;
