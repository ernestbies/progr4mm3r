import React, {useEffect} from "react";
import Navbar from "../parts/navbar/Navbar";
import Footer from "../parts/footer/Footer";
import MessageBox from "../components/MessageBox";
import MessageFaq from "../components/MessageFaq";
import {Link} from "react-router-dom";

const ProjectPage = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className={'App'}>
            <Navbar links={['hall-of-fame']} languageSelector={false}/>
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
                        marginTop: 75,
                        fontSize: 20,
                        marginBottom: 40
                    }}>{'Welcome to the '}
                        <span style={{color: 'orange'}}>{'Hall of Fame'}</span></p>
                    <p style={{
                        color: 'orange',
                        fontFamily: 'Source Code Pro',
                        fontWeight: 300,
                        fontSize: 13
                    }}>{'// '}<span style={{color: 'white'}}>{'Enter your '}</span><span
                        style={{color: 'orange'}}>{'username'}
                    </span><span style={{color: 'white'}}>{' and leave your '}</span><span
                        style={{color: 'orange'}}>{'message'}</span>
                        <span style={{color: 'white'}}>{' visible to everyone who lands here.'}</span>
                    </p>
                    <p style={{
                        color: 'orange',
                        fontFamily: 'Source Code Pro',
                        fontWeight: 300,
                        marginTop: -10,
                        fontSize: 13
                    }}>{'// '}<span style={{color: 'white'}}>
                        {'If you want to read the detailed information please see the '}
                    </span>
                        <a href={"#faq"} style={{color: 'orange', fontWeight: 'bold'}}>{'FAQ'}</a>
                        <span style={{color: 'white', fontWeight: 300}}>{' section.'}</span>
                    </p>
                    <p style={{
                        color: 'orange',
                        fontFamily: 'Source Code Pro',
                        fontWeight: 300,
                        fontSize: 13,
                        marginTop: -10,
                        marginBottom: 40
                    }}>{'// '}<span style={{color: 'white'}}>{'This page has been visited '}</span><span
                        style={{color: 'orange', fontWeight: 'bold'}}>{0}</span>
                        <span style={{color: 'white'}}>{' times. Thank you.'}</span>
                    </p>
                    <MessageBox/>
                    <Link to={'/'}>
                        <button className={'orange-button'}>
                            {'Back to the main page'}
                        </button>
                    </Link>
                    <MessageFaq/>
                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default ProjectPage;
