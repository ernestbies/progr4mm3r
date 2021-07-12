import About from "../../pages/about/About";
import Projects from "../../pages/projects/Projects";
import Skills from "../../pages/skills/Skills";
import Hobby from "../../pages/hobby/Hobby";
import Contact from "../../pages/contact/Contact";
import SpecialSection from "../SpecialSection/SpecialSection";
import React from "react";
import {SectionWrapper} from "../PageWrappers/PageWrappers";
import PropTypes from 'prop-types';
import FAB from "../FAB/FAB";

const PageContent = ({showContent, setShowContent, withAnimations}) => {

    const revealInfo = () => {
        setShowContent(true);
        localStorage.setItem('reveal', 'PAGE_REVEALED');
    }

    return (
        showContent ?
        <SectionWrapper withAnimations={withAnimations}>
            <About/>
            <Projects/>
            <Skills/>
            <Hobby/>
            <Contact/>
            <FAB/>
        </SectionWrapper> : <SpecialSection revealInfo={revealInfo}/>
    )
}

PageContent.propTypes = {
    showContent: PropTypes.bool.isRequired,
    setShowContent: PropTypes.func.isRequired,
    withAnimations: PropTypes.bool
}

PageContent.defaultProps = {
    withAnimations: false
}

export default PageContent;
