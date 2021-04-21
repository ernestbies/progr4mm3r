import React from 'react';
import {Carousel} from 'react-bootstrap';
import {hobby} from "../utils/hobby";
import {renderElements} from "../utils/renderElements";
import MyTimeline from "../components/MyTimeline";

const Hobby = () => {

    const quote = {
        text: 'The whole secret of a successful life is to find out what is one’s destiny to do, and then do it.',
        author: 'Henry Ford'
    };

    return (
        <div id={'hobby'} style={{display: 'flex', flexDirection: 'column'}}>
            <div className={'carousel-style'}>
                <p style={{
                    color: 'white',
                    display: 'inline-block',
                    fontFamily: 'Open Sans',
                    fontWeight: 300,
                    marginTop: 20,
                    fontSize: 23
                }}>Hobby</p>
                <Carousel>
                    {renderElements(hobby, 'hobby')}
                </Carousel>
            </div>
            <div style={{
                backgroundImage: "url(images/wallpaper2.jpg)",
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                backgroundAttachment: 'fixed',
                backgroundRepeat: 'no-repeat',
                borderTop: '1px solid #FFFFFF90',
                margin: 'auto',
                width: '100%'
            }}>
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
