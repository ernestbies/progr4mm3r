import About from "../../pages/about/About";
import Projects from "../../pages/projects/Projects";
import Skills from "../../pages/skills/Skills";
import Hobby from "../../pages/hobby/Hobby";
import Contact from "../../pages/contact/Contact";
import React from "react";
import {SectionWrapper} from "../PageWrappers/PageWrappers";
import Menu from "../Menu/Menu";
import NotReleasedProject from "../NotReleasedProject/NotReleasedProject";

const PageContent = () => {

    return (
        <SectionWrapper>
            <About/>
            <Projects/>
            <Skills/>
            <Hobby/>
            <Contact/>
            <NotReleasedProject/>
            <Menu/>
        </SectionWrapper>
    )
}

export default PageContent;
