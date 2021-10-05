import React from "react";
import PropTypes from 'prop-types';
import {formatData, NOT_RELEASED_PROJECT} from "../../utils/information";
import CustomCaret from "../CustomCaret/CustomCaret";
import {MessageDiv, MessageLine} from "./MessageItem.styles";

export const MessageItem = ({date, username, message, isAdmin, caret}) => {

    return (
        <MessageDiv>
            <MessageLine fontWeight={700} color={'#00BFFF'}>
                [{!date ? 'FUTURE_10100111001' : formatData(date)}]
            </MessageLine>
            {isAdmin && <MessageLine>&#128081; </MessageLine>}
            <MessageLine fontWeight={700} color={'#00FF00'} isAdmin={isAdmin}>{username}</MessageLine>
            <MessageLine fontWeight={300} color={'white'}>:</MessageLine>
            {isAdmin && <MessageLine fontWeight={700} color={'orange'}>~/{NOT_RELEASED_PROJECT}
            <MessageLine fontWeight={300} color={'white'}>$</MessageLine></MessageLine>}
            <MessageLine fontWeight={300} color={'white'}> {message}</MessageLine>
            {caret && <CustomCaret/>}
        </MessageDiv>
    )
}

MessageItem.propTypes = {
    date: PropTypes.number.isRequired,
    username: PropTypes.string.isRequired,
    message: PropTypes.string.isRequired,
    isAdmin: PropTypes.bool,
    caret: PropTypes.bool
}

MessageItem.defaultProps = {
    isAdmin: false,
    caret: false
}

export default MessageItem;
