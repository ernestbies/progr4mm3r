import React from 'react';
import { skills } from '../../utils/data/skills';
import { renderElements } from '../../utils/functions/renderElements';
import './Skills.styles.css';
import { useTranslation } from 'react-i18next';
import KnowledgeSection from '../../components/KnowledgeSection/KnowledgeSection';
import SectionBadge from '../../components/SectionBadge/SectionBadge';

const Skills = () => {
    const { t } = useTranslation('common');

    return (
        <div id={'skills'} style={{ textAlign: 'center', color: 'white' }}>
            <SectionBadge
                position={'end'}
                content={t('skills')}
                signColor={'#1d2026'}
                specialNumber={3}
            />
            <div
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                }}
            >
                <p className={'inform-text'}>
                    {t('skills_text')}
                    <span className={'scale-text'}>
                        {t('programming_languages2')}
                    </span>
                    {' ' + t('and') + ' '}
                    <span className={'scale-text'}>
                        {t('it_technologies2')}
                    </span>
                    {'.'}
                </p>
                <div
                    style={{ width: 100, height: 1, backgroundColor: 'orange' }}
                />
            </div>

            <div
                style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexWrap: 'wrap',
                    margin: 10,
                }}
            >
                <div
                    style={{
                        flex: 1,
                        display: 'flex',
                        alignItems: 'center',
                        flexDirection: 'column',
                    }}
                >
                    <p
                        style={{
                            marginTop: 10,
                            fontSize: 14,
                            fontFamily: 'Open Sans',
                        }}
                    >
                        {t('programming_languages')}
                    </p>
                    <div className={'skills-container'}>
                        {renderElements(
                            skills.filter((el) => el.type === 'language'),
                            'skills'
                        )}
                    </div>
                </div>

                <div
                    style={{
                        flex: 1,
                        display: 'flex',
                        alignItems: 'center',
                        flexDirection: 'column',
                    }}
                >
                    <p
                        style={{
                            marginTop: 10,
                            fontSize: 14,
                            fontFamily: 'Open Sans',
                        }}
                    >
                        {t('it_technologies')}
                    </p>
                    <div className={'skills-container'}>
                        {renderElements(
                            skills.filter((el) => el.type === 'technology'),
                            'skills'
                        )}
                    </div>
                </div>
            </div>
            <KnowledgeSection />
        </div>
    );
};

export default Skills;
