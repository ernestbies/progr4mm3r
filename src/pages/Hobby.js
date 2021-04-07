import React from 'react';
import {Carousel} from 'react-bootstrap';
import {hobby} from "../utils/hobby";
import {renderElements} from "../utils/renderElements";
import MyTimeline from "../components/MyTimeline";

const Hobby = () => {

    return (
        <div>
            <div id={'hobby'} className={'carousel-style'}>
                <p style={{
                    color: 'white',
                    display: 'inline-block',
                    fontFamily: 'Open Sans',
                    fontWeight: 300,
                    marginTop: 20,
                }}>Hobby</p>
                <Carousel className={'carousel'}>
                    {renderElements(hobby, 'hobby')}
                </Carousel>
            </div>
            <div style={{backgroundColor: 'black'}}>
                <div style={{textAlign: 'center'}}>
                    <p style={{
                        color: 'white',
                        display: 'inline-block',
                        fontFamily: 'Open Sans',
                        fontWeight: 300,
                        marginTop: 20,
                        fontSize: 20
                    }}>My timeline</p>
                </div>
                <MyTimeline/>
            </div>
        </div>
    );
}

export default Hobby;
