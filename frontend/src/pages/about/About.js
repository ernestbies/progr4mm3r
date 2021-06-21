import React from 'react';
import {Avatar} from '@material-ui/core';
import {info, calculateAge} from "../../utils/information";
import './About.styles.css';
import {useTranslation} from "react-i18next";

const About = () => {

    const { t, i18n }  = useTranslation('common');

    return (
        <div id={'about'} className={'item-dashboard about-container row'}
             style={{width: '100%', height: '100%', margin: 0, backgroundImage: 'url(images/wallpaper1.jpg)'}}>
            <div className={'avatar-container col'} style={{flex: 2}}>
                <Avatar style={{marginTop: 15, marginBottom: 15, width: 200, height: 200}}
                        src={'images/me.jpg'}/>
                {
                    info[i18n.language].achievements.map(el =>
                        <code key={el} style={{fontSize: 12}}>
                            <span style={{color: 'orange'}}>{'//'}</span> {el}
                        </code>
                    )
                }
            </div>
            <div className={'text-container col'} style={{flex: 5, padding: 0}}>
                <div className={'name-bar'}>
                    <div style={{width: 5, height: 30, marginLeft: 20, backgroundColor: 'orange'}}/>
                    <p style={{
                        paddingLeft: 7,
                        fontWeight: 300,
                        fontSize: 26,
                        margin: 0,
                    }}>{info[i18n.language].name + ' ' +  info[i18n.language].surname}</p>
                </div>
                <div style={{
                    display: 'inline-flex',
                    maxWidth: 350,
                    alignItems: 'center',
                    marginLeft: 20,
                    marginRight: 20,
                    marginTop: 10,
                    borderBottomWidth: 1,
                    borderBottomStyle: 'solid',
                    paddingBottom: 10,
                    borderColor: 'orange'
                }}>
                    <p className={'info-style'}>{calculateAge(info[i18n.language].dateOfBirth)}</p>
                    <div className={'info-bar'}/>
                    <p className={'info-style'}>{info[i18n.language].degree}</p>
                    <div className={'info-bar'}/>
                    <p className={'info-style'}>{info[i18n.language].country}</p>
                    <div className={'info-bar'}/>
                    {
                        info[i18n.language].languages.map((el) => {
                            return (
                                <img
                                    key={el.name}
                                    alt={el.name}
                                    width={20}
                                    height={12}
                                    title={el.name + ' (' + el.level + ')'}
                                    style={{marginRight: 5, width: 16, height: 14, borderRadius: '50%'}}
                                    src={'https://purecatamphetamine.github.io/country-flag-icons/1x1/' + el.shortcut + '.svg'}
                                />
                            )
                        })
                    }
                </div>
                <p className={'info-text'}><span style={{color: 'orange'}}>{'//'}</span> {info[i18n.language].text}</p>
                <span className={'info-text'} style={{marginTop: 0, marginBottom: 15}}>
                    <span style={{color: 'orange'}}>{'//'}</span> {t('web_info_text')} <span
                    style={{color: 'orange', fontWeight: 'bold'}}>{t('my_person')}</span> {t('and2')} {t('see')} <span
                    style={{color: 'orange', fontWeight: 'bold'}}>{t('my_projects')}</span>
                </span>
            </div>
        </div>
    );
}

export default About;
