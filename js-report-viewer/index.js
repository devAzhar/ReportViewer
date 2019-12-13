'use strict';

const Hapi = require('hapi');
const Path = require('path');
const Inert = require('@hapi/inert');

const init = async () => {
    console.log("Hello");

    const server = Hapi.server({
        port: 3000,
        host: 'localhost'
    });

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

    server.route({
        method: 'GET',
        path: '/node_modules/{param*}',
        handler: {
            directory: {
                path: 'app/node_modules'
            }
        }
    });

    server.route({
        method: 'GET',
        path: '/{param*}',
        handler: {
            directory: {
                path: 'app',
                index: ['js-report-viewer.js']
            }
        }
    });

    server.route({
        method: 'GET',
        path: '/',
        handler: (request, h) => {
            return h.file('app/index.html');
        }
    });

    await server.start();
    console.log('Server running on %s', server.info.uri);
};

process.on('unhandledRejection', (err) => {

    console.log(err);
    process.exit(1);
});

init();