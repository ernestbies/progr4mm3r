import {
    AiFillInfoCircle,
    AiFillWindows, FaBitbucket,
    FaGithub,
    FaWrench,
    FaYoutube,
    FcAndroidOs,
    FcLinux,
    IoLogoApple
} from "react-icons/all";
import React from "react";

const ProjectItem = ({id, image, color, name, description, technologies, os, languages, links, additionalData}) => {

    const renderTechnologies = (technologies) => {
        const len = technologies.length;
        return technologies.map((el, i) => {
            if (len === i + 1) {
                return el;
            } else {
                return <span key={el}>{el} <span style={{color: '#A9A9A9'}}> | </span></span>;
            }
        });
    };

    const renderTechnologiesBlock = (technologies) => {
        let view = [];
        let numOfTechnologies = Object.keys(technologies).length;

        if (numOfTechnologies === 1) {
            view.push(
                <code key={numOfTechnologies} style={{
                    fontSize: 12,
                    fontStyle: 'normal'
                }}>{renderTechnologies(technologies[Object.keys(technologies)])}</code>
            )
        } else {
            Object.keys(technologies).map((technology) =>
                view.push(
                    <p key={technology} style={{
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
    };

    const renderLanguages = (languages) => {
        let view = [];
        languages.map((country) => view.push(
            <img
                key={country}
                style={{marginRight: 3}}
                width={20}
                height={12}
                alt={country}
                src={'https://purecatamphetamine.github.io/country-flag-icons/1x1/' + country + '.svg'}
            />
        ))

        return view;
    };

    return (
        <div className={'carousel-item'} style={{display: 'flex'}} key={id}>
            <img
                alt={name}
                src={image}
                style={{opacity: 0.8, flex: 1, width: '100%'}}
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

                <div style={{display: 'flex', marginTop: 30, alignItems: 'center'}}>
                    <AiFillInfoCircle color={color} size={14} style={{marginRight: 5}}/>
                    <p style={{
                        fontSize: 14,
                        fontFamily: 'Open Sans',
                        margin: 0
                    }}>{'Technical information'}</p>
                </div>
                <div>
                    {
                        os.includes('Windows') && <AiFillWindows size={20} style={{marginRight: 3}}/>
                    }
                    {
                        os.includes('Linux') && <FcLinux size={20} style={{marginRight: 3}}/>
                    }
                    {
                        os.includes('Android') && <FcAndroidOs size={20} style={{marginRight: 3}}/>
                    }
                    {
                        os.includes('iOS') && <IoLogoApple size={20} style={{marginRight: 3}}/>
                    }
                    {
                        languages &&
                        <div style={{
                            width: 1,
                            height: 15,
                            backgroundColor: '#282c34',
                            marginLeft: 5,
                            marginRight: 8,
                            display: 'inline-block',
                        }}/>
                    }
                    {
                        languages && renderLanguages(languages)
                    }
                    {
                        additionalData &&
                        <div style={{
                            width: 1,
                            height: 15,
                            backgroundColor: '#282c34',
                            marginLeft: 5,
                            marginRight: 8,
                            display: 'inline-block',
                        }}/>
                    }
                    {
                        additionalData &&
                        <a style={{
                            display: 'inline',
                            textDecoration: 'none',
                            alignItems: 'center',
                            textAlign: 'center',
                            marginRight: 3
                        }}
                           href={additionalData.link}>
                            <img
                                width={65}
                                height={16}
                                alt={additionalData.name}
                                src={additionalData.image}/>
                            <p style={{
                                fontSize: 10,
                                margin: 0,
                                color: 'white',
                                display: 'inline'
                            }}>{additionalData.text}</p>
                        </a>
                    }
                    <div style={{
                        width: 1,
                        height: 15,
                        backgroundColor: '#282c34',
                        marginLeft: 5,
                        marginRight: 8,
                        display: 'inline-block',
                    }}/>
                    {
                        links.github &&
                        <a style={{
                            display: 'inline',
                            textDecoration: 'none',
                            textAlign: 'center',
                        }} href={links.github}>
                            <FaGithub color={'white'} size={20} style={{marginRight: 5}}/>
                            <p style={{fontSize: 10, margin: 0, color: 'white', display: 'inline'}}>
                                Check out project page</p>
                        </a>
                    }
                    {
                        links.bitbucket &&
                        <a style={{
                            display: 'inline',
                            textDecoration: 'none',
                            textAlign: 'center',
                        }} href={links.bitbucket}>
                            <FaBitbucket size={20} style={{marginRight: 5}}/>
                            <p style={{fontSize: 10, margin: 0, color: 'white', display: 'inline'}}>
                                Check out project page</p>
                        </a>
                    }
                    {
                        links.youtube &&
                        <a style={{
                            display: 'inline',
                            textDecoration: 'none',
                            textAlign: 'center',
                            marginLeft: 5
                        }}
                           href={links.youtube}>
                            <FaYoutube color={'red'} size={20} style={{marginLeft: 5, marginRight: 5}}/>
                            <p style={{fontSize: 10, margin: 0, color: 'white', display: 'inline'}}>
                                Check out the presentation video</p>
                        </a>
                    }
                </div>
            </div>
        </div>
    )
}

export default ProjectItem;
