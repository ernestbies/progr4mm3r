import Message from '../models/message';
import messageValidation from "../utils/messageValidationSchema";
import convert from "../services/mongoConverter";
import {createMailOptions, createMailTransporter} from "../services/emailSender";
import validateRecaptcha from "../services/validateCaptcha";

const messageController = {
    createMessage: async (req, res) => {
        const {body} = req;
        const {error} = messageValidation(body);

        if (error) {
            res.status(401).send({errorCode: 401, errorMessage: error.details[0].message});
        } else {
            const newMessage = new Message(body);

            try {
                const recaptchaStatus = await validateRecaptcha(body.recaptcha);

                if (recaptchaStatus) {
                    const transporter = createMailTransporter();
                    const options = createMailOptions('[Personal website] ' + body.topic + ' (from: ' + body.email + ')', body.text);

                    await transporter.sendMail(options);
                    await newMessage.save();

                    res.status(200).send(convert(newMessage));
                } else {
                    res.status(401).send('Recaptcha verification error');
                }
            } catch (error) {
                res.status(500).send('Cannot create new message. ' + error);
            }
        }
    }
}

export default messageController;
