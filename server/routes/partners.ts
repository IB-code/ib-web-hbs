import * as express from 'express';
import * as path from 'path';
import * as utils from '../utils';
import * as _ from 'lodash';
import config from '../config';
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

    req.context.main.companies = utils
        .getEmployerPartners(true)
        .map((company) => {
            return `/static/img/logos/company-logos/${company.logo}`;
        });

    next();
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
