import React from 'react';
import {FaGithub, FaBitbucket} from 'react-icons/fa';
import {CgMail} from "react-icons/cg";
import contact from "../../utils/contact";
import "./Contact.styles.css";
import ContactForm from "../../components/ContactForm/ContactForm";
import {useTranslation} from "react-i18next";
import {DiscordIcon} from "../../components/DiscordIcon/DiscordIcon";

const Contact = () => {

    const {t} = useTranslation('common');

    return (
        <div id={'contact'} style={{display: 'flex', flexDirection: 'column'}}>
            <div className={'contact-list'}>
                <p className={'header-text'}>{t('contact_with_me')}</p>
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
            <div className={'wallpaper-container'} style={{backgroundImage: "url(images/wallpaper4.jpg)"}}>
                <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    backgroundColor: '#00000099',
                    textAlign: 'center',
                    height: 710
                }}>
                    <p className={'header-text-small'}>{t('dm')}</p>
                    <ContactForm/>
                    <p style={{color: 'white', marginTop: 10, fontFamily: 'Open Sans',
                        fontWeight: 300, fontSize: 10}}>
                        <span style={{color: 'red'}}>*</span> {t('contact_info')} {':)'}</p>
                </div>
            </div>
        </div>
    );
}

export default Contact;
