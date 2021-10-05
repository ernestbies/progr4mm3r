import React, {useEffect, useState} from "react";
import Navbar from "../parts/navbar/Navbar";
import Footer from "../parts/footer/Footer";
import Intro from "../components/Intro/Intro";
import {SiteContent} from "../components/PageWrappers/PageWrappers";
import PageContent from "../components/PageContent/PageContent";

const MainPage = () => {

    const links = ['about', 'projects', 'skills', 'hobby', 'contact'];
    const [showContent, setShowContent] = useState(false);
    const [playAnimations, setPlayAnimations] = useState(false);

    useEffect(() => {
        const reveal = localStorage.getItem('reveal');
        if (reveal) {
            setShowContent(true);
        } else {
            setPlayAnimations(true);
        }
    }, []);

    return (
        <>
            <Navbar links={links} languageSelector enableContent={setShowContent}/>
            <SiteContent>
                <Intro/>
                <PageContent showContent={showContent} setShowContent={setShowContent} withAnimations={playAnimations}/>
            </SiteContent>
            <Footer/>
        </>
    );
}

export default MainPage;
