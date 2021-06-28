import React from 'react';
import {skills} from "../../utils/skills";
import {renderElements} from "../../utils/functions/renderElements";
import "./Skills.styles.css";
import {useTranslation} from "react-i18next";
import KnowledgeSection from "../../components/KnowledgeSection/KnowledgeSection";

const Skills = () => {

    const {t} = useTranslation('common');

    return (
        <div id={'skills'} className={'item-dashboard'} style={{backgroundColor: '#1d2026'}}>
            <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                <p className={'header-text'}>{t('skills')}</p>
                <p style={{fontWeight: 300, fontSize: 15, margin: 15, fontFamily: 'Open Sans'}}>{t('skills_text1')}<br/>
                    {t('skills_text2')} <code style={{fontSize: 14}}>{t('programming_languages2')}</code> {t('and')}
                    <code style={{fontSize: 14}}> {t('it_technologies2')}</code> {t('skills_text3')}</p>
                <div style={{width: 100, height: 1, backgroundColor: 'orange'}}/>
            </div>

            <div
                style={{display: 'flex', alignItems: 'center', justifyContent: 'center', flexWrap: 'wrap', margin: 10}}>
                <div style={{flex: 1, display: 'flex', alignItems: 'center', flexDirection: 'column'}}>
                    <p style={{marginTop: 10, fontSize: 14, fontFamily: 'Open Sans'}}>{t('programming_languages')}</p>
                    <div className={'skills-container'}>
                        {renderElements(skills.filter(el => el.type === 'language'), 'skills')}
                    </div>
                </div>

                <div style={{flex: 1, display: 'flex', alignItems: 'center', flexDirection: 'column'}}>
                    <p style={{marginTop: 10, fontSize: 14, fontFamily: 'Open Sans'}}>{t('it_technologies')}</p>
                    <div className={'skills-container'}>
                        {renderElements(skills.filter(el => el.type === 'technology'), 'skills')}
                    </div>
                </div>
            </div>
            <KnowledgeSection/>
        </div>
    );
}

export default Skills;
