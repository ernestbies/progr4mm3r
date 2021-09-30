import React from 'react';
import {Carousel} from 'react-bootstrap';
import {hobby} from "../../utils/hobby";
import {renderElements} from "../../utils/functions/renderElements";
import "./Hobby.styles.css";
import {useTranslation} from "react-i18next";
import TimelineSection from "../../components/TimelineSection/TimelineSection";
import SectionBadge from "../../components/SectionBadge/SectionBadge";

const Hobby = () => {

    const {t, i18n} = useTranslation('common');

    return (
        <div id={'hobby'} style={{display: 'flex', flexDirection: 'column', backgroundColor: 'black'}}>
            <SectionBadge position={'start'} content={t('hobby')} specialNumber={4}/>

            <Carousel className={'carousel-style'}>
                {renderElements(hobby[i18n.language], 'hobby')}
            </Carousel>

            <div className={'video-container'}>
                <SectionBadge position={'end'} content={t('timeline')} subtitle={'hobby'} specialNumber={41}/>
                <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: 30}}>
                    <p className={'inform-text'}>{t('quote_timeline')}
                        {'.'}
                    </p>
                    <div style={{width: 100, height: 1, backgroundColor: 'orange'}}/>
                </div>
                <video className={'video'} poster={'/images/wallpaper.jpg'} autoPlay muted loop>
                    <source src={'/videos/timeline-background.mp4'} type={'video/mp4'}/>
                </video>
                <TimelineSection/>
            </div>
        </div>
    );
}

export default Hobby;
