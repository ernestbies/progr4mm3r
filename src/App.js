import Navbar from "./components/Navbar";
import './App.css';
import React from "react";
import Footer from "./components/Footer";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Hobby from "./components/Hobby";
import Contact from "./components/Contact";

function App() {

  return (
    <div className={'App'}>
      <Navbar/>
      <About/>
      <Projects/>
      <Skills/>
      <Hobby/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
