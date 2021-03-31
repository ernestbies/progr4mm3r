import React from 'react';
import {Carousel} from "react-bootstrap";
import ProjectItem from "../components/ProjectItem";
import {projects} from "../utils/projects";

const Projects = () => {

    const renderProjects = () => {
        let view = [];

        projects.map((el) => view.push(
            <Carousel.Item className={'carousel-item'}>
                <ProjectItem
                    image={el.image}
                    color={el.color}
                    name={el.name}
                    description={el.description}
                    technologies={el.technologies}
                    os={el.os}
                    languages={el.languages}
                    links={el.links}
                    additionalData={el.additionalData}
                    infoSize={el.infoSize}
                />
            </Carousel.Item>
        ));

        return view;
    }

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
                {renderProjects()}
            </Carousel>
        </div>
    );
}

export default Projects;
