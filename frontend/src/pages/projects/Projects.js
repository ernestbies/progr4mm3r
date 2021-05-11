import React from 'react';
import {Carousel} from "react-bootstrap";
import {projects} from "../../utils/projects";
import {renderElements} from "../../utils/functions/renderElements";
import "./Projects.styles.css";

const Projects = () => {

    return (
        <div id={'projects'} className={'carousel-style'}>
            <p className={'header-text'}>Projects</p>
            <Carousel>
                {renderElements(projects, 'projects')}
            </Carousel>
        </div>
    );
}

export default Projects;

