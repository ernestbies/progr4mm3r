import {AiFillInfoCircle, AiFillWindows,} from "react-icons/ai";
import {FaWrench} from "react-icons/fa";
import {FcAndroidOs, FcLinux} from "react-icons/fc";
import {IoLogoApple} from "react-icons/io";
import React from "react";
import {useTranslation} from "react-i18next";
import PropTypes from 'prop-types';
import './ProjectItem.styles.css';
import Link from "../Link/Link";

const ProjectItem = ({id, image, color, name, description, technologies, os, languages, links, additionalData}) => {

    const {t} = useTranslation('common');

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
                <code key={numOfTechnologies} style={{fontSize: 11, color: color}}>
                    {renderTechnologies(technologies[Object.keys(technologies)])}
                </code>
            )
        } else {
            Object.keys(technologies).map((technology) =>
                view.push(
                    <p key={technology} style={{
                        fontSize: 12,
                        fontFamily: 'Roboto Condensed',
                        fontWeight: 300,
                        marginBottom: 5
                    }}>{t(technology) + ':'} <code style={{
                        fontSize: 12,
                        fontStyle: 'normal',
                        color: color
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
                alt={country}
                style={{marginRight: 3}}
                width={20}
                height={12}
                src={'https://purecatamphetamine.github.io/country-flag-icons/1x1/' + country + '.svg'}
            />
        ))

        return view;
    };

    return (
        <div className={'carousel-project-item'} key={id}>
            <img
                alt={name}
                src={image}
                className={'carousel-project-img'}
            />
            <div className={'carousel-content'}>
                <div style={{display: 'flex', alignItems: 'center'}}>
                    <p style={{
                        borderLeftWidth: 5,
                        borderLeftStyle: 'solid',
                        borderLeftColor: color,
                        paddingLeft: 7,
                        fontFamily: 'Roboto Condensed',
                        margin: 0
                    }}>{name}</p>
                </div>
                <p style={{
                    fontSize: 12,
                    fontFamily: 'Roboto Condensed',
                    fontWeight: 300,
                    marginTop: 30,
                }}>{description}</p>
                <div style={{display: 'flex', marginTop: 30, marginBottom: 10, alignItems: 'center'}}>
                    <FaWrench color={color} size={14} style={{marginRight: 5}}/>
                    <p style={{
                        fontSize: 14,
                        fontFamily: 'Roboto Condensed',
                        margin: 0
                    }}>{t('technologies_text')}</p>
                </div>
                <>
                    {
                        renderTechnologiesBlock(technologies)
                    }
                </>

                <div style={{display: 'flex', marginTop: 30, alignItems: 'center'}}>
                    <AiFillInfoCircle color={color} size={14} style={{marginRight: 5}}/>
                    <p style={{
                        fontSize: 14,
                        fontFamily: 'Roboto Condensed',
                        margin: 0
                    }}>{t('technical_info')}</p>
                </div>
                <div style={{marginBottom: 30, marginTop: 10, display: 'flex', alignItems: 'center'}}>
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
                        languages &&
                        <div style={{
                            fontFamily: 'Open Sans',
                            fontSize: 11,
                            fontWeight: 300,
                            display: 'inline-flex',
                            flexDirection: 'row'
                        }}>{renderLanguages(languages)}</div>
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
                            display: 'inline-flex',
                            alignItems: 'center',
                            textDecoration: 'none',
                            textAlign: 'center',
                            marginRight: 3,
                        }}
                           href={additionalData.link}>
                            <img
                                width={60}
                                height={16}
                                alt={additionalData.name}
                                src={additionalData.image}
                            />
                            <span className={'text-info'}>{t(additionalData.text)}</span>
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
                        links.github && <Link link={links.github} type={'github'}/>
                    }
                    {
                        links.bitbucket && <Link link={links.bitbucket} type={'bitbucket'}/>
                    }
                    {
                        links.youtube && <Link link={links.youtube} type={'youtube'}/>
                    }
                </div>
            </div>
        </div>
    )
}

ProjectItem.propTypes = {
    id: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    technologies: PropTypes.object.isRequired,
    os: PropTypes.arrayOf(PropTypes.string).isRequired,
    languages: PropTypes.array,
    links: PropTypes.object.isRequired,
    additionalData: PropTypes.object
}

export default ProjectItem;
