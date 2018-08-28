import * as path from 'path';
import log from '../log';

const consoleStamp = require('console-stamp');

if (!process.env['NODE_ENV']) {
    process.env['NODE_ENV'] = 'development';
}

let ENV = {
    dev: !process.env['NODE_ENV'] || process.env['NODE_ENV'] === 'development',
    prod: process.env['NODE_ENV'] === 'production',
    value: process.env['NODE_ENV'],
};

export const HTTP_CODES = {
    HTTP_SUCCESS: 200,
    HTTP_PERMANENT_REDIRECT: 301,
    HTTP_TEMPORARY_REDIRECT: 302,
    HTTP_CLIENT_ERROR: 400,
    HTTP_INVALID_TOKEN: 401,
    HTTP_NOT_AUTHORIZED: 403,
    HTTP_NOT_FOUND: 404,
    HTTP_SERVER_ERROR: 500,
};

export const redirects = [
    {
        pattern: '^/workforce',
        to: '/',
        status: HTTP_CODES.HTTP_PERMANENT_REDIRECT,
    },
];

const configDefaults = {
    development: {
        ENV,
        PORT: '3000',
        IP: 'localhost',
        logLevel: log.LOG_LEVEL.TRACE,
        root: path.resolve(__dirname + '/../..'),
    },
    production: {
        ENV,
        PORT: process.env['PORT'],
        IP: 'innovatebham.com',
        logLevel: log.LOG_LEVEL.WARN,
        root: path.resolve(__dirname + '/../..'),
    },
};

let config = configDefaults.development;

if (ENV.prod) {
    config = configDefaults.production;
}

consoleStamp(console, { pattern: 'dd/mmm/yyyy:HH:MM:ss o' });
log.setLogLevel(config.logLevel);

export default config;
