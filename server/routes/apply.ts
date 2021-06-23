import * as express from 'express';
import parse from '../middleware/parse';
import { send } from "../utils/mail";
import * as moment from "moment";
import * as os from "os"; // importing this to for end-of-line in emails. Heroku is run on Linux and I can't make the lines work without this.

export function context(
    req: express.Request,
    res: express.Response,
    next: express.NextFunction,
) {
    req.context = {
        head: {
            title: 'Apply | Innovate Birmingham',
            meta: {
                description: 'Choose your path to a career in technology.',
                images: [
                    {
                        url: '/static/img/home/hero.png',
                    }
                ]
            }
        }
    };

    next();
};

export function render(
    req: express.Request,
    res: express.Response,
    next: express.NextFunction,
) {
    res.render('apply', req.context, (err, html) => {
        parse(req, req.url, html).then(
            (html) => {
                res.send(html);
            },
            (err) => {
                next(err);
            },
        );
    });
};

export async function handleApplicationEmail(
    req: express.Request,
    res: express.Response,
    next: express.NextFunction,
) {
    try {
        const { name, email: applicantEmail } = req.body;

        return send(
            "Innovate Birmingham <admissions@innovatebham.com>", // is this where im supposed to change the email?
            applicantEmail,
            "Thank You For Applying to Innovate Birmingham",
            `Dear ${name},${os.EOL}${os.EOL}Thank you for applying to Innovate Birmingham! Your application is currently under review by the Innovate Birmingham Admissions Team. We will contact you with next steps once we have completed the review of your application.${os.EOL}${os.EOL}Please contact us at admissions@innovatebham.com if you have any questions, and we look forward to speaking with you soon.`,
        );
    } catch (err) {
        console.error(err);
        res.send(err);
    };
};