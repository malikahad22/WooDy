import React from "react";
import Home from "./Components/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Page from "./Components/Page";
import AboutUs from "./Components/Pages/AboutUs";
import Services from "./Components/Pages/Services";
import OurProjects from "./Components/Pages/OurProjects";
import Features from "./Components/Pages/Features";
import Quotes from "./Components/Pages/Quotes";
import Ourteam from "./Components/Pages/OurTeam";
import Contact from "./Components/Pages/Contact";
function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/*" element={<Page/>}/>
          <Route path="/about" element={<AboutUs/>}/>
          <Route path='/service' element={<Services/>}/>
          <Route path="/projects" element={<OurProjects/>}/>
          <Route path="/feature" element={<Features/>}/>
          <Route path="/quote" element={<Quotes/>}/>
          <Route path="/team" element={<Ourteam/>}/>
          <Route path= '/contact' element={<Contact/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
