import { Carousel } from 'react-bootstrap';
import HobbyItem from '../../components/HobbyItem/HobbyItem';
import React from 'react';
import ProjectItem from '../../components/ProjectItem/ProjectItem';
import SkillItem from '../../components/SkillItem/SkillItem';

export const renderElements = (elements, type) => {
    let view = [];

    switch (type) {
        case 'hobby':
            elements.map((el, index) =>
                view.push(
                    <Carousel.Item key={index}>
                        <HobbyItem
                            id={index}
                            image={el.image}
                            quote={el.quote}
                            name={el.name}
                            text={el.text}
                            color={el.color}
                            keywords={el.keywords}
                        />
                    </Carousel.Item>
                )
            );
            break;
        case 'skills':
            elements.map((el, index) =>
                view.push(
                    <SkillItem
                        key={index}
                        id={index}
                        name={el.name}
                        color={el.color}
                        image={el.image}
                    />
                )
            );
            break;
        case 'projects':
            elements.map((el, index) =>
                view.push(
                    <Carousel.Item key={index}>
                        <ProjectItem
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
                )
            );
            break;
        default:
            elements.map(() =>
                view.push(<Carousel.Item className={'carousel-item'} />)
            );
            break;
    }

    return view;
};
