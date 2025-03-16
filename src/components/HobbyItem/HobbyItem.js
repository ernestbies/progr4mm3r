import React from 'react';
import { BsMusicNoteBeamed } from 'react-icons/bs';
import { FaLaptopCode } from 'react-icons/fa';
import { IoGameController, IoTvOutline } from 'react-icons/io5';
import PropTypes from 'prop-types';
import './HobbyItem.styles.css';

const HobbyItem = ({ id, image, quote, name, text, color, keywords }) => {
    return (
        <div className={'carousel-hobby-item'} key={id}>
            <img alt={name} src={image} className={'carousel-hobby-img'} />
            <div className={'carousel-content'}>
                <div
                    style={{
                        display: 'flex',
                        textAlign: 'center',
                        alignItems: 'center',
                    }}
                >
                    <div
                        style={{ width: 5, height: 30, backgroundColor: color }}
                    />
                    <p
                        style={{
                            paddingLeft: 7,
                            fontSize: 22,
                            lineHeight: '22px',
                            fontFamily: 'Roboto Condensed',
                            margin: 0,
                        }}
                    >
                        {name}
                    </p>
                </div>
                <p
                    style={{
                        fontSize: 14,
                        fontFamily: 'Roboto Condensed',
                        fontStyle: 'italic',
                        paddingTop: 10,
                    }}
                >
                    {quote}
                </p>
                <p
                    style={{
                        fontSize: 13,
                        fontFamily: 'Roboto Condensed',
                        marginTop: 20,
                        maxWidth: 500,
                        fontWeight: 300,
                        wordBreak: 'break-word',
                    }}
                >
                    {text}
                </p>
                <div style={{ marginBottom: 15 }}>
                    {id === 0 ? (
                        <FaLaptopCode
                            size={20}
                            color={color}
                            style={{ marginRight: 10 }}
                        />
                    ) : id === 1 ? (
                        <IoGameController
                            size={20}
                            color={color}
                            style={{ marginRight: 10 }}
                        />
                    ) : id === 2 ? (
                        <IoTvOutline
                            size={20}
                            color={color}
                            style={{ marginRight: 10 }}
                        />
                    ) : id === 3 ? (
                        <BsMusicNoteBeamed
                            size={20}
                            color={color}
                            style={{ marginRight: 10 }}
                        />
                    ) : (
                        <div />
                    )}
                    <span style={{ fontFamily: 'Press Start', fontSize: 8 }}>
                        {keywords.map((e) => e.toUpperCase() + '. ')}
                    </span>
                </div>
            </div>
        </div>
    );
};

HobbyItem.propTypes = {
    id: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
    quote: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
    keywords: PropTypes.array.isRequired,
};

export default HobbyItem;
