import React from "react";
import {useTranslation} from "react-i18next";
import SectionBadge from "../SectionBadge/SectionBadge";
import WebsiteItem from "../WebsiteItem/WebsiteItem";
import {mainProjects} from "../../utils/data/projects";
import WebsiteItemContainer from "../WebsiteItemContainer/WebsiteItemContainer";

const WebsitesSection = () => {

    const {t} = useTranslation('common');

    const renderWebsites = () => {
        return mainProjects.map((e, index) =>
            <WebsiteItem key={index} name={e.name} url={e.url}
                         description={e.description}
                         websiteImage={e.image} direction={index === 0 ? 'left' : index === 1 ? 'center' : 'right'}
                         backgroundColor={e.color}
            />
        );
    }

    return (
        <div id={'websites'}>
            <div style={{textAlign: 'center', backgroundColor: '#0f0f0f'}}>
                <SectionBadge
                    position={'start'}
                    subtitle={t('internet_applications')}
                    content={t('projects')}
                    specialNumber={2}
                />
                <div style={{display: 'flex', flexDirection: 'column'}}>
                    <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                        <p className={'inform-text'}>{t('quote_projects')}
                            <code className={'scale-text'}>{t('these')}</code>{'.'}
                        </p>
                        <div style={{width: 100, height: 1, backgroundColor: 'orange'}}/>
                    </div>
                    <WebsiteItemContainer>{renderWebsites()}</WebsiteItemContainer>
                </div>
            </div>
        </div>
    )
}

export default WebsitesSection;
