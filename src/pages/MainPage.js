import React from "react";
import Navbar from "../parts/navbar/Navbar";
import Footer from "../parts/footer/Footer";
import Intro from "../components/Intro/Intro";
import {SiteContent} from "../components/PageWrappers/PageWrappers";
import PageContent from "../components/PageContent/PageContent";

const MainPage = () => {

    const links = ['about', 'projects', 'skills', 'hobby', 'contact'];

    return (
        <>
            <Navbar links={links} languageSelector/>
            <SiteContent>
                <Intro/>
                <PageContent/>
            </SiteContent>
            <Footer/>
        </>
    );
}

export default MainPage;
