import React from "react";
import PropTypes from 'prop-types';
import {formatData, NOT_RELEASED_PROJECT} from "../utils/information";

export const MessageItem = ({date, username, message, isAdmin = false}) => {

    return (
        <div style={{fontFamily: 'Source Code Pro', color: 'white', wordBreak: 'break-all', fontSize: 11, marginLeft: 5}}>
            <span
                style={{fontWeight: 700, color: '#00BFFF'}}>[{!date ? 'FUTURE_10100111001' : formatData(date)}] </span>
            {isAdmin && <span>&#128081; </span>}
            <span style={{fontWeight: 700, color: isAdmin ? 'red' : '#00FF00'}}>{username}</span>
            <span style={{fontWeight: 300, color: 'white'}}>:</span>
            {isAdmin && <span style={{fontWeight: 700, color: 'orange'}}>~/{NOT_RELEASED_PROJECT}<span
                style={{fontWeight: 300, color: 'white'}}>$</span></span>}
            <span style={{fontWeight: 300, color: 'white'}}> {message}</span>
        </div>
    )
}

MessageItem.propTypes = {
    date: PropTypes.number.isRequired,
    username: PropTypes.string.isRequired,
    message: PropTypes.string.isRequired,
    isAdmin: PropTypes.bool
}

export default MessageItem;
