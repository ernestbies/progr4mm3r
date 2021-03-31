import React from 'react';
import {Carousel} from 'react-bootstrap';
import HobbyItem from "../components/HobbyItem";
import {hobby} from "../utils/hobby";

const Hobby = () => {

    const renderHobby = () => {
        let view = [];

        hobby.map((el) => view.push(
            <Carousel.Item className={'carousel-item'}>
                <HobbyItem image={el.image} quote={el.quote}
                           name={el.name} text={el.text}/>
                <Carousel.Caption/>
            </Carousel.Item>)
        )

        return view;
    };

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
                {renderHobby()}
            </Carousel>
        </div>
    );
}

export default Hobby;
