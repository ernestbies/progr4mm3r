import React from 'react';
import {Carousel} from 'react-bootstrap';
import {hobby} from "../../utils/hobby";
import {renderElements} from "../../utils/functions/renderElements";
import MyTimeline from "../../components/MyTimeline";
import "./Hobby.styles.css";
import {useTranslation} from "react-i18next";
import {quote} from "../../utils/information";

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
            <div className={'wallpaper-container'} style={{backgroundImage: "url(images/wallpaper2.jpg)",}}>
                <div style={{backgroundColor: '#00000090', textAlign: 'center'}}>
                    <p className={'header-text-small'}>{t('timeline')}</p>
                </div>
                <div style={{backgroundColor: '#00000090', display: 'flex', flexDirection: 'column'}}>
                    <MyTimeline/>
                    <section className={'quote-component row col-sm-12 col-md-6'}>
                        <blockquote className={'callout quote EN'}>{quote.text}
                        <cite> – </cite>{quote.author}</blockquote>
                    </section>
                </div>
            </div>
        </div>
    );
}

export default Hobby;
