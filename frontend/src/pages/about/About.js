import React from 'react';
import {info, calculateAge} from "../../utils/information";
import './About.styles.css';
import {useTranslation} from "react-i18next";
import SectionBadge from "../../components/SectionBadge/SectionBadge";
import {GiGraduateCap} from "react-icons/gi";
import AboutInfo from "../../components/AboutInfo/AboutInfo";
import InfoBadge from "../../components/InfoBadge/InfoBadge";
import Avatar from "../../components/Avatar/Avatar";
import {Avatar as AvatarBadge} from '@material-ui/core';
import AchievementsBlock from "../../components/AchievementsBlock/AchievementsBlock";

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
                     backgroundImage: 'url(images/wallpaper.jpg)',
                 }}>
                <div className={'avatar-container col'} style={{flex: 2}}>
                    <Avatar className={'avatar'} width={200} height={200} src={'images/me.png'}/>
                    <AchievementsBlock items={info[i18n.language].achievements}/>
                </div>
                <div className={'text-container col'} style={{flex: 5, padding: 0, paddingTop: 40}}>
                    <div className={'name-bar'}>
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
                        marginBottom: 10,
                        borderBottomWidth: 1,
                        borderBottomStyle: 'solid',
                        paddingBottom: 10,
                        borderColor: 'orange',
                        position: 'relative'
                    }}>
                        <InfoBadge title={'console'}/>
                        <AvatarBadge style={{
                            backgroundColor: 'orange',
                            color: 'black',
                            width: 18,
                            height: 18,
                            fontSize: 11,
                            fontFamily: 'Roboto Condensed',
                            marginRight: 10,
                        }}>
                            {calculateAge(info[i18n.language].dateOfBirth)}
                        </AvatarBadge>
                        <div className={'info-bar'}/>
                        <div className={'info-style'}>
                            <GiGraduateCap size={20} color={'orange'} style={{marginRight: 4}}/>
                            <span style={{fontSize: 11}}>{info[i18n.language].degree}</span>
                        </div>
                        <div className={'info-bar'}/>
                        <div className={'info-style'}>
                            <span style={{color: 'orange', marginRight: 5, fontSize: 11}}>{t('nationality')}:</span>
                            <img
                                key={info[i18n.language].country.short}
                                alt={info[i18n.language].country.short}
                                loading={'lazy'}
                                width={18}
                                height={10}
                                style={{marginRight: 5}}
                                src={'https://purecatamphetamine.github.io/country-flag-icons/3x2/' + info[i18n.language].country.short + '.svg'}
                            />
                            {info[i18n.language].country.name}
                        </div>
                        <div className={'info-bar'}/>
                        <div className={'info-style'}>
                            <span className={'info-style'} style={{color: 'orange'}}>{t('languages')}:</span>
                            {
                                info[i18n.language].languages.map((el) => {
                                    return (
                                        <img
                                            key={el.name}
                                            alt={el.name}
                                            loading={'lazy'}
                                            width={16}
                                            height={14}
                                            title={el.name + ' (' + el.level + ')'}
                                            style={{marginRight: 5, borderRadius: '50%'}}
                                            src={'https://purecatamphetamine.github.io/country-flag-icons/1x1/' + el.shortcut + '.svg'}
                                        />
                                    )
                                })
                            }
                        </div>
                    </div>
                    <AboutInfo/>
                </div>
            </div>
        </div>
    );
}

export default About;
