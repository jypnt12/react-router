
import AboutUs from "./pages/AboutUs";
//GlobalStyle
import GlobalStyle from "./components/GlobalStyle";

import Nav from "./components/Nav";
import ContactUs from "./pages/ContactUs";
import OurWork from "./pages/OurWork";

import {Routes, Switch, Route} from "react-router-dom"

function App() {
  return (
    <div className="App">
      <GlobalStyle/>
      <Nav/>
      {/* Router */}
      <Routes>
        <Route path="/" exact element={<AboutUs/>}/>
        <Route path="/work" element={<OurWork/>} />
        <Route path="/contact" element={<ContactUs/>} />
      </Routes>
      
    </div>
  );
}

export default App;
