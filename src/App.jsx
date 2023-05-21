import React from "react";
import "./App.css";
import MainNav from "./components/Header/MainNav";
import TopNav from "./components/Header/TopNav";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Company from "./pages/Company";
import Elements from "./pages/Elements";
import ItSolutions from "./pages/ItSolutions";
import CaseStudies from "./pages/CaseStudies";
import Blog from "./pages/Blog";
import Hero from "./components/HeroSection/Hero";
import About from "./components/About/About";

function App() {




  return (
    <>
      <BrowserRouter>
        <div>
          <TopNav />
          <MainNav />
          
          <Routes>
            <Route path="/home" component={<Home />} />
            <Route path="/company" component={<Company />} />
            <Route path="/itsolutions" component={<ItSolutions />} />
            <Route path="/elements" component={<Elements />} />
            <Route path="/casestudies" component={<CaseStudies />} />
            <Route path="/blog" component={<Blog />} />
          </Routes>
        </div>
      </BrowserRouter>
      <Hero />
      <About />
    </>
  );
}

export default App;
