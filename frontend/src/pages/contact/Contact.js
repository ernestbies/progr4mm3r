import React from 'react';
import {FaGithub, FaBitbucket} from 'react-icons/fa';
import {CgMail} from "react-icons/cg";
import contact from "../../utils/contact";
import "./Contact.styles.css";
import ContactForm from "../../components/ContactForm/ContactForm";
import {useTranslation} from "react-i18next";
import {DiscordIcon} from "../../components/DiscordIcon/DiscordIcon";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import NotReleasedProject from "../../components/NotReleasedProject/NotReleasedProject";
import {NOT_RELEASED_PROJECT} from "../../utils/information";

const Contact = () => {

    const {t} = useTranslation('common');

    return (
        <div id={'contact'}>
            <div className={'contact-list'}>
                <SectionTitle
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
                    <p style={{color: 'white', fontWeight: 300, fontSize: 15, fontFamily: 'Open Sans'}}>{t('contact_text1')}<br/>
                        {t('contact_text2')} ({t('most_preferred')} <code style={{fontSize: 14}}>e-mail</code>, <code style={{fontSize: 14}}>Discord</code> {t('or')} <code style={{fontSize: 14}}>{t('contact_form')} </code>
                        {t('on')} {t('my_website')}).</p>
                    <div style={{width: 100, height: 1, backgroundColor: 'white'}}/>
                </div>
                <div className={'contact-icons'}>
                    <div className={'icon-item'}>
                        <a color={'white'} target={'_blank'} rel={'noreferrer'} style={{outline: 'none'}}
                           href={contact.github}>
                            <FaGithub type={'github'} className={'icon'}/></a>
                    </div>
                    <div className={'icon-item'}>
                        <a color={'white'} target={'_blank'} rel={'noreferrer'} style={{outline: 'none'}}
                           href={contact.bitbucket}>
                            <FaBitbucket type={'bitbucket'} className={'icon'}/></a>
                    </div>
                    <div className={'icon-item'}>
                        <a color={'white'} target={'_blank'} rel={'noreferrer'} style={{outline: 'none'}}
                           href={'mailto:' + contact.email}>
                            <CgMail type={'email'} className={'icon'}/></a>
                    </div>
                    <div className={'icon-item'}><DiscordIcon/></div>
                </div>
            </div>
            <div className={'wallpaper-container'}
                 style={{backgroundImage: "url(images/wallpaper4.jpg)", marginBottom: -25}}>
                <div style={{
                    backgroundColor: '#00000099',
                    textAlign: 'center',
                    height: 710
                }}>
                    <SectionTitle content={t('dm')}
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
                            color: 'white', marginTop: 10, fontFamily: 'Open Sans',
                            fontWeight: 300, fontSize: 10
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
