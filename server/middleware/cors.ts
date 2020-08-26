import * as express from 'express';
import { HTTP_CODES } from '../config';
const { HTTP_SUCCESS } = HTTP_CODES;

export default (err: Error, req: express.Request, res: express.Response, next: express.NextFunction) => {
    const origin = req.get('origin');

    // CORS headers
    if (origin === "https://innovatebham.agsprime.net") {
        res.header('Access-Control-Allow-Origin', origin);
    } else {
        res.header('Access-Control-Allow-Origin', '*');
    }
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');

    // Set custom headers for CORS
    res.header('Access-Control-Allow-Headers',
        'Content-Type,Accept,X-Access-Token,X-Key');

    if (req.method === 'OPTIONS') {
        res.status(HTTP_SUCCESS).end();
    } else {
        next();
    }
};
