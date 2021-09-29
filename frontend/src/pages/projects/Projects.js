import React, {useEffect, useState} from 'react';
import {Carousel} from "react-bootstrap";
import {projects} from "../../utils/projects";
import {renderElements} from "../../utils/functions/renderElements";
import {useTranslation} from "react-i18next";
import SectionBadge from "../../components/SectionBadge/SectionBadge";
import WebsitesSection from "../../components/WebsitesSection/WebsitesSection";
import './Projects.css'

const Projects = () => {

    const {t, i18n} = useTranslation('common');
    const [projectsList, setProjectsList] = useState([]);
    const [checked, setChecked] = useState(true);

    useEffect(() => {
        setProjectsList(projects.map(el => Object.assign({}, el, {description: el.description[i18n.language]})));
    }, [i18n.language])

    return (
        <div id={'projects'} className={'carousel-style'}>
            <WebsitesSection/>
            <SectionBadge position={'end'} content={t('projects')} subtitle={t('all')} specialNumber={2}/>
            <div className={'carousel-options'}>
                <input className={'carousel-checkbox'} type={'checkbox'} onChange={() => setChecked(!checked)} checked={checked}/>
                <p className={'carousel-checker'}>{t('auto_sliding')}</p>
            </div>
            <Carousel interval={checked ? 3000 : null}>
                {renderElements(projectsList, 'projects')}
            </Carousel>
        </div>
    );
}

export default Projects;

