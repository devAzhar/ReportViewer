import Hapi from '@hapi/hapi';
import Inert from '@hapi/inert';
import { jsReportViewer } from './routes/jsReportViewer';

// const DEFAULT_HOST = 'localhost';
const DEFAULT_PORT = '3003';

const server = Hapi.Server({
  port: parseInt(process.env.PORT || DEFAULT_PORT)
});

const init = async () => {
  await server.register(Inert);

  server.route({
    method: 'GET',
    path: '/mockData/{param*}',
    handler: {
      directory: {
        path: 'app/mockData'
      }
    }
  });

  // server.route({
  //   method: 'GET',
  //   path: '/api/report-viewer/v1/js-report-viewer/{bureauFulfillmentKey?}',
  //   handler: jsReportViewer
  // });

  //like https://spin.credmo.systemadmin.com/api/enterprise/tui/browser?displayToken=12345&display=displayMethod&includeBootstrap=true
  server.route({
    method: 'GET',
    path: '/api/report-viewer/v1/js-report-viewer',
    options: {
        jsonp: 'display',
        handler: jsReportViewer
    }
  });

  server.route({
    method: 'GET',
    path: '/',
    handler: (request, h) => {
      request;
      return h.file('app/html/index.html');
    }
  });

  server.route({
    method: 'GET',
    path: '/_health',
    handler: (_req, _h) => ({ message: 'OK' })
  });

  // server.route({
  //   method: 'POST',
  //   path: '/api/js-report-viewer/v1/tui/{bureauFulfillmentKey?}',
  //   handler: tuiTransform
  // });

  await server.start();
  console.log(`js-report-viewer is running on ${server.info.port}`);
};

server.events.on({ name: 'request', channels: 'app' }, (_request, event, tags) => {
  if (tags.error) {
    console.error(`${JSON.stringify(event)}`);
  }

  if (tags.info || tags.debug) {
    console.log(`[${event.request}] ${event.timestamp}: ${event.data}`);
  }
});

// Log response times
server.events.on('response', function(request) {
  console.log(`[${request.info.id}] ${request.info.completed}: ${request.method.toUpperCase()} ${request.path} --> ${request.response.statusCode}`);
});

process.on('unhandledRejection', err => {
  console.error(err);
  process.exit(1);
});

init();
