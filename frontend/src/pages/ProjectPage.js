import React from "react";
import Navbar from "../parts/navbar/Navbar";
import Footer from "../parts/footer/Footer";
import {useTranslation} from "react-i18next";


const ProjectPage = () => {

    const links = ['hall-of-fame'];
    const {t} = useTranslation('common');

    return (
        <div className={'App'}>
            <Navbar links={links}/>
            <div id={'hall-of-fame'} className={'wallpaper-container'}
                 style={{backgroundImage: "url(images/wallpaper5.jpg)"}}>
                <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    backgroundColor: '#00000099',
                    textAlign: 'center',
                    minHeight: '100vh'
                }}>
                    <p style={{
                        color: 'white',
                        fontFamily: 'Open Sans',
                        fontWeight: 300,
                        marginTop: 50,
                        fontSize: 18,
                        marginBottom: 15
                    }}>{'Congratulations on solving the puzzle and welcome to the '}
                        <span style={{color: 'orange'}}>{'Hall of Fame'}</span></p>
                    <p style={{
                        color: 'orange',
                        fontFamily: 'Open Sans',
                        fontWeight: 300,
                        fontSize: 14
                    }}>{'// '}<span style={{color: 'white'}}>{'Enter your '}</span><span
                        style={{color: 'orange'}}>{'username'}
                    </span><span style={{color: 'white'}}>{' and leave your '}</span><span
                        style={{color: 'orange'}}>{'message'}</span>
                        <span style={{color: 'white'}}>{' visible to everyone who lands here!'}</span>
                    </p>
                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default ProjectPage;
