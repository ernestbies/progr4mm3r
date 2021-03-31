import React from 'react';
import {skills} from "../utils/skills";
import {renderElements} from "../utils/renderElements";

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
                        {renderElements(skills.filter(el => el.type === 'language').slice(0, 6), 'skills')}
                    </div>

                    <div style={{display: 'flex', justifyContent: 'space-between', width: '65%', marginBottom: 25}}>
                        {renderElements(skills.filter(el => el.type === 'language').slice(6, 12), 'skills')}
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
                        {renderElements(skills.filter(el => el.type === 'technology').slice(0, 6), 'skills')}
                    </div>

                    <div style={{display: 'flex', justifyContent: 'space-between', width: '65%', marginBottom: 25}}>
                        {renderElements(skills.filter(el => el.type === 'technology').slice(6, 12), 'skills')}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Skills;
