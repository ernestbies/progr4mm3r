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

const Projects = () => {
    const projects = {
        mediabrowser: {
            name: 'Media Browser',
            description: 'System for searching information about audiovisual materials. Project implemented as part of an engineering thesis. The application allows you to search and view information about movies, series and people related to the film industry. The application is designed for devices with Android and iOS. The application supports Polish and English.',
            technologies: {
                mobile: ['JavaScript', 'React Native', 'React Native Navigation', 'React Native SVG', 'MobX', 'SQLite'],
                server: ['Node.js', 'Hapi.js', 'lodash', 'JSON Web Token', 'bcrpyt', 'nodemailer'],
                database: ['MongoDB', 'mongoose']
            },
            image: 'images/projects/mediabrowser-dashboard.png',
            links: {
                github: 'https://github.com/ernestbies/MediaBrowser-mobile',
                youtube: 'https://youtu.be/7r1r9JiKsYc'
            }
        },
        camerafingerprint: {
            name: 'Camera Fingerprint PRNU',
            description: 'Camera Fingerprint PRNU (Autopsy module) uses photo response non-uniformity of camera sensor (PRNU) to check if a photo was truly taken by a suspected camera or not. Module is not based on metadata such as EXIF, performs a physical analysis of the camera sensor, determines photo response non-uniformity (PRNU), uses the principle that each sensor pixel behaves differently with effects such as non-uniform photo response, making each sensor is unique, identifies each pixel anomaly and uses this information to create a description of the camera sensor - the camera fingerprint. The project was presented at the 2020 Open Source Digital Forensics Conference (#OSDFCon) and placed on the organizer\'s home page.',
            technologies: ['Autopsy (ver. 4.15.0)', 'Apache Netbeans IDE (ver. 9.0)', 'Python (ver. 3.6.0)'],
            image: 'images/projects/camerafingerprint.png',
            links: {
                github: 'https://github.com/ernestbies/Camera-Fingerprint-PRNU',
                youtube: 'https://www.youtube.com/watch?v=lsoqVuuq9T0'
            }
        },
        spaceships: {
            name: 'Spaceships',
            description: 'Spaceships is a puzzle game combining two popular games "Ships" and "Minesweeper" based on a client-server architecture. The aim of the game is to find all the ships on the board in the fewest possible steps, using the information on how many ships there are in near an exposed space on the board.',
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
                    <div style={{display: 'flex', justifyContent: 'column', height: '60vh'}}>
                        <img
                            alt={''}
                            className={'d-block w-50'}
                            src={projects.mediabrowser.image}
                            style={{opacity: 0.8, flex: 1}}
                        />
                        <div style={{margin: 40, textAlign: 'left', flex: 1}}>
                            <div style={{display: 'flex', alignItems: 'center'}}>
                                <div style={{width: 5, height: 30, backgroundColor: 'red'}}/>
                                <p style={{
                                    paddingLeft: 7,
                                    fontFamily: 'Open Sans',
                                    margin: 0
                                }}>{projects.mediabrowser.name}</p>
                            </div>
                            <p style={{
                                fontSize: 12,
                                fontFamily: 'Open Sans',
                                marginTop: 30,
                                marginRight: 100
                            }}>{projects.mediabrowser.description}</p>
                            <div style={{display: 'flex', marginTop: 30, alignItems: 'center'}}>
                                <FaWrench color={'red'} size={14} style={{marginRight: 5}}/>
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
                                }}>{'Mobile app:'} <code style={{
                                    fontSize: 12,
                                    fontStyle: 'normal'
                                }}>{renderTechnologies(projects.mediabrowser.technologies.mobile)}</code></p>

                                <p style={{
                                    fontSize: 12,
                                    fontFamily: 'Open Sans',
                                    marginTop: -10
                                }}>{'Server:'} <code style={{
                                    fontSize: 12,
                                    fontStyle: 'normal'
                                }}>{renderTechnologies(projects.mediabrowser.technologies.server)}</code></p>

                                <p style={{
                                    fontSize: 12,
                                    fontFamily: 'Open Sans',
                                    marginTop: -10
                                }}>{'Database:'} <code style={{
                                    fontSize: 12,
                                    fontStyle: 'normal'
                                }}>{renderTechnologies(projects.mediabrowser.technologies.database)}</code></p>
                            </div>

                            <div style={{display: 'flex', alignItems: 'center'}}>
                                <FcAndroidOs style={{marginRight: 2}}/>
                                <IoLogoApple style={{marginRight: 5}}/>
                                <div style={{width: 1, height: 15, backgroundColor: '#282c34', marginRight: 10}}/>
                                <img
                                    width={20}
                                    height={12}
                                    style={{marginRight: 5}}
                                    alt='Poland'
                                    src='https://purecatamphetamine.github.io/country-flag-icons/1x1/PL.svg'/>
                                <img
                                    width={20}
                                    height={12}
                                    alt='United States'
                                    src='https://purecatamphetamine.github.io/country-flag-icons/1x1/US.svg'/>
                                <div style={{
                                    width: 0.5,
                                    height: 15,
                                    backgroundColor: '#282c34',
                                    marginLeft: 10,
                                    marginRight: 10
                                }}/>
                                <div style={{display: 'flex', alignItems: 'center', flexDirection: 'row'}}>
                                    <a style={{
                                        display: 'flex',
                                        flexDirection: 'row',
                                        textDecoration: 'none',
                                        alignItems: 'center',
                                        textAlign: 'center'
                                    }} href={projects.mediabrowser.links.github}>
                                        <FaGithub color={'white'} size={20} style={{marginRight: 5}}/>
                                        <p style={{fontSize: 10, margin: 0, color: 'white'}}>
                                            Check out project page</p>
                                    </a>
                                    <a style={{
                                        display: 'flex',
                                        flexDirection: 'row',
                                        textDecoration: 'none',
                                        alignItems: 'center',
                                        textAlign: 'center',
                                        marginLeft: 5
                                    }}
                                       href={projects.mediabrowser.links.youtube}>
                                        <FaYoutube color={'red'} style={{marginLeft: 5, marginRight: 5}}/>
                                        <p style={{fontSize: 10, margin: 0, color: 'white'}}>
                                            Check out the presentation video</p>
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
                            src={projects.camerafingerprint.image}
                            style={{opacity: 0.8, flex: 1}}
                        />
                        <div style={{margin: 40, textAlign: 'left', flex: 1}}>
                            <div style={{display: 'flex', alignItems: 'center'}}>
                                <div style={{width: 5, height: 30, backgroundColor: '#DC143C'}}/>
                                <p style={{
                                    paddingLeft: 7,
                                    fontFamily: 'Open Sans',
                                    margin: 0
                                }}>{projects.camerafingerprint.name}</p>
                            </div>
                            <p style={{
                                fontSize: 12,
                                fontFamily: 'Open Sans',
                                marginTop: 30,
                                marginRight: 100
                            }}>{projects.camerafingerprint.description}</p>
                            <div style={{display: 'flex', marginTop: 30, alignItems: 'center'}}>
                                <FaWrench color={'#DC143C'} size={14} style={{marginRight: 5}}/>
                                <p style={{
                                    fontSize: 14,
                                    fontFamily: 'Open Sans',
                                    margin: 0
                                }}>{'Technologies used in project'}</p>
                            </div>
                            <code style={{
                                fontSize: 12,
                                fontStyle: 'normal'
                            }}>{renderTechnologies(projects.camerafingerprint.technologies)}</code>

                            <div style={{display: 'flex', alignItems: 'center', marginTop: 10}}>
                                <AiFillWindows style={{marginRight: 10}}/>
                                <div style={{width: 1, height: 15, backgroundColor: '#282c34', marginRight: 5}}/>
                                <a style={{display: 'flex', textDecoration: 'none'}}
                                   href={'https://www.osdfcon.org/2020-event/2020-module-development-contest/'}>
                                    <img
                                        width={80}
                                        height={16}
                                        alt={'OSDFCon'}
                                        style={{marginRight: 5}}
                                        src={'images/projects/osdfcon.png'}/>
                                    <p style={{fontSize: 10, margin: 0, color: 'white'}}>
                                    Presented at conference</p>
                                </a>
                                <div style={{
                                    width: 1,
                                    height: 15,
                                    backgroundColor: '#282c34',
                                    marginLeft: 10,
                                    marginRight: 10
                                }}/>
                                <div style={{display: 'flex', alignItems: 'center', flexDirection: 'row'}}>
                                    <a style={{
                                        display: 'flex',
                                        flexDirection: 'row',
                                        textDecoration: 'none',
                                        alignItems: 'center',
                                        textAlign: 'center'
                                    }} href={projects.camerafingerprint.links.github}>
                                        <FaGithub color={'white'} size={20} style={{marginRight: 5}}/>
                                        <p style={{fontSize: 10, margin: 0, color: 'white'}}>
                                            Check out project page</p>
                                    </a>
                                    <a style={{
                                        display: 'flex',
                                        flexDirection: 'row',
                                        textDecoration: 'none',
                                        alignItems: 'center',
                                        textAlign: 'center',
                                        marginLeft: 5
                                    }}
                                       href={projects.camerafingerprint.links.youtube}>
                                        <FaYoutube color={'red'} style={{marginLeft: 5, marginRight: 5}}/>
                                        <p style={{fontSize: 10, margin: 0, color: 'white'}}>
                                            Check out the presentation video</p>
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
                                <div style={{display: 'flex', alignItems: 'center', flexDirection: 'row'}}>
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
                    </div>
                    <Carousel.Caption/>
                </Carousel.Item>
            </Carousel>
        </div>
    );
}

export default Projects;
