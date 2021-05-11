import Joi from "joi";

const messageValidation = body => {
    const validationSchema = Joi.object({
        email: Joi.string().email().required(),
        topic: Joi.string().min(1).required(),
        text: Joi.string().required(),
        recaptcha: Joi.string().required()
    });

    return validationSchema.validate(body);
}

export default messageValidation;
