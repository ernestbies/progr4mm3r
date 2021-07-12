import React from 'react';
import "./Contact.styles.css";
import ContactForm from "../../components/ContactForm/ContactForm";
import {useTranslation} from "react-i18next";
import SectionBadge from "../../components/SectionBadge/SectionBadge";
import NotReleasedProject from "../../components/NotReleasedProject/NotReleasedProject";
import {NOT_RELEASED_PROJECT} from "../../utils/information";
import ContactIcon from "../../components/ContactIcon/ContactIcon";

const Contact = () => {

    const {t} = useTranslation('common');

    return (
        <div id={'contact'}>
            <div className={'contact-list'}>
                <SectionBadge
                    content={t('contact_with_me')}
                    position={'end'}
                    signColor={'#29003b'}
                    signFontColor={'white'}
                    backgroundColor={'white'}
                    fontColor={'black'}
                    specialNumber={5}
                    lightMode
                />
                <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                    <p className={'inform-text'}>{t('contact_text1')}<br/>
                        {t('contact_text2')} <code className={'scale-text'}>e-mail</code> {t('or')} <code className={'scale-text'}>{t('contact_form')}</code> {t('on')} {t('my_website')}.</p>
                    <div style={{width: 100, height: 1, backgroundColor: 'white'}}/>
                </div>
                <div className={'contact-icons'}>
                    <ContactIcon type={'github'}/>
                    <ContactIcon type={'bitbucket'}/>
                    <ContactIcon type={'linkedin'}/>
                    <ContactIcon type={'email'}/>
                    <ContactIcon type={'discord'}/>
                </div>
            </div>
            <div className={'wallpaper-container'} style={{backgroundImage: "url(images/wallpaper4.jpg)"}}>
                <div style={{
                    backgroundColor: '#00000099',
                    textAlign: 'center',
                    minHeight: 650
                }}>
                    <SectionBadge content={t('dm')}
                                  subtitle={'contact'}
                                  position={'start'}
                                  specialNumber={51}
                                  signColor={'#29003b'}
                                  signFontColor={'white'}
                                  backgroundColor={'white'}
                                  fontColor={'black'}
                                  lightMode/>
                    <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                        <ContactForm/>
                        <p style={{
                            color: 'white',
                            fontFamily: 'Roboto Condensed',
                            fontStyle: 'italic',
                            fontSize: 10,
                        }}>
                            <span style={{color: 'red'}}>*</span> {t('contact_info')} {':)'}</p>
                    </div>
                </div>
            </div>
            <NotReleasedProject specialCharacter={'~'}
                                whiteText={'click_here_to'}
                                coloredText={'cd ' + NOT_RELEASED_PROJECT}
                                link={'/hall-of-fame'}
            />
        </div>
    );
}

export default Contact;
