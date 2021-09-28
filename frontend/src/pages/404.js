import React, {useEffect} from "react";
import Navbar from "../parts/navbar/Navbar";
import Footer from "../parts/footer/Footer";
import {useTranslation} from "react-i18next";
import NotFoundElement from "../components/NotFoundElement/NotFoundElement";
import GlitchedText from "../components/GlitchedText/GlitchedText";
import {mysteryName} from "../utils/information";
import {CounterSection} from "../components/CounterSection/CounterSection";

const NotFoundPage = ({history}) => {

    const {t} = useTranslation('common');

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className={'App'}>
            <Navbar links={['unknown']} defualtTheme={'special'} languageSelector/>
            <div id={'unknown'} className={'wallpaper-container'}
                 style={{backgroundImage: "url(images/wallpaper.jpg)"}}>
                <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    backgroundColor: '#00000099',
                    textAlign: 'center',
                    height: '80vh',
                    justifyContent: 'center'
                }}>
                    <div style={{
                        width: '95%',
                        maxWidth: 700,
                        backgroundColor: '#00000090',
                        paddingTop: 30,
                        paddingBottom: 30,
                    }}>
                        <div>
                            <NotFoundElement text={t('page_not_found')}/>
                            <p style={{
                                color: '#A9A9A9',
                                fontFamily: 'Source Code Pro',
                                fontWeight: 300
                            }}>
                                {t('page_not_found_desc')}
                            </p>
                            <button style={{margin: 15}} className={'orange-button'} onClick={() => history.push('/')}>
                                {t('back_to_main_page')}
                            </button>
                        </div>
                    </div>
                </div>
                <div style={{
                    height: 250,
                    backgroundColor: 'black',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                }}>
                    <GlitchedText
                        specialCharacter={'~'}
                        whiteText={mysteryName.slice(0, 3).join(" ")}
                        coloredText={mysteryName.slice(3, mysteryName.length).join(" ")}
                    />
                </div>
                <CounterSection/>
            </div>
            <Footer/>
        </div>
    )
}

export default NotFoundPage;
