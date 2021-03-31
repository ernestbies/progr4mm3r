import React from 'react';
import {Carousel} from "react-bootstrap";
import {projects} from "../utils/projects";
import {renderElements} from "../utils/renderElements";

const Projects = () => {

    return (
        <div id={'projects'} className={'carousel-style'}>
            <p style={{
                color: 'white',
                display: 'inline-block',
                fontFamily: 'Open Sans',
                fontWeight: 300,
                marginTop: 20
            }}>Projects</p>
            <Carousel className={'carousel'}>
                {renderElements(projects, 'projects')}
            </Carousel>
        </div>
    );
}

export default Projects;
