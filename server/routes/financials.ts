import * as express from 'express';
import parse from '../middleware/parse';
import * as _ from 'lodash';

export function context(req: express.Request, res: express.Response, next: express.NextFunction) {
  req.context = {
    head: {
      title: 'Financials | Innovate Birmingham',
      meta: {
        description: 'Learn the technical and nontechnical skills you need to get a job as an IT professional.',
        images: [
          {
            url: '/static/img/financials/hero.png',
          },
        ],
      },
    },
    main: {
      forms: [
        {
          title: 'Form 990',
          formLink: '/static/documents/ib-form-990.pdf',
        },
        {
          title: 'End of Year 2019',
          formLink: '/static/documents/ib-year-end-2019.pdf',
        },
      ],
    },
  };

  next();
}

export function render(req: express.Request, res: express.Response, next: express.NextFunction) {
  res.render('financials', req.context, (err, html) => {
    parse(req, req.url, html).then(
      (html) => {
        res.send(html);
      },
      (err) => {
        next(err);
      }
    );
  });
}
