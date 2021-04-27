import React from "react";
import {Alert} from "react-bootstrap";

const ConfirmAlert = ({showAlert, setShowAlert}) => {

    if (showAlert) {
        return (
            <Alert style={{position: 'fixed'}} className={'confirm-alert'} variant={'info'}
                   onClose={() => setShowAlert(false)} dismissible>
                <p style={{fontSize: 15, fontFamily: 'Open Sans'}}>Message sent</p>
                <p style={{fontSize: 11, fontFamily: 'Open Sans'}}>
                    Your message has been sent successfully. I will reply as soon as possible!
                </p>
            </Alert>
        );
    }

    return (<div/>);
}

export default ConfirmAlert;
