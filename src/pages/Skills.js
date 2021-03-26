import React from 'react';

const Skills = () => {
    return (
        <div id={'skills'} className={'item-dashboard'} style={{backgroundColor: '#1d2026'}}>
            <p style={{color: 'white', display: 'inline-block', fontFamily: 'Open Sans', fontWeight: 300, marginTop: 20}}>Skills</p>
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
                            <span className={'tooltipText'} style={{color: '#FFA500'}}>Java</span>
                            <img alt={''} src={'/images/languages/language-java.png'} width={50} height={75}/>
                        </div>

                        <div className={'tooltipClassSmall'}>
                            <span className={'tooltipText'} style={{color: 'yellow'}}>JavaScript</span>
                            <img alt={''} src={'/images/languages/language-js.png'} width={50} height={50}/>
                        </div>

                        <div className={'tooltipClassSmall'}>
                            <span className={'tooltipText'} style={{color: '#FF4500'}}>HTML</span>
                            <img alt={''} src={'/images/languages/html.png'} width={50} height={50}/>
                        </div>

                        <div className={'tooltipClassSmall'}>
                            <span className={'tooltipText'} style={{color: '#87CEFA'}}>CSS</span>
                            <img alt={''} src={'/images/languages/css.png'} width={50} height={50}/>
                        </div>

                        <div className={'tooltipClassSmall'}>
                            <span className={'tooltipText'} style={{color: '#1E90FF'}}>SQL</span>
                            <img alt={''} src={'/images/languages/language-sql.png'} width={50} height={50}/>
                        </div>

                        <div className={'tooltipClassSmall'}>
                            <span className={'tooltipText'} style={{color: '#6495ED'}}>PL/pgSQL</span>
                            <img alt={''} src={'/images/languages/language-plpgsql.png'} width={50} height={50}/>
                        </div>
                    </div>

                    <div style={{display: 'flex', justifyContent: 'space-between', width: '65%'}}>

                        <div className={'tooltipClassSmall'}>
                            <span className={'tooltipText'} style={{color: '#1E90FF'}}>Python</span>
                            <img alt={''} src={'/images/languages/language-python.png'} width={50} height={50}/>
                        </div>

                        <div className={'tooltipClassSmall'}>
                            <span className={'tooltipText'} style={{color: '#4169E1'}}>C</span>
                            <img alt={''} src={'/images/languages/language-c.png'} width={50} height={50}/>
                        </div>

                        <div className={'tooltipClassSmall'}>
                            <span className={'tooltipText'} style={{color: '#6495ED'}}>C++</span>
                            <img alt={''} src={'/images/languages/language-c-plus-plus.png'} width={50} height={50}/>
                        </div>

                        <div className={'tooltipClassSmall'}>
                            <span className={'tooltipText'} style={{color: 'violet'}}>C#</span>
                            <img alt={''} src={'/images/languages/language-c-sharp.png'} width={50} height={50}/>
                        </div>

                        <div className={'tooltipClassSmall'}>
                            <span className={'tooltipText'} style={{color: 'blue'}}>R</span>
                            <img alt={''} src={'/images/languages/language-r.png'} width={50} height={50}/>
                        </div>

                        <div className={'tooltipClassSmall'}>
                            <span className={'tooltipText'} style={{color: 'white'}}>Haskell</span>
                            <img alt={''} src={'/images/languages/language-haskell.png'} width={50} height={50}/>
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
                            <span className={'tooltipText'} style={{color: '#00BFFF'}}>ReactJS</span>
                            <img alt={''} src={'/images/technologies/reactjs.png'} width={50} height={50}/>
                        </div>

                        <div className={'tooltipClassSmall'}>
                            <span className={'tooltipText'} style={{color: '#00BFFF'}}>React Native</span>
                            <img alt={''} src={'/images/technologies/reactnative.png'} width={50} height={50}/>
                        </div>

                        <div className={'tooltipClassSmall'}>
                            <span className={'tooltipText'} style={{color: '#00FF00'}}>NodeJS</span>
                            <img alt={''} src={'/images/technologies/nodejs.png'} width={50} height={50}/>
                        </div>

                        <div className={'tooltipClassSmall'}>
                            <span className={'tooltipText'} style={{color: 'red'}}>Angular</span>
                            <img alt={''} src={'/images/technologies/angular.png'} width={50} height={50}/>
                        </div>

                        <div className={'tooltipClassSmall'}>
                            <span className={'tooltipText'} style={{color: 'green'}}>Spring</span>
                            <img alt={''} src={'/images/technologies/spring.png'} width={50} height={50}/>
                        </div>

                        <div className={'tooltipClassSmall'}>
                            <span className={'tooltipText'} style={{color: 'white'}}>Unity</span>
                            <img alt={''} src={'/images/technologies/unity.png'} width={50} height={50}/>
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
                            <span className={'tooltipText'} style={{color: 'orange'}}>HapiJS</span>
                            <img alt={''} src={'/images/technologies/hapijs.png'} width={50} height={50}/>
                        </div>

                        <div className={'tooltipClassSmall'}>
                            <span className={'tooltipText'} style={{color: '#32CD32'}}>MongoDB</span>
                            <img alt={''} src={'/images/technologies/mongodb.png'} width={50} height={50}/>
                        </div>

                        <div className={'tooltipClassSmall'}>
                            <span className={'tooltipText'} style={{color: 'red'}}>mongoose</span>
                            <img alt={''} src={'/images/technologies/mongoose.png'} width={50} height={50}/>
                        </div>

                        <div className={'tooltipClassSmall'}>
                            <span className={'tooltipText'} style={{color: '#FF00FF'}}>JWT</span>
                            <img alt={''} src={'/images/technologies/jwt.png'} width={50} height={50}/>
                        </div>

                        <div className={'tooltipClassSmall'}>
                            <span className={'tooltipText'} style={{color: '#DC143C'}}>Jest</span>
                            <img alt={''} src={'/images/technologies/jest.png'} width={50} height={50}/>
                        </div>

                        <div className={'tooltipClassSmall'}>
                            <span className={'tooltipText'} style={{color: 'red'}}>JUnit</span>
                            <img alt={''} src={'/images/technologies/junit.png'} width={50} height={50}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Skills;
