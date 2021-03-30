import React from 'react';
import {skills} from "../utils/skills";

const Skills = () => {
    return (
        <div id={'skills'} className={'item-dashboard'} style={{backgroundColor: '#1d2026'}}>
            <p style={{
                color: 'white',
                display: 'inline-block',
                fontFamily: 'Open Sans',
                fontWeight: 300,
                marginTop: 20
            }}>Skills</p>
            <p style={{fontSize: 15, marginTop: 15, fontFamily: 'Open Sans'}}>I am constantly trying to gain knowledge
                and improve my programming skills.<br/>
                I have learned many programming languages, but I mainly focus on <code
                    style={{color: 'orange', fontSize: 15}}>Java</code> and <code
                    style={{color: 'orange', fontSize: 15}}>JavaScript</code>.</p>
            <div className={'language-icons'}>
                <div style={{flex: 1, display: 'flex', alignItems: 'center', flexDirection: 'column'}}>
                    <p style={{marginTop: 10, fontSize: 14, fontFamily: 'Open Sans'}}>Programming languages</p>
                    <div style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        width: '65%',
                        marginBottom: 25,
                        marginTop: 25
                    }}>

                        <div className={'tooltipClassSmall'}>
                            <span className={'tooltipText'}
                                  style={{color: skills.languages.java.color}}>{skills.languages.java.name}</span>
                            <img alt={skills.languages.java.name} src={skills.languages.java.image} width={50}
                                 height={75}/>
                        </div>

                        <div className={'tooltipClassSmall'}>
                            <span className={'tooltipText'}
                                  style={{color: skills.languages.javaScript.color}}>{skills.languages.javaScript.name}</span>
                            <img alt={skills.languages.javaScript.name} src={skills.languages.javaScript.image}
                                 width={50} height={50}/>
                        </div>

                        <div className={'tooltipClassSmall'}>
                            <span className={'tooltipText'}
                                  style={{color: skills.languages.html.color}}>{skills.languages.html.name}</span>
                            <img alt={skills.languages.html.name} src={skills.languages.html.image} width={50}
                                 height={50}/>
                        </div>

                        <div className={'tooltipClassSmall'}>
                            <span className={'tooltipText'}
                                  style={{color: skills.languages.css.color}}>{skills.languages.css.name}</span>
                            <img alt={skills.languages.css.name} src={skills.languages.css.image} width={50}
                                 height={50}/>
                        </div>

                        <div className={'tooltipClassSmall'}>
                            <span className={'tooltipText'}
                                  style={{color: skills.languages.sql.color}}>{skills.languages.sql.name}</span>
                            <img alt={skills.languages.sql.name} src={skills.languages.sql.image} width={50}
                                 height={50}/>
                        </div>

                        <div className={'tooltipClassSmall'}>
                            <span className={'tooltipText'}
                                  style={{color: skills.languages.plSql.color}}>{skills.languages.plSql.name}</span>
                            <img alt={skills.languages.plSql.name} src={skills.languages.plSql.image} width={50}
                                 height={50}/>
                        </div>
                    </div>

                    <div style={{display: 'flex', justifyContent: 'space-between', width: '65%'}}>

                        <div className={'tooltipClassSmall'}>
                            <span className={'tooltipText'}
                                  style={{color: skills.languages.python.color}}>{skills.languages.python.name}</span>
                            <img alt={skills.languages.python.name} src={skills.languages.python.image} width={50}
                                 height={50}/>
                        </div>

                        <div className={'tooltipClassSmall'}>
                            <span className={'tooltipText'}
                                  style={{color: skills.languages.c.color}}>{skills.languages.c.name}</span>
                            <img alt={skills.languages.c.name} src={skills.languages.c.image} width={50} height={50}/>
                        </div>

                        <div className={'tooltipClassSmall'}>
                            <span className={'tooltipText'}
                                  style={{color: skills.languages.cPlusPlus.color}}>{skills.languages.cPlusPlus.name}</span>
                            <img alt={skills.languages.cPlusPlus.image} src={skills.languages.cPlusPlus.image}
                                 width={50} height={50}/>
                        </div>

                        <div className={'tooltipClassSmall'}>
                            <span className={'tooltipText'}
                                  style={{color: skills.languages.cSharp.color}}>{skills.languages.cSharp.name}</span>
                            <img alt={skills.languages.cSharp.name} src={skills.languages.cSharp.image} width={50}
                                 height={50}/>
                        </div>

                        <div className={'tooltipClassSmall'}>
                            <span className={'tooltipText'}
                                  style={{color: skills.languages.r.color}}>{skills.languages.r.name}</span>
                            <img alt={skills.languages.r.name} src={skills.languages.r.image} width={50} height={50}/>
                        </div>

                        <div className={'tooltipClassSmall'}>
                            <span className={'tooltipText'}
                                  style={{color: skills.languages.haskell.color}}>{skills.languages.haskell.name}</span>
                            <img alt={skills.languages.haskell.name} src={skills.languages.haskell.image} width={50}
                                 height={50}/>
                        </div>
                    </div>
                </div>
                <div style={{width: 100, height: 1, backgroundColor: 'orange'}}/>
                <div style={{flex: 1, display: 'flex', alignItems: 'center', flexDirection: 'column'}}>
                    <p style={{marginTop: 10, fontSize: 14, fontFamily: 'Open Sans'}}>Tools and technologies</p>
                    <div style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        width: '65%',
                        marginBottom: 25,
                        marginTop: 25
                    }}>
                        <div className={'tooltipClassSmall'}>
                            <span className={'tooltipText'}
                                  style={{color: skills.technologies.reactJs.color}}>{skills.technologies.reactJs.name}</span>
                            <img alt={skills.technologies.reactJs.name} src={skills.technologies.reactJs.image}
                                 width={50} height={50}/>
                        </div>

                        <div className={'tooltipClassSmall'}>
                            <span className={'tooltipText'}
                                  style={{color: skills.technologies.reactNative.color}}>{skills.technologies.reactNative.name}</span>
                            <img alt={skills.technologies.reactNative.name} src={skills.technologies.reactNative.image}
                                 width={50} height={50}/>
                        </div>

                        <div className={'tooltipClassSmall'}>
                            <span className={'tooltipText'}
                                  style={{color: skills.technologies.nodeJs.color}}>{skills.technologies.nodeJs.name}</span>
                            <img alt={skills.technologies.nodeJs.name} src={skills.technologies.nodeJs.image} width={50}
                                 height={50}/>
                        </div>

                        <div className={'tooltipClassSmall'}>
                            <span className={'tooltipText'}
                                  style={{color: skills.technologies.angular.color}}>{skills.technologies.angular.name}</span>
                            <img alt={skills.technologies.angular.name} src={skills.technologies.angular.image}
                                 width={50} height={50}/>
                        </div>

                        <div className={'tooltipClassSmall'}>
                            <span className={'tooltipText'}
                                  style={{color: skills.technologies.spring.color}}>{skills.technologies.spring.name}</span>
                            <img alt={skills.technologies.spring.name} src={skills.technologies.spring.image} width={50}
                                 height={50}/>
                        </div>

                        <div className={'tooltipClassSmall'}>
                            <span className={'tooltipText'}
                                  style={{color: skills.technologies.unity.color}}>{skills.technologies.unity.name}</span>
                            <img alt={skills.technologies.unity.name} src={skills.technologies.unity.image} width={50}
                                 height={50}/>
                        </div>
                    </div>

                    <div style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        width: '65%',
                        marginBottom: 25,
                        marginTop: 25
                    }}>
                        <div className={'tooltipClassSmall'}>
                            <span className={'tooltipText'}
                                  style={{color: skills.technologies.hapiJs.color}}>{skills.technologies.hapiJs.name}</span>
                            <img alt={skills.technologies.hapiJs.name} src={skills.technologies.hapiJs.image} width={50}
                                 height={50}/>
                        </div>

                        <div className={'tooltipClassSmall'}>
                            <span className={'tooltipText'}
                                  style={{color: skills.technologies.mongoDb.color}}>{skills.technologies.mongoDb.name}</span>
                            <img alt={skills.technologies.mongoDb.name} src={skills.technologies.mongoDb.image}
                                 width={50} height={50}/>
                        </div>

                        <div className={'tooltipClassSmall'}>
                            <span className={'tooltipText'}
                                  style={{color: skills.technologies.mongoose.color}}>{skills.technologies.mongoose.name}</span>
                            <img alt={skills.technologies.mongoose.name} src={skills.technologies.mongoose.image}
                                 width={50} height={50}/>
                        </div>

                        <div className={'tooltipClassSmall'}>
                            <span className={'tooltipText'}
                                  style={{color: skills.technologies.jwt.color}}>{skills.technologies.jwt.name}</span>
                            <img alt={skills.technologies.jwt.name} src={skills.technologies.jwt.image} width={50}
                                 height={50}/>
                        </div>

                        <div className={'tooltipClassSmall'}>
                            <span className={'tooltipText'}
                                  style={{color: skills.technologies.jest.color}}>{skills.technologies.jest.name}</span>
                            <img alt={skills.technologies.jest.name} src={skills.technologies.jest.image} width={50}
                                 height={50}/>
                        </div>

                        <div className={'tooltipClassSmall'}>
                            <span className={'tooltipText'}
                                  style={{color: skills.technologies.junit.color}}>{skills.technologies.junit.name}</span>
                            <img alt={skills.technologies.junit.name} src={skills.technologies.junit.image} width={50}
                                 height={50}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Skills;
