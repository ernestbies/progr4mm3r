import React from "react";
import Navbar from "../parts/navbar/Navbar";
import Footer from "../parts/footer/Footer";
import {useTranslation} from "react-i18next";
import NotFoundElement from "../components/NotFoundElement/NotFoundElement";

const NotFoundPage = ({history}) => {

    const {t} = useTranslation('common');

    return (
        <div className={'App'}>
            <Navbar links={['404']} languageSelector/>
            <div id={'404'} className={'wallpaper-container'}
                 style={{height: '100vh', backgroundImage: "url(images/wallpaper5.jpg)"}}>
                <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    backgroundColor: '#00000099',
                    textAlign: 'center',
                    height: '100vh',
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
            </div>
            <Footer/>
        </div>
    )
}

export default NotFoundPage;
