import React from 'react';
import {Carousel} from 'react-bootstrap';
import {hobby} from "../utils/hobby";
import {renderElements} from "../utils/renderElements";

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
                {renderElements(hobby, 'hobby')}
            </Carousel>
        </div>
    );
}

export default Hobby;
