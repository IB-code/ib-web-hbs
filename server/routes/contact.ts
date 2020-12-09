import * as express from 'express';
import parse from '../middleware/parse';
import { send } from '../utils/mail';
import { isNil } from 'lodash';
import axios from 'axios';

export function context(
    req: express.Request,
    res: express.Response,
    next: express.NextFunction,
) {
    req.context = {
        head: {
            title: 'Contact Us | Innovate Birmingham',
            meta: {
                description: 'Got questions? We got answers!',
                images: [
                    {
                        url: '/static/img/home/hero.png',
                    },
                ],
            },
        },
        main: {},
    };

    next();
}

export function render(
    req: express.Request,
    res: express.Response,
    next: express.NextFunction,
) {
    res.render('contact', req.context, (err, html) => {
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

export function handleFormSubmission(
    req: express.Request,
    res: express.Response,
    next: express.NextFunction,
) {
    let { firstName, lastName, email: senderEmail, topic, message } = req.body;
    let gCaptcha = req.body['g-recaptcha-response'];

    if (isNil(gCaptcha)) {
        return res.json({
            responseCode: 1,
            responseDesc: 'Please select captcha',
        });
    }

    let secret = process.env.G_RECAPTCHA_SECRET;

    const verificationUrl = `https://www.google.com/recaptcha/api/siteverify?secret=${secret}&response=${gCaptcha}&remoteip=${req.connection.remoteAddress}`;

    return axios(verificationUrl)
        .then(
            (response): any => {
                let { data } = response;

                if (!data.success) {
                    throw new Error();
                }

                let email = ['@innovatebham.com'];

                switch (topic) {
                    case 'bootcamps':
                        email.unshift('kayla');
                        break;
                    case 'scholarships':
                        email.unshift('kayla');
                        break;
                    case 'employers':
                        email.unshift('haleyh');
                        break;
                    case 'general':
                        email.unshift('rachel');
                        break;
                    default:
                        email.unshift('rachel');
                }

                return send(
                    'form@innovatebham.com',
                    email.join(''),
                    `${firstName} ${lastName} - ${senderEmail}`,
                    message,
                );
            },
        )
        .then((axiosResponse) => {
            res.redirect('/contact?response=thanks');
        })
        .catch((err) => {
            console.log('err', err);
            res.redirect('/contact?response=whoops');
        });
}

export function renderThanks(
    req: express.Request,
    res: express.Response,
    next: express.NextFunction,
) {
    res.render('contact', req.context, (err, html) => {
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
