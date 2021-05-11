import React from "react";
import {Alert} from "react-bootstrap";

const ConfirmAlert = ({showAlert, setShowAlert, variant}) => {

    if (showAlert) {
        return (
            <Alert style={{position: 'fixed'}} className={'confirm-alert'} variant={variant}
                   onClose={() => setShowAlert(false)} dismissible>
                {
                    variant === 'info' ?
                        <div>
                            <p style={{fontSize: 15, fontFamily: 'Open Sans'}}>Message sent</p>
                            <p style={{fontSize: 11, fontFamily: 'Open Sans'}}>
                                Your message has been sent successfully. I will reply as soon as possible!
                            </p>
                        </div> :
                        <div>
                            <p style={{fontSize: 15, fontFamily: 'Open Sans'}}>Error</p>
                            <p style={{fontSize: 11, fontFamily: 'Open Sans'}}>
                                There was a problem sending your message. Please try again later!
                            </p>
                        </div>
                }
            </Alert>
        );
    }

    return (<div/>);
}

export default ConfirmAlert;
