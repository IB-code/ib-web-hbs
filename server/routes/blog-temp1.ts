import * as express from 'express';
import * as os from 'os';
import parse from '../middleware/parse';

export function context(
    req: express.Request,
    res: express.Response,
    next: express.NextFunction,
) {
    req.context = {
        head: {
            title: 'Blog | Innovate Birmingham',
            meta: {
                description: 'Choose your path to a career in technology.',
                images: [
                    {
                        url: '/static/img/home/hero.png',
                    }
                ]
            }
        },
        main: {
            blog: {
                title: "This is a test blog title",
                body: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur pretium interdum lacus sed venenatis. Duis scelerisque, enim id finibus dapibus, tellus erat cursus lectus, et tincidunt quam risus quis lacus. Aenean sit amet turpis nec dui aliquam cursus. Nulla gravida ante vel nisl dictum, a pretium metus maximus. Sed metus arcu, vestibulum vitae sagittis sed, bibendum ac leo. Etiam non augue at ligula semper feugiat. Aliquam pretium nisi non velit feugiat, et vehicula dolor sodales. Quisque sodales ac ex sit amet pharetra. Integer quis interdum sapien, nec malesuada nibh. In fringilla, elit sit amet dictum aliquet, elit felis cursus diam, eget blandit orci nunc nec lacus. Sed congue pretium quam ultricies posuere. Suspendisse lacinia lectus vel lectus semper malesuada. Integer et semper risus, non dignissim mi. Ut dapibus rhoncus pulvinar. Phasellus semper, elit in efficitur viverra, tellus justo euismod quam, at rutrum justo tellus non tellus. ${os.EOL}Pellentesque ante quam, tempus a dapibus in, luctus sed magna.Sed porttitor nisi eget magna vulputate, ac ultricies nibh eleifend.Morbi sit amet laoreet sem.Morbi non dui vitae orci interdum lacinia sed eu mauris.Aliquam erat volutpat.Duis aliquet nulla ex, a laoreet tortor pellentesque ac.Proin eget augue leo.Donec placerat eget velit quis scelerisque.Cras id diam at dui efficitur commodo.In elementum sit amet neque nec accumsan.Mauris eu porta augue.Vivamus dui nulla, maximus sit amet lorem sit amet, ullamcorper euismod risus.Mauris ultricies, erat eget convallis varius, tortor tortor ornare ante, sit amet congue purus ante lobortis leo.Duis faucibus metus neque, ut consectetur mi gravida nec.Aenean varius nisi non velit imperdiet, eget gravida enim dignissim.Donec gravida eleifend ultricies.Aliquam vel.`
            }
        }
    };

    next();
}

export function render(
    req: express.Request,
    res: express.Response,
    next: express.NextFunction,
) {
    res.render('blog', req.context, (err, html) => {
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