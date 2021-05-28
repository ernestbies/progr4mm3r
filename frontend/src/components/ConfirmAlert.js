import React from "react";
import {Alert} from "react-bootstrap";
import {useTranslation} from "react-i18next";
import PropTypes from 'prop-types';

const ConfirmAlert = ({showAlert, setShowAlert, variant}) => {

    const { t } = useTranslation('common');

    if (showAlert) {
        return (
            <Alert style={{position: 'fixed'}} className={'confirm-alert'} variant={variant}
                   onClose={() => setShowAlert(false)} dismissible>
                {
                    variant === 'info' ?
                        <div>
                            <p style={{fontSize: 15, fontFamily: 'Open Sans'}}>{t('alert_success_topic')}</p>
                            <p style={{fontSize: 11, fontFamily: 'Open Sans'}}>{t('alert_success_text')}</p>
                        </div> :
                        <div>
                            <p style={{fontSize: 15, fontFamily: 'Open Sans'}}>{t('alert_error_topic')}</p>
                            <p style={{fontSize: 11, fontFamily: 'Open Sans'}}>{t('alert_error_text')}</p>
                        </div>
                }
            </Alert>
        );
    }

    return (<div/>);
}

ConfirmAlert.propTypes = {
    showAlert: PropTypes.bool.isRequired,
    setShowAlert: PropTypes.func.isRequired,
    variant: PropTypes.oneOf(['info', 'danger']).isRequired
}

export default ConfirmAlert;
