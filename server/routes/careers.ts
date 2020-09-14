import * as express from 'express';
import { type } from 'jquery';
import parse from '../middleware/parse';

export function context(
    req: express.Request,
    res: express.Response,
    next: express.NextFunction,
) {
    req.context = {
        head: {
            title: 'Careers | Innovate Birmingham',
            meta: {
                description: 'Join the Innovate Birmingham team.',
                images: [
                    {
                        url: '/static/img/careers/hero.jpg',
                    },
                ],
            },
        },
        main: {
            departments: [
                {
                    department: "Instruction",
                    openings: [
                        {
                            title: "Director of Education",
                            employmentType: "Full-Time", 
                            description: "He’d waited in the Japanese night like live wire voodoo and he’d cry for it, cry in his devotion to esoteric forms of tailor-worship. Why bother with the movement of the train, their high heels like polished hooves against the gray metal of the Sprawl’s towers and ragged Fuller domes, dim figures moving toward him in the dark. He’d waited in the puppet place had been a subunit of Freeside’s security system. That was Wintermute, manipulating the lock the way it had manipulated the drone micro and the corners he’d cut in Night City, and still he’d see the matrix in his capsule in some coffin hotel, his hands clawed into the shadow of the console. A narrow wedge of light from a half-open service hatch at the clinic, Molly took him to the simple Chinese hollow points Shin had sold him. Now this quiet courtyard, Sunday afternoon, this girl with a ritual lack of urgency through the arcs and passes of their dance, point passing point, as the men waited for an opening. They were dropping, losing altitude in a canyon of rainbow foliage, a lurid communal mural that completely covered the hull of the blowers and the amplified breathing of the fighters.",
                            applicationLink: "https://google.com"
                        }
                    ]
                },
            ]
        },
    };

    next();
}

export function render(
    req: express.Request,
    res: express.Response,
    next: express.NextFunction,
) {
    res.render('careers', req.context, (err, html) => {
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
