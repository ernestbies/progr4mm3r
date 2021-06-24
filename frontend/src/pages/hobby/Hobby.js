import React from 'react';
import {Carousel} from 'react-bootstrap';
import {hobby} from "../../utils/hobby";
import {renderElements} from "../../utils/functions/renderElements";
import "./Hobby.styles.css";
import {useTranslation} from "react-i18next";
import TimelineSection from "../../components/TimelineSection/TimelineSection";

const Hobby = () => {

    const {t, i18n} = useTranslation('common');

    return (
        <div id={'hobby'} style={{display: 'flex', flexDirection: 'column'}}>
            <div className={'carousel-style'}>
                <p className={'header-text'}>{t('hobby')}</p>
                <Carousel>
                    {renderElements(hobby[i18n.language], 'hobby')}
                </Carousel>
            </div>
            <div className={'video-container'}>
                <div style={{textAlign: 'center'}}>
                    <p className={'header-text-small'}>{t('timeline')}</p>
                </div>
                <video className={'video'} poster={'/images/wallpaper2.jpg'} autoPlay muted loop>
                    <source src={'/videos/background.mp4'} type={'video/mp4'}/>
                </video>
                <TimelineSection/>
            </div>
        </div>
    );
}

export default Hobby;
