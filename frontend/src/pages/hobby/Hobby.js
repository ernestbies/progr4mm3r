import React from 'react';
import {Carousel} from 'react-bootstrap';
import {hobby} from "../../utils/hobby";
import {renderElements} from "../../utils/functions/renderElements";
import "./Hobby.styles.css";
import {useTranslation} from "react-i18next";
import TimelineSection from "../../components/TimelineSection/TimelineSection";
import SectionTitle from "../../components/SectionTitle/SectionTitle";

const Hobby = () => {

    const {t, i18n} = useTranslation('common');

    return (
        <div id={'hobby'} style={{display: 'flex', flexDirection: 'column'}}>
            <SectionTitle position={'end'} content={t('hobby')} specialNumber={4}/>

            <Carousel className={'carousel-style'}>
                {renderElements(hobby[i18n.language], 'hobby')}
            </Carousel>

            <div className={'video-container'}>
                <SectionTitle position={'start'} content={t('timeline')} subtitle={'hobby'} specialNumber={41}/>
                <video className={'video'} poster={'/images/wallpaper2.jpg'} autoPlay muted loop>
                    <source src={'/videos/background.mp4'} type={'video/mp4'}/>
                </video>
                <TimelineSection/>
            </div>
        </div>
    );
}

export default Hobby;
