import Joi from 'joi';

export default {

  message: {
    payload: {
      email: Joi.string().email().required(),
      topic: Joi.string().min(1).required(),
      text: Joi.string().required(),
      recaptcha: Joi.string().required()
    }
  },

};
