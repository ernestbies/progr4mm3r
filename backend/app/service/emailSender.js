import nodemailer from 'nodemailer';
import config from '../config';

export const createMailTransporter = () => {
    return nodemailer.createTransport({
        service: config.service,
        tls: {
            rejectUnauthorized: false
        },
        auth: {
            user: config.emailAddress,
            pass: config.emailPassword
        }
    });
}

export const createMailOptions = (subject, text) => {
    return {
        from: config.emailAddress,
        to: config.contactEmail,
        subject: subject,
        text: text
    };
}
