import Navbar from "./parts/navbar/Navbar";
import './App.css';
import React from "react";
import Footer from "./parts/footer/Footer";
import About from "./pages/about/About";
import Projects from "./pages/projects/Projects";
import Skills from "./pages/skills/Skills";
import Hobby from "./pages/hobby/Hobby";
import Contact from "./pages/contact/Contact";
import { BrowserRouter as Router, Redirect } from "react-router-dom";

function App() {

  return (
      <Router>
          <div className={'App'}>
              <Navbar/>
              <div className={'page'}>
                  <About/>
                  <Projects/>
                  <Skills/>
                  <Hobby/>
                  <Contact/>
                  <Footer/>
              </div>
          </div>
          <Redirect from="/*" to="/"/>
      </Router>
  );
}

export default App;
