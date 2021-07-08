import About from "../../pages/about/About";
import Projects from "../../pages/projects/Projects";
import Skills from "../../pages/skills/Skills";
import Hobby from "../../pages/hobby/Hobby";
import Contact from "../../pages/contact/Contact";
import SpecialSection from "../SpecialSection/SpecialSection";
import React from "react";
import {SectionWrapper} from "../PageWrappers/PageWrappers";
import PropTypes from 'prop-types';

const PageContent = ({showContent, setShowContent}) => {

    const revealInfo = () => {
        setShowContent(true);
        localStorage.setItem('reveal', 'PAGE_REVEALED');
    }

    return (
        showContent ?
        <SectionWrapper>
            <About/>
            <Projects/>
            <Skills/>
            <Hobby/>
            <Contact/>
        </SectionWrapper> : <SpecialSection revealInfo={revealInfo}/>
    )
}

PageContent.propTypes = {
    showContent: PropTypes.bool.isRequired,
    setShowContent: PropTypes.func.isRequired
}

export default PageContent;
