import React from 'react';
import {Avatar} from '@material-ui/core';
import {info, calculateAge} from "../../utils/information";
import './About.styles.css';
import {useTranslation} from "react-i18next";
import SectionBadge from "../../components/SectionBadge/SectionBadge";
import {GiGraduateCap} from "react-icons/all";

const About = () => {

    const {t, i18n} = useTranslation('common');

    return (
        <div id={'about'} style={{position: 'relative'}}>
            <SectionBadge content={t('about')} position={'end'} absolute/>
            <div className={'about-container row'}
                 style={{
                     width: '100%',
                     height: '100%',
                     margin: 0,
                     backgroundImage: 'url(images/wallpaper1.jpg)'
                 }}>
                <div className={'avatar-container col'} style={{flex: 2}}>
                    <Avatar className={'avatar'} style={{width: 200, height: 200}} src={'images/me.jpg'}/>
                    {
                        info[i18n.language].achievements.map(el =>
                            <code key={el} style={{fontSize: 12}}>
                                <span style={{color: 'orange'}}>{'//'}</span> {el}
                            </code>
                        )
                    }
                </div>
                <div className={'text-container col'} style={{flex: 5, padding: 0}}>
                    <div className={'name-bar'} style={{marginTop: 40}}>
                        <div style={{width: 5, height: 30, marginLeft: 20, backgroundColor: 'orange'}}/>
                        <p style={{
                            paddingLeft: 7,
                            fontWeight: 300,
                            fontSize: 26,
                            margin: 0,
                        }}>{info[i18n.language].name + ' ' + info[i18n.language].surname}</p>
                    </div>
                    <div style={{
                        display: 'inline-flex',
                        maxWidth: 560,
                        alignItems: 'center',
                        marginLeft: 20,
                        marginRight: 20,
                        marginTop: 10,
                        borderBottomWidth: 1,
                        borderBottomStyle: 'solid',
                        paddingBottom: 10,
                        borderColor: 'orange',
                    }}>
                        <Avatar style={{
                            backgroundColor: 'orange',
                            color: 'black',
                            width: 18,
                            height: 18,
                            fontSize: 11,
                            fontFamily: 'Roboto Condensed',
                            marginRight: 10
                        }}>
                            {calculateAge(info[i18n.language].dateOfBirth)}
                        </Avatar>
                        <div className={'info-bar'}/>
                        <div style={{display: 'flex', flexDirection: 'row'}}>
                            <GiGraduateCap size={20} color={'orange'} style={{marginRight: 4}}/>
                            <p className={'info-style'}>{info[i18n.language].degree}</p>
                        </div>
                        <div className={'info-bar'}/>
                        <p className={'info-style'}><span style={{color: 'orange', marginRight: 5}}>Country:</span>
                            <img
                                key={info[i18n.language].country.short}
                                alt={info[i18n.language].country.short}
                                loading={'lazy'}
                                width={20}
                                height={12}
                                style={{marginRight: 5}}
                                src={'https://purecatamphetamine.github.io/country-flag-icons/3x2/' + info[i18n.language].country.short + '.svg'}
                            />
                            {info[i18n.language].country.name}
                        </p>
                        <div className={'info-bar'}/>
                        <span className={'info-style'} style={{color: 'orange'}}>Languages:</span>
                        {
                            info[i18n.language].languages.map((el) => {
                                return (
                                    <img
                                        key={el.name}
                                        alt={el.name}
                                        loading={'lazy'}
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
                    <p className={'info-text'}><span
                        style={{color: 'orange'}}>{'//'}</span> {info[i18n.language].text}</p>
                    <span className={'info-text'} style={{marginTop: 0, marginBottom: 15}}>
                        <span style={{color: 'orange'}}>{'//'}</span> {t('web_info_text')} <span
                        style={{
                            color: 'orange',
                            fontWeight: 'bold'
                        }}>{t('my_person')}</span> {t('and2')} {t('see')}
                        <span style={{color: 'orange', fontWeight: 'bold'}}> {t('my_projects')}</span>
                    </span>
                </div>
            </div>
        </div>
    );
}

export default About;
