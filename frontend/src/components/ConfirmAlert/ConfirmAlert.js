import React, {Fragment} from "react";
import {useTranslation} from "react-i18next";
import PropTypes from 'prop-types';
import {AlertText, StyledAlert} from "./ConfirmAlert.styles";

const ConfirmAlert = ({showAlert, setShowAlert, variant}) => {

    const { t } = useTranslation('common');

    if (showAlert) {
        return (
            <StyledAlert variant={variant} onClose={() => setShowAlert(false)} dismissible>
                {
                    variant === 'info' ?
                        <>
                            <AlertText fontSize={'15px'}>{t('alert_success_topic')}</AlertText>
                            <AlertText fontSize={'11px'}>{t('alert_success_text')}</AlertText>
                        </> :
                        <>
                            <AlertText fontSize={'15px'}>{t('alert_error_topic')}</AlertText>
                            <AlertText fontSize={'11px'}>{t('alert_error_text')}</AlertText>
                        </>
                }
            </StyledAlert>
        );
    }

    return (<Fragment/>);
}

ConfirmAlert.propTypes = {
    showAlert: PropTypes.bool.isRequired,
    setShowAlert: PropTypes.func.isRequired,
    variant: PropTypes.oneOf(['info', 'danger']).isRequired
}

export default ConfirmAlert;
