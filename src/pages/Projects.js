import React from 'react';
import {Carousel} from "react-bootstrap";
import ProjectItem from "../components/ProjectItem";

const Projects = () => {
    const projects = {
        mediaBrowser: {
            name: 'Media Browser',
            description: 'System for searching information about audiovisual materials. Project implemented as part of an engineering thesis. The application allows you to search and view information about movies, series and people related to the film industry. The application is designed for devices with Android and iOS. The application supports Polish and English.',
            technologies: {
                mobile: ['JavaScript', 'React Native', 'React Native Navigation', 'React Native SVG', 'MobX', 'SQLite'],
                server: ['JavaScript', 'Node.js', 'Hapi.js', 'lodash', 'JSON Web Token', 'bcrpyt', 'nodemailer'],
                database: ['MongoDB', 'mongoose']
            },
            os: ['Windows', 'Linux', 'Android', 'iOS'],
            color: 'orange',
            languages: ['PL', 'US'],
            image: 'images/projects/mediabrowser-dashboard.png',
            links: {
                github: 'https://github.com/ernestbies/MediaBrowser-mobile',
                youtube: 'https://youtu.be/7r1r9JiKsYc'
            }
        },
        cameraFingerprint: {
            name: 'Camera Fingerprint PRNU',
            description: 'Camera Fingerprint PRNU (Autopsy module) uses photo response non-uniformity of camera sensor (PRNU) to check if a photo was truly taken by a suspected camera or not. Module is not based on metadata such as EXIF, performs a physical analysis of the camera sensor, determines photo response non-uniformity (PRNU), uses the principle that each sensor pixel behaves differently with effects such as non-uniform photo response, making each sensor is unique, identifies each pixel anomaly and uses this information to create a description of the camera sensor - the camera fingerprint. The project was presented at the 2020 Open Source Digital Forensics Conference (#OSDFCon) and placed on the organizer\'s home page.',
            technologies: {
                desktop: ['Autopsy (ver. 4.15.0)', 'Apache Netbeans IDE (ver. 9.0)', 'Python (ver. 3.6.0)']
            },
            os: ['Windows'],
            color: '#282c34',
            additionalData: {
                name: 'OSDF',
                image: 'images/projects/osdfcon.png',
                link: 'https://www.osdfcon.org/2020-event/2020-module-development-contest/',
                text: 'Presented at conference'
            },
            image: 'images/projects/camerafingerprint.png',
            links: {
                github: 'https://github.com/ernestbies/Camera-Fingerprint-PRNU',
                youtube: 'https://www.youtube.com/watch?v=lsoqVuuq9T0'
            }
        },
        spaceships: {
            name: 'Spaceships',
            description: 'Spaceships is a puzzle game combining two popular games "Ships" and "Minesweeper" based on a client-server architecture. The aim of the game is to find all the ships on the board in the fewest possible steps.',
            technologies: {
                desktop: ['Java', 'C++', 'Apache Netbeans IDE', 'Swing', 'Qt'],
                mobile: ['Java', 'Android Studio'],
                server: ['Java', 'Spring', 'C++', 'Qt', 'Postman'],
                database: ['PostgreSQL', 'Java Persistence API'],
                documentation: ['Microsoft Word', 'Libre Office', 'LaTeX', 'Unified Modeling Language (UML)']
            },
            os: ['Windows','Android'],
            color: 'purple',
            image: 'images/projects/spaceships.png',
            links: {
                github: 'https://github.com/ernestbies/SpaceShips'
            }
        },
        apocalyptoGame: {
            name: 'ApocalyptoGame',
            description: '"ApocalyptoGame" is a first-person shooter (FPS) game. There is one main plot of the game in the game. In the game, we play the role of a soldier set in a post-apocalyptic world. The player\'s task is to destroy the enemy ship. The player has the ability to interact with the environment, can pick up items. In order to destroy a ship, the player must collect four cells that will help him power the generator. The way to get cells is different - some of them are located on the map, some of them can be obtained by the player by killing aliens, and the last one is possible after killing the boss. After collecting all the cells, the player can power the generator on the map, which will blow up the enemy ship. The game has a developed combat and healing system.',
            technologies: {
                desktop: ['C#', 'Unity']
            },
            os: ['Windows'],
            color: 'red',
            image: 'images/projects/apocalyptogame.png',
            links: {
                github: 'https://github.com/ernestbies/ApocalyptoGame'
            }
        },
        quizApp: {
            name: 'Quiz app',
            description: 'Mobile application that allows you to solve on-line tests. Tests are downloaded from an external server. The user has the option of solving a specific test, has a specific time to answer a specific question. In addition, they can choose a random test and view all their and other users\' results. The application has a drawer menu that makes it easy to access all screens. The application is designed for Android and iOS.',
            technologies: {
                mobile: ['JavaScript', 'React Native', 'RN Splash Screen', 'RN Navigation', 'Async Storage', 'NetInfo', 'Vector icons', 'SQLite']
            },
            image: 'images/projects/quiz-dashboard.png',
            os: ['Android', 'iOS'],
            color: 'yellow',
            links: {
                github: 'https://github.com/ernestbies/Quiz'
            }
        },
        imageBinarizer: {
            name: 'Image binarizer',
            description: 'The application allows you to binarize images. The application supports the basic types of binarization - low-level, high-level, two-threshold, conditional. It allows you to load any image (color or black and white), and then select a specific operation. The application works in a distributed environment using Remote Method Invocation (RMI) - a mechanism that enables remote methods of objects invocation. These objects can reside in other Java virtual machines that can be on other computers. In RMI technology, it is necessary to run three processes: client, server, register of objects.',
            technologies: {
                desktop: ['Java', 'Apache NetBeans IDE', 'Swing', 'Remote Method Invocation (RMI)']
            },
            image: 'images/projects/imagebinarizer.png',
            os: ['Windows'],
            color: 'grey',
            links: {
                github: 'https://github.com/ernestbies/ImageBinarizer'
            }
        },
        calculatorApp: {
            name: 'Calculator',
            description: 'App "Calculator" was created using the React Native framework. It was my first app created in React Native. The application works in landscape and potrait modes. The application has a basic set of math functions such as addition, subtraction, multiplication, division, percent. After changing the orientation, additional options are available.',
            technologies: {
                mobile: ['JavaScript', 'React Native']
            },
            os: ['Android','iOS'],
            color: 'blue',
            image: 'images/projects/calculator-dashboard.png',
            links: {
                github: 'https://github.com/ernestbies/CalculatorRN'
            }
        },
        databaseApp: {
            name: 'Database Connection App',
            description: 'The application allows you to connect to any PostgreSQL database using the JDBC engine. The login data can be saved and read because the application uses serialization. In the application, it is possible to view all tables in the database. If the table contains users\' contact details (e-mail address), it is possible to send a message. Sending e-mails is performed by Javax Mail. The user can add recipients (TO, CC, BCC), message subject and content. After approval, the e-mail is sent to the selected users.',
            technologies: {
                desktop: ['Java', 'Apache NetBeans IDE', 'Swing', 'JDBC', 'PostgreSQL', 'Javax Mail']
            },
            os: ['Windows'],
            color: '#1E90FF',
            image: 'images/projects/databaseApp.png',
            links: {
                github: 'https://github.com/ernestbies/databaseApp'
            }
        }
    };

    return (
        <div id={'projects'} className={'carousel-style'}>
            <p style={{
                color: 'white',
                display: 'inline-block',
                fontFamily: 'Open Sans',
                fontWeight: 300,
                marginTop: 20
            }}>Projects</p>
            <Carousel interval={100000000} className={'carousel'}>
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
                    <Carousel.Caption/>
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
                    <Carousel.Caption/>
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
                    <Carousel.Caption/>
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
                    <Carousel.Caption/>
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
                    <Carousel.Caption/>
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
                    <Carousel.Caption/>
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
                    <Carousel.Caption/>
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
                    <Carousel.Caption/>
                </Carousel.Item>
            </Carousel>
        </div>
    );
}

export default Projects;
