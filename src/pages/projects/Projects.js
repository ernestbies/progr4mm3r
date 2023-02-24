import React, { useEffect, useState } from 'react';
import { Carousel } from 'react-bootstrap';
import { projects } from '../../utils/data/projects';
import { renderElements } from '../../utils/functions/renderElements';
import { useTranslation } from 'react-i18next';
import SectionBadge from '../../components/SectionBadge/SectionBadge';
import WebsitesSection from '../../components/WebsitesSection/WebsitesSection';
import './Projects.css';
import CompetitionsSection from '../../components/CompetitionsSection/CompetitionsSection';
import contact from '../../utils/data/contact';

const Projects = () => {
    const { t, i18n } = useTranslation('common');
    const [projectsList, setProjectsList] = useState([]);
    const [checked, setChecked] = useState(true);

    useEffect(() => {
        setProjectsList(
            projects.map((el) =>
                Object.assign({}, el, {
                    description: el.description[i18n.language],
                })
            )
        );
    }, [i18n.language]);

    return (
        <div id={'projects'}>
            <WebsitesSection />
            <SectionBadge
                position={'end'}
                content={t('projects')}
                subtitle={t('main')}
                specialNumber={2}
            />
            <div
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    textAlign: 'center',
                }}
            >
                <p className={'inform-text'}>
                    {t('quote_projects_list')}
                    <a
                        className={'scale-text ref-page'}
                        href={contact.github}
                        target={'_blank'}
                        rel={'noreferrer'}
                    >
                        {'GitHub'}
                    </a>
                    {'.'}
                </p>
                <div
                    style={{ width: 100, height: 1, backgroundColor: 'orange' }}
                />
            </div>
            <div className={'carousel-options'} style={{ paddingTop: 30 }}>
                <input
                    className={'carousel-checkbox'}
                    type={'checkbox'}
                    onChange={() => setChecked(!checked)}
                    checked={checked}
                />
                <p className={'carousel-checker'}>{t('auto_sliding')}</p>
            </div>
            <Carousel
                className={'carousel-style'}
                interval={checked ? 3000 : null}
            >
                {renderElements(projectsList, 'projects')}
            </Carousel>
            <CompetitionsSection />
        </div>
    );
};

export default Projects;
