import React from "react";
import Navbar from "../parts/navbar/Navbar";
import About from "./about/About";
import Projects from "./projects/Projects";
import Skills from "./skills/Skills";
import Hobby from "./hobby/Hobby";
import Contact from "./contact/Contact";
import Footer from "../parts/footer/Footer";
import Other from "./other/Other";

const MainPage = () => {

    const links = ['about', 'projects', 'skills', 'hobby', 'contact', 'other'];

    return (
        <div className={'App'}>
            <Navbar links={links} languageSelector/>
            <div className={'page'}>
                <About/>
                <Projects/>
                <Skills/>
                <Hobby/>
                <Contact/>
                <Other/>
                <Footer/>
            </div>
        </div>
    );
}

export default MainPage;
