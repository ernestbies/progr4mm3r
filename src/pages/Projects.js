import React from 'react';
import {Carousel} from "react-bootstrap";
import {
    AiFillWindows,
    FaGithub,
    FaWrench,
    FaYoutube,
    FcAndroidOs,
    IoLogoApple
} from "react-icons/all";
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
                pc: ['Autopsy (ver. 4.15.0)', 'Apache Netbeans IDE (ver. 9.0)', 'Python (ver. 3.6.0)']
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
                pc: ['Java', 'C++', 'Apache Netbeans IDE', 'Swing', 'Qt'],
                mobile: ['Java', 'Android Studio'],
                server: ['Java', 'Spring', 'C++', 'Qt', 'Postman'],
                database: ['PostgreSQL', 'Java Persistence API'],
                documentation: ['Microsoft Word', 'Libre Office', 'LaTeX', 'Unified Modeling Language (UML)']
            },
            image: 'images/projects/spaceships.png',
            links: {
                github: 'https://github.com/ernestbies/SpaceShips'
            }
        },
        apocalyptogame: {
            name: 'ApocalyptoGame',
            description: '"ApocalyptoGame" is a first-person shooter (FPS) game. There is one main plot of the game in the game. In the game, we play the role of a soldier set in a post-apocalyptic world. The player\'s task is to destroy the enemy ship. The player has the ability to interact with the environment, can pick up items. In order to destroy a ship, the player must collect four cells that will help him power the generator. The way to get cells is different - some of them are located on the map, some of them can be obtained by the player by killing aliens, and the last one is possible after killing the boss. After collecting all the cells, the player can power the generator on the map, which will blow up the enemy ship. The game has a developed combat and healing system.',
            technologies: ['C#', 'Unity'],
            image: 'images/projects/apocalyptogame.png',
            links: {
                github: 'https://github.com/ernestbies/ApocalyptoGame'
            }
        },
        quiz: {
            name: 'Quiz app',
            description: 'Mobile application that allows you to solve on-line tests. Tests are downloaded from an external server. The user has the option of solving a specific test, has a specific time to answer a specific question. In addition, they can choose a random test and view all their and other users\' results. The application has a drawer menu that makes it easy to access all screens. The application is designed for Android and iOS.',
            technologies: ['JavaScript', 'React Native', 'RN Splash Screen', 'RN Navigation', 'Async Storage', 'NetInfo', 'Vector icons', 'SQLite'],
            image: 'images/projects/quiz-dashboard.png',
            links: {
                github: 'https://github.com/ernestbies/Quiz'
            }
        },
        imagebinarizer: {
            name: 'Image binarizer',
            description: 'The application allows you to binarize images. The application supports the basic types of binarization - low-level, high-level, two-threshold, conditional. It allows you to load any image (color or black and white), and then select a specific operation. The application works in a distributed environment using Remote Method Invocation (RMI) - a mechanism that enables remote methods of objects invocation. These objects can reside in other Java virtual machines that can be on other computers. In RMI technology, it is necessary to run three processes: client, server, register of objects.',
            technologies: ['Java', 'Apache NetBeans IDE', 'Swing', 'Remote Method Invocation (RMI)'],
            image: 'images/projects/imagebinarizer.png',
            links: {
                github: 'https://github.com/ernestbies/ImageBinarizer'
            }
        },
        calculator: {
            name: 'Calculator',
            description: 'App "Calculator" was created using the React Native framework. It was my first app created in React Native. The application works in landscape and potrait modes. The application has a basic set of math functions such as addition, subtraction, multiplication, division, percent. After changing the orientation, additional options are available.',
            technologies: ['JavaScript', 'React Native'],
            image: 'images/projects/calculator-dashboard.png',
            links: {
                github: 'https://github.com/ernestbies/CalculatorRN'
            }
        },
        databaseapp: {
            name: 'Database Connection App',
            description: 'The application allows you to connect to any PostgreSQL database using the JDBC engine. The login data can be saved and read because the application uses serialization. In the application, it is possible to view all tables in the database. If the table contains users\' contact details (e-mail address), it is possible to send a message. Sending e-mails is performed by Javax Mail. The user can add recipients (TO, CC, BCC), message subject and content. After approval, the e-mail is sent to the selected users.',
            technologies: ['Java', 'Apache NetBeans IDE', 'Swing', 'JDBC', 'PostgreSQL', 'Javax Mail'],
            image: 'images/projects/databaseApp.png',
            links: {
                github: 'https://github.com/ernestbies/databaseApp'
            }
        }
    };

    const renderTechnologies = (technologies) => {
        const len = technologies.length;
        return technologies.map((el, i) => {
            if (len === i + 1) {
                return <p style={{display: 'inline'}}>{el}</p>;
            } else {
                return <p style={{display: 'inline'}}>{el} <p style={{color: '#A9A9A9', display: 'inline'}}> | </p></p>;
            }
        });
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
                    />
                    <Carousel.Caption/>
                </Carousel.Item>


                <Carousel.Item className={'carousel-item'}>
                    <div style={{display: 'flex', justifyContent: 'column', height: '60vh'}}>
                        <img
                            alt={''}
                            className={'d-block w-50'}
                            src={projects.spaceships.image}
                            style={{opacity: 0.8, flex: 1}}
                        />
                        <div style={{margin: 40, textAlign: 'left', flex: 1}}>
                            <div style={{display: 'flex', alignItems: 'center'}}>
                                <div style={{width: 5, height: 30, backgroundColor: 'purple'}}/>
                                <p style={{
                                    paddingLeft: 7,
                                    fontFamily: 'Open Sans',
                                    margin: 0
                                }}>{projects.spaceships.name}</p>
                            </div>
                            <p style={{
                                fontSize: 12,
                                fontFamily: 'Open Sans',
                                marginTop: 30,
                                marginRight: 100
                            }}>{projects.spaceships.description}</p>
                            <div style={{display: 'flex', marginTop: 30, alignItems: 'center'}}>
                                <FaWrench color={'purple'} size={14} style={{marginRight: 5}}/>
                                <p style={{
                                    fontSize: 14,
                                    fontFamily: 'Open Sans',
                                    margin: 0
                                }}>{'Technologies used in project'}</p>
                            </div>
                            <div>
                                <p style={{
                                    fontSize: 12,
                                    fontFamily: 'Open Sans',
                                    paddingTop: 10
                                }}>{'PC:'} <code style={{
                                    fontSize: 12,
                                    fontStyle: 'normal'
                                }}>{renderTechnologies(projects.spaceships.technologies.pc)}</code></p>

                                <p style={{
                                    fontSize: 12,
                                    fontFamily: 'Open Sans',
                                    marginTop: -10,
                                }}>{'Mobile:'} <code style={{
                                    fontSize: 12,
                                    fontStyle: 'normal'
                                }}>{renderTechnologies(projects.spaceships.technologies.mobile)}</code></p>

                                <p style={{
                                    fontSize: 12,
                                    fontFamily: 'Open Sans',
                                    marginTop: -10
                                }}>{'Server:'} <code style={{
                                    fontSize: 12,
                                    fontStyle: 'normal'
                                }}>{renderTechnologies(projects.spaceships.technologies.server)}</code></p>

                                <p style={{
                                    fontSize: 12,
                                    fontFamily: 'Open Sans',
                                    marginTop: -10
                                }}>{'Database:'} <code style={{
                                    fontSize: 12,
                                    fontStyle: 'normal'
                                }}>{renderTechnologies(projects.spaceships.technologies.database)}</code></p>

                                <p style={{
                                    fontSize: 12,
                                    fontFamily: 'Open Sans',
                                    marginTop: -10
                                }}>{'Documentation:'} <code style={{
                                    fontSize: 12,
                                    fontStyle: 'normal'
                                }}>{renderTechnologies(projects.spaceships.technologies.documentation)}</code></p>
                            </div>

                            <div style={{display: 'flex', alignItems: 'center'}}>
                                <AiFillWindows style={{marginRight: 2}}/>
                                <FcAndroidOs style={{marginRight: 5}}/>
                                <div style={{width: 1, height: 15, backgroundColor: '#282c34', marginRight: 10}}/>
                                <a style={{
                                    display: 'flex',
                                    flexDirection: 'row',
                                    textDecoration: 'none',
                                    alignItems: 'center',
                                    textAlign: 'center'
                                }} href={projects.spaceships.links.github}>
                                    <FaGithub color={'white'} size={20} style={{marginRight: 5}}/>
                                    <p style={{fontSize: 10, margin: 0, color: 'white'}}>
                                        Check out project page</p>
                                </a>
                            </div>
                        </div>
                    </div>
                    <Carousel.Caption/>
                </Carousel.Item>

                <Carousel.Item className={'carousel-item'}>
                    <div style={{display: 'flex', justifyContent: 'column', height: '60vh'}}>
                        <img
                            alt={''}
                            className={'d-block w-50'}
                            src={projects.apocalyptogame.image}
                            style={{opacity: 0.8, flex: 1}}
                        />
                        <div style={{margin: 40, textAlign: 'left', flex: 1}}>
                            <div style={{display: 'flex', alignItems: 'center'}}>
                                <div style={{width: 5, height: 30, backgroundColor: 'red'}}/>
                                <p style={{
                                    paddingLeft: 7,
                                    fontFamily: 'Open Sans',
                                    margin: 0
                                }}>{projects.apocalyptogame.name}</p>
                            </div>
                            <p style={{
                                fontSize: 12,
                                fontFamily: 'Open Sans',
                                marginTop: 30,
                                marginRight: 100
                            }}>{projects.apocalyptogame.description}</p>
                            <div style={{display: 'flex', marginTop: 30, alignItems: 'center'}}>
                                <FaWrench color={'red'} size={14} style={{marginRight: 5}}/>
                                <p style={{
                                    fontSize: 14,
                                    fontFamily: 'Open Sans',
                                    margin: 0
                                }}>{'Technologies used in project'}</p>
                            </div>
                            <code style={{
                                fontSize: 12,
                                fontStyle: 'normal'
                            }}>{renderTechnologies(projects.apocalyptogame.technologies)}</code>

                            <div style={{display: 'flex', alignItems: 'center', marginTop: 10}}>
                                <AiFillWindows style={{marginRight: 10}}/>
                                <div style={{width: 1, height: 15, backgroundColor: '#282c34', marginRight: 10}}/>
                                <div style={{display: 'flex', alignItems: 'center', flexDirection: 'row'}}>
                                    <a style={{
                                        display: 'flex',
                                        flexDirection: 'row',
                                        textDecoration: 'none',
                                        alignItems: 'center',
                                        textAlign: 'center'
                                    }} href={projects.apocalyptogame.links.github}>
                                        <FaGithub color={'white'} size={20} style={{marginRight: 5}}/>
                                        <p style={{fontSize: 10, margin: 0, color: 'white'}}>
                                            Check out project page</p>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <Carousel.Caption/>
                </Carousel.Item>

                <Carousel.Item className={'carousel-item'}>
                    <div style={{display: 'flex', justifyContent: 'column', height: '60vh'}}>
                        <img
                            alt={''}
                            className={'d-block w-50'}
                            src={projects.quiz.image}
                            style={{opacity: 0.9, flex: 1}}
                        />
                        <div style={{margin: 40, textAlign: 'left', flex: 1}}>
                            <div style={{display: 'flex', alignItems: 'center'}}>
                                <div style={{width: 5, height: 30, backgroundColor: 'yellow'}}/>
                                <p style={{
                                    paddingLeft: 7,
                                    fontFamily: 'Open Sans',
                                    margin: 0
                                }}>{projects.quiz.name}</p>
                            </div>
                            <p style={{
                                fontSize: 12,
                                fontFamily: 'Open Sans',
                                marginTop: 30,
                                marginRight: 100
                            }}>{projects.quiz.description}</p>
                            <div style={{display: 'flex', marginTop: 30, alignItems: 'center'}}>
                                <FaWrench color={'yellow'} size={14} style={{marginRight: 5}}/>
                                <p style={{
                                    fontSize: 14,
                                    fontFamily: 'Open Sans',
                                    margin: 0
                                }}>{'Technologies used in project'}</p>
                            </div>
                            <code style={{
                                fontSize: 12,
                                fontStyle: 'normal'
                            }}>{renderTechnologies(projects.quiz.technologies)}</code>

                            <div style={{display: 'flex', alignItems: 'center', marginTop: 10}}>
                                <FcAndroidOs style={{marginRight: 2}}/>
                                <IoLogoApple style={{marginRight: 5}}/>
                                <div style={{width: 1, height: 15, backgroundColor: '#282c34', marginRight: 10}}/>
                                <div style={{display: 'flex', alignItems: 'center', flexDirection: 'row'}}>
                                    <a style={{
                                        display: 'flex',
                                        flexDirection: 'row',
                                        textDecoration: 'none',
                                        alignItems: 'center',
                                        textAlign: 'center'
                                    }} href={projects.quiz.links.github}>
                                        <FaGithub color={'white'} size={20} style={{marginRight: 5}}/>
                                        <p style={{fontSize: 10, margin: 0, color: 'white'}}>
                                            Check out project page</p>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <Carousel.Caption/>
                </Carousel.Item>

                <Carousel.Item className={'carousel-item'}>
                    <div style={{display: 'flex', justifyContent: 'column', height: '60vh'}}>
                        <img
                            alt={''}
                            className={'d-block w-50'}
                            src={projects.imagebinarizer.image}
                            style={{opacity: 0.7, flex: 1}}
                        />
                        <div style={{margin: 40, textAlign: 'left', flex: 1}}>
                            <div style={{display: 'flex', alignItems: 'center'}}>
                                <div style={{width: 5, height: 30, backgroundColor: 'grey'}}/>
                                <p style={{
                                    paddingLeft: 7,
                                    fontFamily: 'Open Sans',
                                    margin: 0
                                }}>{projects.imagebinarizer.name}</p>
                            </div>
                            <p style={{
                                fontSize: 12,
                                fontFamily: 'Open Sans',
                                marginTop: 30,
                                marginRight: 100
                            }}>{projects.imagebinarizer.description}</p>
                            <div style={{display: 'flex', marginTop: 30, alignItems: 'center'}}>
                                <FaWrench color={'grey'} size={14} style={{marginRight: 5}}/>
                                <p style={{
                                    fontSize: 14,
                                    fontFamily: 'Open Sans',
                                    margin: 0
                                }}>{'Technologies used in project'}</p>
                            </div>
                            <code style={{
                                fontSize: 12,
                                fontStyle: 'normal'
                            }}>{renderTechnologies(projects.imagebinarizer.technologies)}</code>

                            <div style={{display: 'flex', alignItems: 'center', marginTop: 10}}>
                                <AiFillWindows style={{marginRight: 10}}/>
                                <div style={{width: 1, height: 15, backgroundColor: '#282c34', marginRight: 10}}/>
                                <div style={{display: 'flex', alignItems: 'center', flexDirection: 'row'}}>
                                    <a style={{
                                        display: 'flex',
                                        flexDirection: 'row',
                                        textDecoration: 'none',
                                        alignItems: 'center',
                                        textAlign: 'center'
                                    }} href={projects.imagebinarizer.links.github}>
                                        <FaGithub color={'white'} size={20} style={{marginRight: 5}}/>
                                        <p style={{fontSize: 10, margin: 0, color: 'white'}}>
                                            Check out project page</p>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <Carousel.Caption/>
                </Carousel.Item>

                <Carousel.Item className={'carousel-item'}>
                    <div style={{display: 'flex', justifyContent: 'column', height: '60vh'}}>
                        <img
                            alt={''}
                            className={'d-block w-50'}
                            src={projects.calculator.image}
                            style={{opacity: 0.9, flex: 1}}
                        />
                        <div style={{margin: 40, textAlign: 'left', flex: 1}}>
                            <div style={{display: 'flex', alignItems: 'center'}}>
                                <div style={{width: 5, height: 30, backgroundColor: 'blue'}}/>
                                <p style={{
                                    paddingLeft: 7,
                                    fontFamily: 'Open Sans',
                                    margin: 0
                                }}>{projects.calculator.name}</p>
                            </div>
                            <p style={{
                                fontSize: 12,
                                fontFamily: 'Open Sans',
                                marginTop: 30,
                                marginRight: 100
                            }}>{projects.calculator.description}</p>
                            <div style={{display: 'flex', marginTop: 30, alignItems: 'center'}}>
                                <FaWrench color={'blue'} size={14} style={{marginRight: 5}}/>
                                <p style={{
                                    fontSize: 14,
                                    fontFamily: 'Open Sans',
                                    margin: 0
                                }}>{'Technologies used in project'}</p>
                            </div>
                            <code style={{
                                fontSize: 12,
                                fontStyle: 'normal'
                            }}>{renderTechnologies(projects.calculator.technologies)}</code>

                            <div style={{display: 'flex', alignItems: 'center', marginTop: 10}}>
                                <FcAndroidOs style={{marginRight: 2}}/>
                                <IoLogoApple style={{marginRight: 5}}/>
                                <div style={{width: 1, height: 15, backgroundColor: '#282c34', marginRight: 10}}/>
                                <div style={{display: 'flex', alignItems: 'center', flexDirection: 'row'}}>
                                    <a style={{
                                        display: 'flex',
                                        flexDirection: 'row',
                                        textDecoration: 'none',
                                        alignItems: 'center',
                                        textAlign: 'center'
                                    }} href={projects.calculator.links.github}>
                                        <FaGithub color={'white'} size={20} style={{marginRight: 5}}/>
                                        <p style={{fontSize: 10, margin: 0, color: 'white'}}>
                                            Check out project page</p>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <Carousel.Caption/>
                </Carousel.Item>

                <Carousel.Item className={'carousel-item'}>
                    <div style={{display: 'flex', justifyContent: 'column', height: '60vh'}}>
                        <img
                            alt={''}
                            className={'d-block w-50'}
                            src={projects.databaseapp.image}
                            style={{opacity: 0.8, flex: 1}}
                        />
                        <div style={{margin: 40, textAlign: 'left', flex: 1}}>
                            <div style={{display: 'flex', alignItems: 'center'}}>
                                <div style={{width: 5, height: 30, backgroundColor: '#1E90FF'}}/>
                                <p style={{
                                    paddingLeft: 7,
                                    fontFamily: 'Open Sans',
                                    margin: 0
                                }}>{projects.databaseapp.name}</p>
                            </div>
                            <p style={{
                                fontSize: 12,
                                fontFamily: 'Open Sans',
                                marginTop: 30,
                                marginRight: 100
                            }}>{projects.databaseapp.description}</p>
                            <div style={{display: 'flex', marginTop: 30, alignItems: 'center'}}>
                                <FaWrench color={'#1E90FF'} size={14} style={{marginRight: 5}}/>
                                <p style={{
                                    fontSize: 14,
                                    fontFamily: 'Open Sans',
                                    margin: 0
                                }}>{'Technologies used in project'}</p>
                            </div>
                            <code style={{
                                fontSize: 12,
                                fontStyle: 'normal'
                            }}>{renderTechnologies(projects.databaseapp.technologies)}</code>

                            <div style={{display: 'flex', alignItems: 'center', marginTop: 10}}>
                                <AiFillWindows style={{marginRight: 10}}/>
                                <div style={{width: 1, height: 15, backgroundColor: '#282c34', marginRight: 10}}/>
                                <div style={{display: 'flex', alignItems: 'center', flexDirection: 'row'}}>
                                    <a style={{
                                        display: 'flex',
                                        flexDirection: 'row',
                                        textDecoration: 'none',
                                        alignItems: 'center',
                                        textAlign: 'center'
                                    }} href={projects.databaseapp.links.github}>
                                        <FaGithub color={'white'} size={20} style={{marginRight: 5}}/>
                                        <p style={{fontSize: 10, margin: 0, color: 'white'}}>
                                            Check out project page</p>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <Carousel.Caption/>
                </Carousel.Item>
            </Carousel>
        </div>
    );
}

export default Projects;
