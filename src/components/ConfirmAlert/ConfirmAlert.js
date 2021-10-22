import React, {Fragment} from "react";
import {useTranslation} from "react-i18next";
import PropTypes from 'prop-types';
import {AlertText, AlertTitle, StyledAlert} from "./ConfirmAlert.styles";

const ConfirmAlert = ({showAlert, setShowAlert, variant}) => {

    const {t} = useTranslation('common');

    if (showAlert) {
        return (
            <StyledAlert onClose={() => setShowAlert(false)} dismissible>
                <AlertTitle variant={variant}>{t('alert_' + variant + '_topic')}</AlertTitle>
                <AlertText>{t('alert_' + variant + '_text')}</AlertText>
            </StyledAlert>
        );
    }

    return (<Fragment/>);
}

ConfirmAlert.propTypes = {
    showAlert: PropTypes.bool.isRequired,
    setShowAlert: PropTypes.func.isRequired,
    variant: PropTypes.oneOf(['success', 'error']).isRequired
}

export default ConfirmAlert;
