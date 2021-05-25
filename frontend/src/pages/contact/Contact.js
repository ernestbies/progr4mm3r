import React from 'react';
import {FaGithub, FaBitbucket, FaDiscord} from 'react-icons/fa';
import {CgMail} from "react-icons/cg";
import contact from "../../utils/contact";
import "./Contact.styles.css";
import ContactForm from "../../components/ContactForm";
import {useTranslation} from "react-i18next";

const Contact = () => {

    const {t} = useTranslation('common');

    const copyName = () => {
        let input = document.createElement('input');
        document.body.appendChild(input);
        input.value = contact.discord;
        input.select();
        document.execCommand('copy', false);
        input.remove();

        let tooltipText = document.getElementById('discordName');
        tooltipText.innerHTML = '<p style="color: orange; display: inline;">' + contact.discord + ' <span style="color: white">' + t('copied_text') + '</span></p>';
    };

    const outCopyName = () => {
        let tooltipText = document.getElementById('discordName');
        tooltipText.innerHTML = '<p>' + t('copy_text') + '</p>';
    }

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
                    <div className={'icon-item'}>
                        <div className={'tooltipClass'}>
                            <button id={'discordIcon'} onClick={() => copyName()} onMouseOut={() => outCopyName()}
                                    color={'white'}
                                    style={{backgroundColor: 'transparent', borderWidth: 0, cursor: 'pointer'}}>
                                <span id={'discordName'}
                                      className={'tooltipText'}>Click here to copy the username</span>
                                <FaDiscord type={'discord'} className={'icon'}/></button>
                        </div>
                    </div>
                </div>
            </div>
            <div className={'wallpaper-container'} style={{backgroundImage: "url(images/wallpaper4.jpg)"}}>
                <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    backgroundColor: '#00000099',
                    textAlign: 'center',
                    height: 750
                }}>
                    <p className={'header-text-small'}>{t('dm')}</p>
                    <ContactForm/>
                    <span style={{
                        color: 'white',
                        marginTop: 20,
                        display: 'inline-block',
                        fontFamily: 'Press Start',
                        fontSize: 10,
                    }}><span style={{color: '#9932CC', fontWeight: 'bold'}}>{'//'}</span> WE <span
                        style={{
                            fontSize: 16,
                            animationName: 'color-changes',
                            animationDuration: '8s',
                            animationIterationCount: 'infinite'
                        }}>&#10084;</span><span
                        style={{color: 'white'}}> JAVASCRIPT</span>
                    </span>
                </div>
            </div>
        </div>
    );
}

export default Contact;
