import React from "react";
import {useTranslation} from "react-i18next";
import SectionBadge from "../SectionBadge/SectionBadge";
import WebsiteItem from "../WebsiteItem/WebsiteItem";
import {mainProjects} from "../../utils/projects";
import WebsiteItemContainer from "../WebsiteItemContainer/WebsiteItemContainer";

const WebsitesSection = () => {

    const {t} = useTranslation('common');

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
                    <WebsiteItemContainer>
                        <WebsiteItem name={mainProjects[0].name} url={mainProjects[0].url}
                                     websiteImage={mainProjects[0].image} direction={'left'}
                                     backgroundColor={'white'}
                        />
                        <WebsiteItem name={mainProjects[1].name} url={mainProjects[1].url}
                                     websiteImage={mainProjects[1].image} direction={'center'}
                                     backgroundColor={'#1F1F1F'}
                        />
                        <WebsiteItem name={mainProjects[2].name} url={mainProjects[2].url}
                                     websiteImage={mainProjects[2].image} direction={'right'}
                                     backgroundColor={'white'}
                        />
                    </WebsiteItemContainer>
                </div>
            </div>
        </div>
    )
}

export default WebsitesSection;
