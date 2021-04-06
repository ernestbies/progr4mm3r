import {Carousel} from "react-bootstrap";
import HobbyItem from "../components/HobbyItem";
import React from "react";
import ProjectItem from "../components/ProjectItem";

export const renderElements = (elements, type) => {
    let view = [];

    switch (type) {
        case 'hobby':
            elements.map((el) => view.push(
                <Carousel.Item key={el.id} className={'carousel-item'}>
                    <HobbyItem image={el.image} quote={el.quote}
                               name={el.name} text={el.text} color={el.color}/>
                    <Carousel.Caption/>
                </Carousel.Item>)
            )
            break;
        case 'skills':
            elements.map((el) => view.push(
                <div key={el.id} className={'tooltipClassSmall'}>
                    <span className={'tooltipText'} style={{color: el.color}}>{el.name}</span>
                    <img alt={el.name} src={el.image} width={50} height={50}/>
                </div>
            ));
            break;
        case 'projects':
            elements.map((el) => view.push(
                <Carousel.Item key={el.id} className={'carousel-item'}>
                    <ProjectItem
                        id={el.id}
                        image={el.image}
                        color={el.color}
                        name={el.name}
                        description={el.description}
                        technologies={el.technologies}
                        os={el.os}
                        languages={el.languages}
                        links={el.links}
                        additionalData={el.additionalData}
                        infoSize={el.infoSize}
                    />
                </Carousel.Item>
            ));
            break;
        default:
            elements.map(() => view.push(<Carousel.Item className={'carousel-item'}/>));
            break;
    }

    return view;
}
