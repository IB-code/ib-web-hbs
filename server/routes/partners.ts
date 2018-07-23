import * as express from 'express';
import * as fs from 'fs';
import * as path from 'path';
import * as utils from '../utils';
import parse from '../middleware/parse';

export function context(
    req: express.Request,
    res: express.Response,
    next: express.NextFunction,
) {
    req.context = {
        head: {
            title: 'Partners | Innovate Birmingham',
            meta: {
                description: '',
            },
        },
        main: {},
    };

    utils
        .readDir(path.join(__dirname, '../../public/img/partners/logos'))
        .then((files: Array<string>) => {
            req.context.main.companies = files;
            next();
        })
        .catch((err: Error) => {
            next();
        });
}

export function render(
    req: express.Request,
    res: express.Response,
    next: express.NextFunction,
) {
    res.render('partners', req.context, (err, html) => {
        parse(req, req.url, html).then(
            (html) => {
                res.send(html);
            },
            (err) => {
                next(err);
            },
        );
    });
}
