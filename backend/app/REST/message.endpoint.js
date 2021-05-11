import applicationException from '../service/applicationException';
import business from '../business/business.container';
import validator from './requestValidator';

const messageEndpoint = {
  register(server) {

    server.route({
      method: 'POST',
      path: '/api/contact',
      options: {
        description: 'Create message',
        tags: ['api'],
        validate: {
          payload: validator.message.payload
        },
        auth: false
      },
      handler: async (request, h) => {
        try {
          const messageManager = business.getMessageManager(request);
          const recaptchaStatus = await messageManager.validateRecaptcha(request.payload.recaptcha);

          if (recaptchaStatus) {
            return await messageManager.createMessage(request.payload);
          }

          return h.response().code(401);
        } catch (error) {
          return applicationException.errorHandler(error, h);
        }
      }
    });

  },
  tag: {
    name: 'message',
    description: 'When somebody wants to get messages'
  }
};

export default messageEndpoint;
