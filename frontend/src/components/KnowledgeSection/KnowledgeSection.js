import KnowledgeCard from "../KnowledgeCard/KnowledgeCard";
import React from "react";
import {useTranslation} from "react-i18next";
import SectionBadge from "../SectionBadge/SectionBadge";

const KnowledgeSection = () => {

    const {t} = useTranslation('common');

    return (
        <div id={'knowledge'} className={'wallpaper-container'} style={{backgroundImage: "url(images/wallpaper.jpg)"}}>
            <div style={{textAlign: 'center', backgroundColor: '#00000090'}}>
                <SectionBadge
                    position={'end'}
                    subtitle={t('skills')}
                    content={t('practical_knowledge')}
                    specialNumber={31}
                />
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
