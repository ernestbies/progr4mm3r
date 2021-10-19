import React from 'react';
import {Carousel} from 'react-bootstrap';
import {hobby} from "../../utils/hobby";
import {renderElements} from "../../utils/functions/renderElements";
import {useTranslation} from "react-i18next";
import TimelineSection from "../../components/TimelineSection/TimelineSection";
import SectionBadge from "../../components/SectionBadge/SectionBadge";

const Hobby = () => {

    const {t, i18n} = useTranslation('common');

    return (
        <div id={'hobby'} style={{display: 'flex', flexDirection: 'column', backgroundColor: 'black'}}>
            <SectionBadge position={'end'} content={t('hobby')} specialNumber={4}/>

            <Carousel className={'carousel-style'}>
                {renderElements(hobby[i18n.language], 'hobby')}
            </Carousel>

            <div id={'knowledge'} className={'wallpaper-style-container'}
                 style={{backgroundImage: "url(images/wallpaper2.jpg)", backgroundSize: 'cover'}}>
                <div style={{textAlign: 'center', backgroundColor: '#00000095'}}>
                    <SectionBadge position={'start'} content={t('timeline')} subtitle={'hobby'} specialNumber={41}/>
                    <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', marginBottom: 30}}>
                        <p className={'inform-text'}>{t('quote_timeline')}
                            {'.'}
                        </p>
                        <div style={{width: 100, height: 1, backgroundColor: 'orange'}}/>
                    </div>
                    <TimelineSection/>
                </div>
            </div>
        </div>
    );
}

export default Hobby;
