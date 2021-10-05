import React, {useEffect} from "react";
import Navbar from "../parts/navbar/Navbar";
import Footer from "../parts/footer/Footer";
import {useTranslation} from "react-i18next";
import NotFoundElement from "../components/NotFoundElement/NotFoundElement";
import MysteryCharacter from "../components/MysteryCharacter/MysteryCharacter";
import Menu from "../components/Menu/Menu";

const NotFoundPage = ({history}) => {

    const {t} = useTranslation('common');

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div style={{overflow: 'hidden'}}>
            <Navbar links={['unknown']} defualtTheme={'special'} languageSelector/>
            <div id={'unknown'} className={'wallpaper-container'} style={{backgroundImage: "url(images/wallpaper.jpg)"}}>
                <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    backgroundColor: '#00000099',
                    textAlign: 'center',
                    justifyContent: 'space-evenly',
                    height: '100vh',
                }}>
                    <div>
                        <MysteryCharacter character={'0'} pos={0}/>
                        <MysteryCharacter character={'1'} pos={1}/>
                    </div>
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
                    <div>
                        <MysteryCharacter character={'1'} pos={0}/>
                        <MysteryCharacter character={'0'} pos={1}/>
                    </div>
                </div>
            </div>
            <Menu/>
            <Footer/>
        </div>
    )
}

export default NotFoundPage;
