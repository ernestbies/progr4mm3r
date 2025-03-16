import { useEffect } from 'react';
import PropTypes from 'prop-types';

const AnimationsHandler = ({ activeSection }) => {
    const cards = document.getElementsByName('knowledge-card');
    const texts = document.getElementsByName('timeline-text');
    const elements = { cards, texts };

    useEffect(() => {
        playAnimations(activeSection);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [activeSection]);

    const playAnimations = (sectionName) => {
        switch (sectionName) {
            case 'skills':
                applyAnimation(elements.cards);
                break;
            case 'hobby':
                applyAnimation(elements.texts);
                break;
            default:
                return;
        }
    };

    const applyAnimation = (elements) => {
        if (elements.length) {
            if (!elements.item(0).classList.contains('animated')) {
                for (let i = 0; i < elements.length; i++) {
                    elements.item(i).classList.toggle('animated');
                }
            }
        }
    };

    return <></>;
};

AnimationsHandler.propTypes = {
    activeSection: PropTypes.string,
};

export default AnimationsHandler;
