import {AiFillWindows, FaGithub, FaWrench, FaYoutube, FcAndroidOs, FcLinux, IoLogoApple} from "react-icons/all";
import React from "react";

const ProjectItem = ({image, color, name, description, technologies, os, languages, links, additionalData}) => {

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

    const renderTechnologiesBlock = (technologies) => {
        let view = [];

        if(Object.keys(technologies).length === 1) {
            view.push(
                <code style={{
                    fontSize: 12,
                    fontStyle: 'normal'
                }}>{renderTechnologies(technologies[Object.keys(technologies)])}</code>
            )
        } else {
            Object.keys(technologies).map((technology) =>
                view.push(
                    <p style={{
                        fontSize: 12,
                        fontFamily: 'Open Sans',
                        marginBottom: 5
                    }}>{technology.charAt(0).toUpperCase() + technology.slice(1) + ':'} <code style={{
                        fontSize: 12,
                        fontStyle: 'normal'
                    }}>{renderTechnologies(technologies[technology])}</code></p>
                )
            )
        }

        return view;
    }

    const renderLanguages = (languages) => {
        let view = [];
        languages.map((country) => view.push(
            <img
                width={20}
                height={12}
                alt={country}
                src={'https://purecatamphetamine.github.io/country-flag-icons/1x1/' + country + '.svg'}
            />
        ))

        return view;
    }

    return (
        <div style={{display: 'flex', justifyContent: 'column', height: '60vh'}}>
            <img
                alt={''}
                className={'d-block w-50'}
                src={image}
                style={{opacity: 0.8, flex: 1}}
            />
            <div style={{margin: 40, textAlign: 'left', flex: 1}}>
                <div style={{display: 'flex', alignItems: 'center'}}>
                    <div style={{width: 5, height: 30, backgroundColor: color}}/>
                    <p style={{
                        paddingLeft: 7,
                        fontFamily: 'Open Sans',
                        margin: 0
                    }}>{name}</p>
                </div>
                <p style={{
                    fontSize: 12,
                    fontFamily: 'Open Sans',
                    marginTop: 30,
                    marginRight: 100
                }}>{description}</p>
                <div style={{display: 'flex', marginTop: 30, marginBottom: 10, alignItems: 'center'}}>
                    <FaWrench color={color} size={14} style={{marginRight: 5}}/>
                    <p style={{
                        fontSize: 14,
                        fontFamily: 'Open Sans',
                        margin: 0
                    }}>{'Technologies used in project'}</p>
                </div>
                <div>
                    {
                        renderTechnologiesBlock(technologies)
                    }
                </div>

                <div style={{display: 'flex', marginTop: 20, alignItems: 'center', justifyContent: 'space-between', width: additionalData ? '80%' : '74%'}}>
                    {
                        os.includes('Windows') && <AiFillWindows/>
                    }
                    {
                        os.includes('Linux') && <FcLinux/>
                    }
                    {
                        os.includes('Android') && <FcAndroidOs/>
                    }
                    {
                        os.includes('iOS') && <IoLogoApple/>
                    }
                    {
                        languages &&  <div style={{width: 1, height: 15, backgroundColor: '#282c34'}}/>
                    }
                    {
                        languages && renderLanguages(languages)
                    }
                    {
                        additionalData &&  <div style={{width: 1, height: 15, backgroundColor: '#282c34'}}/>
                    }
                    {
                        additionalData &&
                        <a style={{
                            display: 'flex',
                            flexDirection: 'row',
                            textDecoration: 'none',
                            alignItems: 'center',
                            textAlign: 'center',
                        }}
                           href={additionalData.link}>
                            <img
                                width={65}
                                height={16}
                                alt={additionalData.name}
                                src={additionalData.image}/>
                            <p style={{fontSize: 10, margin: 0, color: 'white'}}>{additionalData.text}</p>
                        </a>
                    }
                    <div style={{width: 1, height: 15, backgroundColor: '#282c34'}}/>
                    <div style={{display: 'flex', alignItems: 'center', flexDirection: 'row'}}>
                        {
                            links.github &&
                            <a style={{
                                display: 'flex',
                                flexDirection: 'row',
                                textDecoration: 'none',
                                alignItems: 'center',
                                textAlign: 'center'
                            }} href={links.github}>
                                <FaGithub color={'white'} size={20} style={{marginRight: 5}}/>
                                <p style={{fontSize: 10, margin: 0, color: 'white'}}>
                                    Check out project page</p>
                            </a>
                        }
                        {
                            links.youtube &&
                            <a style={{
                                display: 'flex',
                                flexDirection: 'row',
                                textDecoration: 'none',
                                alignItems: 'center',
                                textAlign: 'center',
                                marginLeft: 5
                            }}
                               href={links.youtube}>
                                <FaYoutube color={'red'} style={{marginLeft: 5, marginRight: 5}}/>
                                <p style={{fontSize: 10, margin: 0, color: 'white'}}>
                                    Check out the presentation video</p>
                            </a>
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProjectItem;
