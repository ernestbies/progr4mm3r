import React, {useEffect, useState} from 'react';
import {Carousel} from "react-bootstrap";
import {projects} from "../../utils/projects";
import {renderElements} from "../../utils/functions/renderElements";
import {useTranslation} from "react-i18next";
import SectionBadge from "../../components/SectionBadge/SectionBadge";

const Projects = () => {

    const {t, i18n} = useTranslation('common');
    const [projectsList, setProjectsList] = useState([]);

    useEffect(() => {
        setProjectsList(projects.map(el => Object.assign({}, el, {description: el.description[i18n.language]})));
    }, [i18n.language])

    return (
        <div id={'projects'} className={'carousel-style'}>
            <SectionBadge position={'start'} content={t('projects')} specialNumber={2}/>
            <Carousel>{renderElements(projectsList, 'projects')}</Carousel>
        </div>
    );
}

export default Projects;

