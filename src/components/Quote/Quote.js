import { quote } from '../../utils/data/information';
import React from 'react';
import './Quote.styles.css';

const Quote = () => {
    return (
        <section className={'quote-component'}>
            <blockquote className={'quote EN'}>
                {quote.text}
                <cite> – </cite>
                {quote.author}
            </blockquote>
        </section>
    );
};

export default Quote;
