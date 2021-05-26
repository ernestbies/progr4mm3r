import Joi from "joi";

const postValidation = body => {
    const validationSchema = Joi.object({
        username: Joi.string().min(1).max(20).required(),
        message: Joi.string().min(1).max(300).required(),
        date: Joi.number().required()
    });

    return validationSchema.validate(body);
}

export default postValidation;
