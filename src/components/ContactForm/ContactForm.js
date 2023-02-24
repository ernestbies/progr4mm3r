import React from 'react';
import { Formik } from 'formik';
import {
    ButtonsContainer,
    Colored,
    ContactContainer,
    ContactInput,
    ContactSubmitButton,
    ContactSubmitButtonSign,
    ContactTextArea,
    InputContainer,
    TextError,
} from './ContactForm.styles';
import { CgMail } from 'react-icons/cg';
import { useTranslation } from 'react-i18next';
import { contactFormValidation } from '../../utils/validators/contactFormValidation';
import contact from '../../utils/data/contact';

const ContactForm = () => {
    const { t } = useTranslation('common');

    return (
        <Formik
            initialValues={{ subject: '', body: '' }}
            validationSchema={contactFormValidation}
            validateOnMount={true}
            onSubmit={(values) => {
                if (typeof window !== 'undefined') {
                    window.open(
                        `mailto:${contact.email}?subject=${values.subject}&body=${values.body}`,
                        '_self'
                    );
                }
            }}
        >
            {({
                values,
                handleChange,
                handleBlur,
                handleSubmit,
                errors,
                touched,
                isValid,
                setFieldValue,
                resetForm,
                validateForm,
            }) => (
                <ContactContainer onSubmit={handleSubmit}>
                    <InputContainer>
                        <CgMail
                            style={{
                                backgroundColor: 'darkred',
                                color: 'white',
                                width: 60,
                            }}
                            size={30}
                        />
                        <ContactInput
                            onChange={handleChange}
                            onBlur={handleBlur}
                            placeholder={t('subject')}
                            name={'subject'}
                            value={values.subject}
                            required
                        />
                    </InputContainer>
                    {touched.subject && errors.subject && (
                        <TextError>{t(errors.subject.toString())}</TextError>
                    )}
                    <ContactTextArea
                        onChange={handleChange}
                        name={'body'}
                        value={values.body}
                        onBlur={handleBlur}
                        placeholder={t('body')}
                        required
                    />
                    {touched.body && errors.body && (
                        <TextError>{t(errors.body.toString())}</TextError>
                    )}
                    <ButtonsContainer>
                        <ContactSubmitButton
                            type={'submit'}
                            disabled={!isValid}
                        >
                            <Colored>{'// '}</Colored>
                            {t('send_msg')}
                            <ContactSubmitButtonSign />
                        </ContactSubmitButton>
                        <ContactSubmitButton
                            type={'reset'}
                            onClick={() => {
                                resetForm({});
                                validateForm();
                            }}
                        >
                            <Colored>{'// '}</Colored>
                            {t('clear')}
                            <ContactSubmitButtonSign />
                        </ContactSubmitButton>
                    </ButtonsContainer>
                </ContactContainer>
            )}
        </Formik>
    );
};

export default ContactForm;
