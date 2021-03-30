import React from 'react';
import {Carousel} from 'react-bootstrap';
import HobbyItem from "../components/HobbyItem";
import {hobby} from "../utils/hobby";

const Hobby = () => {

    return (
        <div id={'hobby'} className={'carousel-style'}>
            <p style={{
                color: 'white',
                display: 'inline-block',
                fontFamily: 'Open Sans',
                fontWeight: 300,
                marginTop: 20
            }}>Hobby</p>
            <Carousel className={'carousel'}>
                <Carousel.Item className={'carousel-item'}>
                    <HobbyItem image={hobby.esports.image} quote={hobby.esports.quote}
                               name={hobby.esports.name} text={hobby.esports.text}/>
                    <Carousel.Caption/>
                </Carousel.Item>

                <Carousel.Item className={'carousel-item'}>
                    <HobbyItem image={hobby.programming.image} quote={hobby.programming.quote}
                               name={hobby.programming.name} text={hobby.programming.text}/>
                    <Carousel.Caption/>
                </Carousel.Item>

                <Carousel.Item className={'carousel-item'}>
                    <HobbyItem image={hobby.cinematography.image} quote={hobby.cinematography.quote}
                               name={hobby.cinematography.name} text={hobby.cinematography.text}/>
                    <Carousel.Caption/>
                </Carousel.Item>
            </Carousel>
        </div>
    );
}

export default Hobby;
