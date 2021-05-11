import MessageDAO from '../DAO/messageDAO';
import fetch from "node-fetch";
import config from "../config";
import {createMailOptions, createMailTransporter} from "../service/emailSender";

function create() {

    const VERIFY_URL = 'https://www.google.com/recaptcha/api/siteverify';

    async function createMessage(payload) {
        const transporter = createMailTransporter();
        const options = createMailOptions('[Personal website] ' + payload.topic + ' (from: ' + payload.email + ')', payload.text);

        await transporter.sendMail(options);
        return await MessageDAO.createMessage(payload);
    }

    async function validateRecaptcha(response) {
        const recaptchaStatus = await checkRecaptcha(response);
        return recaptchaStatus.success;
    }

    function checkRecaptcha(response) {
        return fetch(VERIFY_URL, {
            method: 'POST',
            headers: {'Content-Type': 'application/x-www-form-urlencoded'},
            body: `secret=${config.recaptchaSecretKey}&response=${response}`,
        }).then(res => res.json());
    }

    return {
        createMessage: createMessage,
        validateRecaptcha: validateRecaptcha
    };
}

export default {
    create: create
}


