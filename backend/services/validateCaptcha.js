import config from "../config";
import fetch from "node-fetch";

const checkRecaptcha = (response) => {
    return fetch(config.VERIFY_URL, {
        method: 'POST',
        headers: {'Content-Type': 'application/x-www-form-urlencoded'},
        body: `secret=${config.recaptchaSecretKey}&response=${response}`,
    }).then(res => res.json());
}

const validateRecaptcha = async (response) => {
    const recaptchaStatus = await checkRecaptcha(response);
    return recaptchaStatus.success;
}

export default validateRecaptcha;
