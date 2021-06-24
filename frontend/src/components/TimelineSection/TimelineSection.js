import TimelineComponent from "../TimelineComponent/TimelineComponent";
import {quote} from "../../utils/information";
import React from "react";

const TimelineSection = () => {
    return (
        <div id={'timeline'} style={{display: 'flex', flexDirection: 'column'}}>
            <TimelineComponent/>
            <section className={'quote-component row col-sm col-md-4'}>
                <blockquote className={'quote EN'}>{quote.text}<cite> – </cite>{quote.author}</blockquote>
            </section>
        </div>
    )
}

export default TimelineSection;
