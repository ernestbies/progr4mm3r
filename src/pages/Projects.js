import React from 'react';
import {Carousel} from "react-bootstrap";
import ProjectItem from "../components/ProjectItem";
import {projects} from "../utils/projects";

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
                <Carousel.Item className={'carousel-item'}>
                    <ProjectItem
                        image={projects.mediaBrowser.image}
                        color={projects.mediaBrowser.color}
                        name={projects.mediaBrowser.name}
                        description={projects.mediaBrowser.description}
                        technologies={projects.mediaBrowser.technologies}
                        os={projects.mediaBrowser.os}
                        languages={projects.mediaBrowser.languages}
                        links={projects.mediaBrowser.links}
                        infoSize={'72%'}
                    />
                </Carousel.Item>

                <Carousel.Item className={'carousel-item'}>
                    <ProjectItem
                        image={projects.cameraFingerprint.image}
                        color={projects.cameraFingerprint.color}
                        name={projects.cameraFingerprint.name}
                        description={projects.cameraFingerprint.description}
                        technologies={projects.cameraFingerprint.technologies}
                        os={projects.cameraFingerprint.os}
                        additionalData={projects.cameraFingerprint.additionalData}
                        links={projects.mediaBrowser.links}
                        infoSize={'78%'}
                    />
                </Carousel.Item>


                <Carousel.Item className={'carousel-item'}>
                    <ProjectItem
                        image={projects.spaceships.image}
                        color={projects.spaceships.color}
                        name={projects.spaceships.name}
                        description={projects.spaceships.description}
                        technologies={projects.spaceships.technologies}
                        os={projects.spaceships.os}
                        links={projects.spaceships.links}
                        infoSize={'28%'}
                    />
                </Carousel.Item>

                <Carousel.Item className={'carousel-item'}>
                    <ProjectItem
                        image={projects.apocalyptoGame.image}
                        color={projects.apocalyptoGame.color}
                        name={projects.apocalyptoGame.name}
                        description={projects.apocalyptoGame.description}
                        technologies={projects.apocalyptoGame.technologies}
                        os={projects.apocalyptoGame.os}
                        links={projects.apocalyptoGame.links}
                        infoSize={'24%'}
                    />
                </Carousel.Item>

                <Carousel.Item className={'carousel-item'}>
                    <ProjectItem
                        image={projects.quizApp.image}
                        color={projects.quizApp.color}
                        name={projects.quizApp.name}
                        description={projects.quizApp.description}
                        technologies={projects.quizApp.technologies}
                        os={projects.quizApp.os}
                        links={projects.quizApp.links}
                        infoSize={'28%'}
                    />
                </Carousel.Item>

                <Carousel.Item className={'carousel-item'}>
                    <ProjectItem
                        image={projects.imageBinarizer.image}
                        color={projects.imageBinarizer.color}
                        name={projects.imageBinarizer.name}
                        description={projects.imageBinarizer.description}
                        technologies={projects.imageBinarizer.technologies}
                        os={projects.imageBinarizer.os}
                        links={projects.imageBinarizer.links}
                        infoSize={'24%'}
                    />
                </Carousel.Item>

                <Carousel.Item className={'carousel-item'}>
                    <ProjectItem
                        image={projects.calculatorApp.image}
                        color={projects.calculatorApp.color}
                        name={projects.calculatorApp.name}
                        description={projects.calculatorApp.description}
                        technologies={projects.calculatorApp.technologies}
                        os={projects.calculatorApp.os}
                        links={projects.calculatorApp.links}
                        infoSize={'28%'}
                    />
                </Carousel.Item>

                <Carousel.Item className={'carousel-item'}>
                    <ProjectItem
                        image={projects.databaseApp.image}
                        color={projects.databaseApp.color}
                        name={projects.databaseApp.name}
                        description={projects.databaseApp.description}
                        technologies={projects.databaseApp.technologies}
                        os={projects.databaseApp.os}
                        links={projects.databaseApp.links}
                        infoSize={'24%'}
                    />
                </Carousel.Item>

                <Carousel.Item className={'carousel-item'}>
                    <ProjectItem
                        image={projects.databaseAnalyzer.image}
                        color={projects.databaseAnalyzer.color}
                        name={projects.databaseAnalyzer.name}
                        description={projects.databaseAnalyzer.description}
                        technologies={projects.databaseAnalyzer.technologies}
                        os={projects.databaseAnalyzer.os}
                        links={projects.databaseAnalyzer.links}
                        infoSize={'24%'}
                    />
                </Carousel.Item>

                <Carousel.Item className={'carousel-item'}>
                    <ProjectItem
                        image={projects.taskPlanner.image}
                        color={projects.taskPlanner.color}
                        name={projects.taskPlanner.name}
                        description={projects.taskPlanner.description}
                        technologies={projects.taskPlanner.technologies}
                        os={projects.taskPlanner.os}
                        links={projects.taskPlanner.links}
                        infoSize={'24%'}
                    />
                </Carousel.Item>

                <Carousel.Item className={'carousel-item'}>
                    <ProjectItem
                        image={projects.carServiceStation.image}
                        color={projects.carServiceStation.color}
                        name={projects.carServiceStation.name}
                        description={projects.carServiceStation.description}
                        technologies={projects.carServiceStation.technologies}
                        os={projects.carServiceStation.os}
                        links={projects.carServiceStation.links}
                        infoSize={'24%'}
                    />
                </Carousel.Item>

                <Carousel.Item className={'carousel-item'}>
                    <ProjectItem
                        image={projects.pizzeriaDatabase.image}
                        color={projects.pizzeriaDatabase.color}
                        name={projects.pizzeriaDatabase.name}
                        description={projects.pizzeriaDatabase.description}
                        technologies={projects.pizzeriaDatabase.technologies}
                        os={projects.pizzeriaDatabase.os}
                        links={projects.pizzeriaDatabase.links}
                        infoSize={'24%'}
                    />
                </Carousel.Item>
            </Carousel>
        </div>
    );
}

export default Projects;
