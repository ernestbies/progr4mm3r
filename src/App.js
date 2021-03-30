import Navbar from "./parts/Navbar";
import './App.css';
import React from "react";
import Footer from "./parts/Footer";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Skills from "./pages/Skills";
import Hobby from "./pages/Hobby";
import Contact from "./pages/Contact";
import { BrowserRouter as Router, Redirect } from "react-router-dom";

function App() {

  return (
      <Router>
          <div className={'App'}>
              <Navbar/>
              <About/>
              <Projects/>
              <Skills/>
              <Hobby/>
              <Contact/>
              <Footer/>
          </div>
          <Redirect from="/*" to="/"/>
      </Router>
  );
}

export default App;
