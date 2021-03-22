import React from 'react';

const Skills = () => {
    return (
        <div id={'skills'} className={'item-dashboard'} style={{backgroundColor: '#1d2026'}}>
            <p style={{color: 'white', fontFamily: 'Open Sans', margin: 0}}>Skills</p>
            <p style={{fontSize: 15, marginTop: 15, fontFamily: 'Open Sans'}}>I am constantly trying to gain knowledge and improve my programming skills.</p>
            <div className={'language-icons'}>
                <div style={{flex: 1, display: 'flex', alignItems: 'center', flexDirection: 'column'}}>
                    <p style={{marginTop: 10, fontSize: 14, fontFamily: 'Open Sans'}}>Programming languages</p>
                    <div style={{display: 'flex', justifyContent: 'space-between', width: '60%', marginBottom: 25, marginTop: 25}}>
                        <div className={'tooltipClassSmall'}>
                            <span className={'tooltipText'} style={{color: '#4169E1'}}>C</span>
                            <img src={'/images/languages/language-c.png'} width={50} height={50}/>
                        </div>

                        <div className={'tooltipClassSmall'}>
                            <span className={'tooltipText'} style={{color: '#6495ED'}}>C++</span>
                            <img src={'/images/languages/language-c-plus-plus.png'} width={50} height={50}/>
                        </div>

                        <div className={'tooltipClassSmall'}>
                            <span className={'tooltipText'} style={{color: 'violet'}}>C#</span>
                            <img src={'/images/languages/language-c-sharp.png'} width={50} height={50}/>
                        </div>


                        <div className={'tooltipClassSmall'}>
                            <span className={'tooltipText'} style={{color: '#FFA500'}}>Java</span>
                            <img src={'/images/languages/language-java.png'} width={50} height={75}/>
                        </div>

                        <div className={'tooltipClassSmall'}>
                            <span className={'tooltipText'} style={{color: 'blue'}}>Python</span>
                            <img src={'/images/languages/language-python.png'} width={50} height={50}/>
                        </div>
                    </div>

                    <div style={{display: 'flex', justifyContent: 'space-between', width: '60%'}}>

                        <div className={'tooltipClassSmall'}>
                            <span className={'tooltipText'} style={{color: 'yellow'}}>JavaScript</span>
                            <img src={'/images/languages/language-js.png'} width={50} height={50}/>
                        </div>

                        <div className={'tooltipClassSmall'}>
                            <span className={'tooltipText'} style={{color: '#FF4500'}}>HTML</span>
                            <img src={'/images/languages/html.png'} width={50} height={50}/>
                        </div>

                        <div className={'tooltipClassSmall'}>
                            <span className={'tooltipText'} style={{color: '#87CEFA'}}>CSS</span>
                            <img src={'/images/languages/css.png'} width={50} height={50}/>
                        </div>

                        <div className={'tooltipClassSmall'}>
                            <span className={'tooltipText'} style={{color: '#1E90FF'}}>SQL</span>
                            <img src={'/images/languages/language-sql.png'} width={50} height={50}/>
                        </div>

                        <div className={'tooltipClassSmall'}>
                            <span className={'tooltipText'} style={{color: '#6495ED'}}>PL/pgSQL</span>
                            <img src={'/images/languages/language-plpgsql.png'} width={50} height={50}/>
                        </div>
                    </div>
                </div>
                <div style={{width: 100, height: 1, backgroundColor: 'orange'}}/>
                <div style={{flex: 1, display: 'flex', alignItems: 'center', flexDirection: 'column'}}>
                    <p style={{marginTop: 10, fontSize: 14, fontFamily: 'Open Sans'}}>Tools and technologies</p>
                    <div style={{display: 'flex', justifyContent: 'space-between', width: '50%', marginBottom: 25, marginTop: 25}}>
                        <div className={'tooltipClassSmall'}>
                            <span className={'tooltipText'} style={{color: 'green'}}>Spring</span>
                            <img src={'/images/technologies/spring.png'} width={50} height={50}/>
                        </div>

                        <div className={'tooltipClassSmall'}>
                            <span className={'tooltipText'} style={{color: '#00FF00'}}>NodeJS</span>
                            <img src={'/images/technologies/nodejs.png'} width={50} height={50}/>
                        </div>

                        <div className={'tooltipClassSmall'}>
                            <span className={'tooltipText'} style={{color: 'orange'}}>HapiJS</span>
                            <img src={'/images/technologies/hapijs.png'} width={50} height={50}/>
                        </div>

                        <div className={'tooltipClassSmall'}>
                            <span className={'tooltipText'} style={{color: '#32CD32'}}>MongoDB</span>
                            <img src={'/images/technologies/mongodb.png'} width={50} height={50}/>
                        </div>

                        <div className={'tooltipClassSmall'}>
                            <span className={'tooltipText'} style={{color: 'red'}}>mongoose</span>
                            <img src={'/images/technologies/mongoose.png'} width={50} height={50}/>
                        </div>
                    </div>

                    <div style={{display: 'flex', justifyContent: 'space-between', width: '50%', marginBottom: 25, marginTop: 25}}>
                        <div className={'tooltipClassSmall'}>
                            <span className={'tooltipText'} style={{color: '#FF00FF'}}>JWT</span>
                            <img src={'/images/technologies/jwt.png'} width={50} height={50}/>
                        </div>

                        <div className={'tooltipClassSmall'}>
                            <span className={'tooltipText'} style={{color: 'red'}}>Angular</span>
                            <img src={'/images/technologies/angular.png'} width={50} height={50}/>
                        </div>

                        <div className={'tooltipClassSmall'}>
                            <span className={'tooltipText'} style={{color: '#00BFFF'}}>ReactJS</span>
                            <img src={'/images/technologies/reactjs.png'} width={50} height={50}/>
                        </div>

                        <div className={'tooltipClassSmall'}>
                            <span className={'tooltipText'} style={{color: '#00BFFF'}}>React Native</span>
                            <img src={'/images/technologies/reactnative.png'} width={50} height={50}/>
                        </div>

                        <div className={'tooltipClassSmall'}>
                            <span className={'tooltipText'} style={{color: 'white'}}>Unity</span>
                            <img src={'/images/technologies/unity.png'} width={50} height={50}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Skills;
