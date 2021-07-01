import KnowledgeCard from "../KnowledgeCard/KnowledgeCard";
import React from "react";
import {useTranslation} from "react-i18next";
import SectionSubtitle from "../SectionSubtitle/SectionSubtitle";

const KnowledgeSection = () => {

    const {t} = useTranslation('common');

    return (
        <div id={'knowledge'} className={'wallpaper-container'} style={{backgroundImage: "url(images/wallpaper3.jpg)"}}>
            <div style={{textAlign: 'center', backgroundColor: '#00000090'}}>
                <SectionSubtitle content={t('practical_knowledge')}/>
                <div className={'knowledge-card-container row'}>
                    <KnowledgeCard type={'frontend'}/>
                    <KnowledgeCard type={'backend'}/>
                    <KnowledgeCard type={'databases'}/>
                    <KnowledgeCard type={'testing'}/>
                </div>
            </div>
        </div>
    )
}

export default KnowledgeSection;
