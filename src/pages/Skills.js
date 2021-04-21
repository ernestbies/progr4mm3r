import React from 'react';
import {skills} from "../utils/skills";
import {renderElements} from "../utils/renderElements";
import KnowledgeCard from "../components/KnowledgeCard";

const Skills = () => {

    return (
        <div id={'skills'} className={'item-dashboard'} style={{backgroundColor: '#1d2026'}}>
            <p style={{
                color: 'white',
                display: 'inline-block',
                fontFamily: 'Open Sans',
                fontWeight: 300,
                marginTop: 20,
                fontSize: 23
            }}>Skills</p>
            <p style={{fontSize: 15, margin: 15, fontFamily: 'Open Sans'}}>I am constantly trying to gain knowledge
                and improve my programming skills.<br/>I had contact with the following <code style={{fontSize: 14}}>programming
                    languages</code> and <code style={{fontSize: 14}}>IT technologies</code> while studying Computer
                Science.</p>

            <div className={'language-icons'}>
                <div style={{flex: 1, display: 'flex', alignItems: 'center', flexDirection: 'column'}}>
                    <p style={{marginTop: 10, fontSize: 14, fontFamily: 'Open Sans'}}>Programming languages</p>
                    <div className={'skills-container col-9'}>
                        {renderElements(skills.filter(el => el.type === 'language'), 'skills')}
                    </div>
                </div>

                <div style={{width: 100, height: 1, backgroundColor: 'orange'}}/>

                <div style={{flex: 1, display: 'flex', alignItems: 'center', flexDirection: 'column'}}>
                    <p style={{marginTop: 10, fontSize: 14, fontFamily: 'Open Sans'}}>Tools and technologies</p>
                    <div className={'skills-container col-9'}>
                        {renderElements(skills.filter(el => el.type === 'technology'), 'skills')}
                    </div>
                </div>
            </div>

            <div style={{
                minHeight: 650,
                backgroundImage: "url(images/wallpaper3.jpg)",
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                backgroundAttachment: 'fixed',
                backgroundRepeat: 'no-repeat',
                borderTop: '1px solid #FFFFFF90',
                margin: 'auto',
            }}>
                <div style={{backgroundColor: '#00000090', textAlign: 'center'}}>
                    <p style={{
                        color: 'white',
                        display: 'inline-block',
                        fontFamily: 'Open Sans',
                        fontWeight: 300,
                        marginTop: 20,
                        marginBottom: 50,
                        fontSize: 22
                    }}>Practical knowledge</p>
                </div>
                <div className={'row'} style={{
                    display: 'flex',
                    justifyContent: 'space-evenly',
                    minHeight: 650,
                    backgroundColor: '#00000090'
                }}>
                    <KnowledgeCard type={'frontend'}/>
                    <KnowledgeCard type={'backend'}/>
                    <KnowledgeCard type={'databases'}/>
                    <KnowledgeCard type={'testing'}/>
                </div>
            </div>
        </div>
    );
}

export default Skills;
