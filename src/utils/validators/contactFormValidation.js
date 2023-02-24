import * as Yup from 'yup';

export const contactFormValidation = Yup.object().shape({
    subject: Yup.string().required('subject_validation'),
    body: Yup.string().required('body_validation'),
});
