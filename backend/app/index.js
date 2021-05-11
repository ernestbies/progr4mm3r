import Hapi from 'hapi';
import Blipp from 'blipp';
import config from './config';
import Good from 'good';
import HapiSwagger from 'hapi-swagger';
import Inert from 'inert';
import bluebird from 'bluebird';
import mongoose from 'mongoose';
import routes from './REST/routes';
import Vision from 'vision';

mongoose.Promise = bluebird;
mongoose.connect(config.databaseUrl, { useNewUrlParser: true, useCreateIndex: true }, (error) => {
  if (error) {
    console.error(error);
  } else {
    console.log('Connect with database established');
  }
});

process.on('SIGINT', () => {
  mongoose.connection.close(() => {
    console.error('Mongoose default connection disconnected through app termination');
    process.exit(0);
  });
});

const start = async () => {

  const server = new Hapi.server({
    port: config.port,
    routes: { cors: { origin: ["*"] } }
  });

  const swaggerOptions = {
    info: {
      title: 'MY API',
      version: '1.0'
    }
  };

  const goodOptions = {
    ops: {
      interval: 1000
    },
    reporters: {
      myConsoleReporter: [{
        module: 'good-squeeze',
        name: 'Squeeze',
        args: [{ log: '*', response: '*' }]
      }, {
        module: 'good-console'
      }, 'stdout'],
      myFileReporter: [{
        module: 'good-squeeze',
        name: 'Squeeze',
        args: [{ ops: '*' }]
      }, {
        module: 'good-squeeze',
        name: 'SafeJson'
      }],
      myHTTPReporter: [{
        module: 'good-squeeze',
        name: 'Squeeze',
        args: [{ error: '*' }]
      }]
    }
  };

  await server.register([
    Blipp,
    Inert,
    Vision,
    {
      plugin: require('hapi-cors'),
      options: {
        origins: ['http://localhost:4200'],
        methods: ['POST, GET, PATCH, PUT, DELETE'],
        headers: ['Accept', 'Content-Type', 'Authorization']
      }
    },
    {
      plugin: HapiSwagger,
      options: swaggerOptions
    },
    {
      plugin: Good,
      options: goodOptions
    }
  ]);

  server.route({
    method: 'GET',
    path: '/{param*}',
    config: {
      auth: false
    },
    handler: {
      file: 'public/index.html'
    }
  });

  try {
    await routes.secureRoutes(server);
    await routes.register(server);
    await server.start();
    console.info(`Server is listening on ${config.port}`);
  } catch (err) {
    console.error(err);
  }
};

start();
