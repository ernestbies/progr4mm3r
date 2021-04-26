import React from 'react';
import {skills} from "../../utils/skills";
import {renderElements} from "../../utils/functions/renderElements";
import KnowledgeCard from "../../components/KnowledgeCard";
import "./Skills.styles.css";

const Skills = () => {

    return (
        <div id={'skills'} className={'item-dashboard'} style={{backgroundColor: '#1d2026'}}>
            <p className={'header-text'}>Skills</p>
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

            <div className={'wallpaper-container'} style={{backgroundImage: "url(images/wallpaper3.jpg)"}}>
                <div style={{textAlign: 'center', backgroundColor: '#00000090'}}>
                    <p className={'header-text-small'}>Practical knowledge</p>
                    <div className={'knowledge-card-container row'}>
                        <KnowledgeCard type={'frontend'}/>
                        <KnowledgeCard type={'backend'}/>
                        <KnowledgeCard type={'databases'}/>
                        <KnowledgeCard type={'testing'}/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Skills;
