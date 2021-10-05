import React from 'react';
import "./Contact.styles.css";
import {useTranslation} from "react-i18next";
import SectionBadge from "../../components/SectionBadge/SectionBadge";
import ContactIcon from "../../components/ContactIcon/ContactIcon";
import NotReleasedProject from "../../components/NotReleasedProject/NotReleasedProject";
import contact from "../../utils/contact";

const Contact = () => {

    const {t} = useTranslation('common');

    return (
        <div id={'contact'}>
            <div className={'contact-list'}>
                <SectionBadge
                    content={t('contact')}
                    position={'end'}
                    signColor={'white'}
                    signFontColor={'white'}
                    backgroundColor={'white'}
                    fontColor={'black'}
                    specialNumber={5}
                />
                <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                    <p className={'inform-text'}>{t('contact_text1')}
                        {'\n' + t('contact_text2')} <code className={'scale-text'}>e-mail</code>.</p>
                    <div style={{width: 100, height: 1, backgroundColor: 'white'}}/>
                </div>
                <div className={'contact-icons'}>
                    <ContactIcon type={'github'}/>
                    <ContactIcon type={'bitbucket'}/>
                    <ContactIcon type={'linkedin'}/>
                    <ContactIcon type={'discord'}/>
                </div>
                <div className={'email-container'}>
                    <p className={'email-header'}>{t('contact2')}</p>
                    <a href={'mailto:' + contact.email} className={'email-text'}>{'ERNESTBIES@GMAIL.COM'}</a>
                </div>
                <p className={'signature'}>{t('contact_info') + '\nErnest Bieś'}</p>
            </div>
            <NotReleasedProject/>
        </div>
    );
}

export default Contact;
