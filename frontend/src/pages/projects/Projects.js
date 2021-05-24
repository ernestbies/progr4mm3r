import React, {useEffect, useState} from 'react';
import {Carousel} from "react-bootstrap";
import {projects} from "../../utils/projects";
import {renderElements} from "../../utils/functions/renderElements";
import "./Projects.styles.css";
import {useTranslation} from "react-i18next";

const Projects = () => {

    const {t, i18n} = useTranslation('common');
    const [projectsList, setProjectsList] = useState([]);

    useEffect(() => {
        setProjectsList(projects.map(el => Object.assign({}, el, {description: el.description[i18n.language]})));
    }, [i18n.language])


    return (
        <div id={'projects'} className={'carousel-style'}>
            <p className={'header-text'}>{t('projects')}</p>
            <Carousel>
                {renderElements(projectsList, 'projects')}
            </Carousel>
        </div>
    );
}

export default Projects;

