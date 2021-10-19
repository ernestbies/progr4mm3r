import TimelineComponent from "../TimelineComponent/TimelineComponent";
import React from "react";
import Quote from "../Quote/Quote";

const TimelineSection = () => {
    return (
        <div id={'timeline'} style={{display: 'flex', flexDirection: 'column'}}>
            <TimelineComponent/>
            <Quote/>
        </div>
    )
}

export default TimelineSection;
