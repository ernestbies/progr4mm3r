import React, {useEffect, useState} from "react";
import {Formik} from 'formik';
import {
    ButtonsContainer,
    Colored,
    ContactContainer,
    ContactInput,
    ContactSubmitButton,
    ContactSubmitButtonSign,
    ContactTextArea, InputContainer, ReCaptchaWrapper, TextError
} from "./ContactForm.styles";
import ConfirmAlert from "../ConfirmAlert/ConfirmAlert";
import {CgMail} from "react-icons/cg";
import ReCAPTCHA from "react-google-recaptcha";
import {useTranslation} from "react-i18next";
import {RECAPTCHA_SITE_KEY} from "../../utils/data/information";
import {contactFormValidation} from "../../utils/validators/contactFormValidation";
import {validateRecaptcha} from "../../utils/helpers/fetchData";
import contact from "../../utils/data/contact";

const ContactForm = () => {

    const {t, i18n} = useTranslation('common');
    const recaptchaRef = React.createRef();
    const [showAlert, setShowAlert] = useState(false);
    const [alertVariant, setAlertVariant] = useState('success');

    useEffect(() => {
        recaptchaRef.current.reset();
    }, [recaptchaRef])

    return (
        <Formik initialValues={{subject: '', body: '', recaptcha: ''}}
                validationSchema={contactFormValidation} validateOnMount={true}
                onSubmit={(values, { setSubmitting, resetForm, validateForm })=> {
                    validateRecaptcha(values.recaptcha)
                        .then((res) => res.json())
                        .then((res) => {
                            if(res.recaptcha_validation) {
                                setAlertVariant('success');
                                window.open(
                                    `mailto:${contact.email}?subject=${values.subject}&body=${values.body}`,
                                    '_self'
                                );
                            } else {
                                setAlertVariant('error');
                            }
                            setShowAlert(true);
                        })
                        .catch(() => {
                            setAlertVariant('error');
                            setShowAlert(true);
                        })
                        .finally(() => {
                            setSubmitting(false);
                            resetForm();
                            validateForm();
                        });
                }}>
            {
                ({
                     values,
                     handleChange,
                     handleBlur,
                     handleSubmit,
                     errors,
                     touched,
                     isValid,
                     setFieldValue,
                     resetForm,
                     validateForm
                 }) => (
                    <ContactContainer onSubmit={handleSubmit}>
                        <InputContainer>
                            <CgMail style={{
                                backgroundColor: 'darkred',
                                color: 'white', width: 60
                            }} size={30}/>
                            <ContactInput
                                onChange={handleChange}
                                onBlur={handleBlur}
                                placeholder={t('subject')}
                                name={'subject'}
                                value={values.subject}
                                required
                            />
                        </InputContainer>
                        {touched.subject && errors.subject && <TextError>{t(errors.subject.toString())}</TextError>}
                        <ContactTextArea onChange={handleChange} name={'body'} value={values.body} onBlur={handleBlur}
                                         placeholder={t('body')} required/>
                        {touched.body && errors.body && <TextError>{t(errors.body.toString())}</TextError>}
                        <ConfirmAlert showAlert={showAlert} setShowAlert={setShowAlert} variant={alertVariant}/>
                        <ReCaptchaWrapper>
                            <ReCAPTCHA id={'recaptcha'} key={'recaptcha-' + i18n.language} ref={recaptchaRef} theme={'dark'}
                                       name={'recaptcha'} onChange={(val) => setFieldValue('recaptcha', val)}
                                       sitekey={RECAPTCHA_SITE_KEY} hl={i18n.language}/>
                        </ReCaptchaWrapper>
                        <ButtonsContainer>
                            <ContactSubmitButton type={'submit'} disabled={!isValid}>
                                <Colored>{'// '}</Colored>{t('send_msg')}<ContactSubmitButtonSign/>
                            </ContactSubmitButton>
                            <ContactSubmitButton type={'reset'} onClick={() => {
                                resetForm({});
                                validateForm();
                                recaptchaRef.current.reset();
                            }}>
                                <Colored>{'// '}</Colored>{t('clear')}<ContactSubmitButtonSign/>
                            </ContactSubmitButton>
                        </ButtonsContainer>
                    </ContactContainer>
                )
            }
        </Formik>
    )
};

export default ContactForm;
