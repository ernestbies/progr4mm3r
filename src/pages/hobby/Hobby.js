import React from 'react';
import {Carousel} from 'react-bootstrap';
import {hobby} from "../../utils/hobby";
import {renderElements} from "../../utils/functions/renderElements";
import MyTimeline from "../../components/MyTimeline";
import "./Hobby.styles.css";

const Hobby = () => {

    const quote = {
        text: 'The whole secret of a successful life is to find out what is one’s destiny to do, and then do it.',
        author: 'Henry Ford'
    };

    return (
        <div id={'hobby'} style={{display: 'flex', flexDirection: 'column'}}>
            <div className={'carousel-style'}>
                <p className={'header-text'}>Hobby</p>
                <Carousel>
                    {renderElements(hobby, 'hobby')}
                </Carousel>
            </div>
            <div className={'wallpaper-container'} style={{backgroundImage: "url(images/wallpaper2.jpg)",}}>
                <div style={{backgroundColor: '#00000090', textAlign: 'center'}}>
                    <p style={{
                        color: 'white',
                        display: 'inline-block',
                        fontFamily: 'Open Sans',
                        fontWeight: 300,
                        marginTop: 20,
                        fontSize: 22,
                    }}>My timeline</p>
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
