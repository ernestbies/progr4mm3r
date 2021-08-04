import Joi from "joi";

const postValidation = (body, type) => {
    const validationSchema = Joi.object({
        username: type === 'post' ? Joi.string().min(1).max(20).regex(/^[a-zA-Z0-9]+$/i).required() :
            Joi.string().min(1).max(20).regex(/^[a-zA-Z0-9]+$/i),
        message: type === 'post' ? Joi.string().min(1).max(300).required() :
            Joi.string().min(1).max(300),
        date: Joi.number().required()
    });

    return validationSchema.validate(body);
}

export default postValidation;
