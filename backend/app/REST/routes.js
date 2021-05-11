import hapiAuthBearerToken from 'hapi-auth-bearer-token';
import messageEndpoint from './message.endpoint';

const routes = {
  async secureRoutes(server) {
    await server.register(hapiAuthBearerToken);
    server.auth.strategy('bearer', 'bearer-access-token', {
      allowQueryToken: true,
      validate: async (request, token, h) => {

        const credentials = { token };
        const artifacts = { test: 'info' };
        const isValid = true;

        return { isValid , credentials, artifacts };
      }
    });
    server.auth.default('bearer');
  },
  register(server) {
    messageEndpoint.register(server);
  },
  tags() {
    return [
      messageEndpoint.tag
    ];
  }
};

export default routes;
