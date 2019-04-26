import * as express from 'express';
import parse from '../middleware/parse';
import * as _ from 'lodash';
import * as uuid from 'uuid/v4';
import { ICurriculumSection } from '../references';

export function context(
    req: express.Request,
    res: express.Response,
    next: express.NextFunction,
) {
    req.context = {
        head: {
            title:
                'Learn how to extract insight and knowledge from data | Data Analytics Course',
            meta: {
                description:
                    'Learn the technical and nontechnical skills you need to get a job as a Data Analyst.',
                images: [
                    {
                        url: '/static/img/home/hero.png',
                    },
                    {
                        url: '/static/img/data-analytics/hero.jpeg',
                    },
                ],
            },
        },
        main: {
            curriculum: [],
        },
    };

    let curriculum: Array<ICurriculumSection> = [
        {
            icon: 'fab fa-microsoft',
            headline: 'Microsoft Excel',
            description:
                ["It's on every resume, installed on just about every computer, and used in every classroom... so everyone knows Excel... right? Wrong. Most people never harness the real power of Excel, but here you'll learn why it is used by big and small businesses alike to drive data-based decisions. You'll learn the ins and outs of Excel so you can not only confidently put Excel Expert on your resume but also use it as a tool to inform your summer lemonade stand business, a Fortune 500 company, and everything in between."],
        },
        {
            icon: 'fas fa-plug',
            headline: 'Microsoft Power BI',
            description:
                ['All that data is sitting on a server as 1s and 0s, and even when we can see them as numbers and words, rows and tables, we need a better way to visualize all that so we can make educated decisions. So how do we get all that data in a model that is both beautiful and informative. That\'s where Power BI comes in. As one of the leaders in Business Intelligence software, Power BI gives you the "power" (sorry) to turn all those 1s and 0s into graphs and charts that you\'ll actually be able to use to draw  insights and make decisions.'],
        },
        {
            icon: 'fas fa-database',
            headline: 'Microsoft Access',
            description:
                ["Microsoft Access is a database management system that allows you to store, query, and report on relational data. It's much better at storing and accessing relatively large data sets than Excel. Plus it's got a whole suite of cool developer and graphical user interface tools that make understanding your data a breeze."],
        },
        {
            icon: 'fas fa-table',
            headline: 'Tableau',
            description:
                ["Tableau is considered by many to be the gold standard in data visualization. Having been around since 2003, Tableu Software has taken years and years to perfect how we as end users and data analysts make sense of all the data. Sound similar to Power BI? That's because they are both leaders in Business Intelligence software. So why learn both? Because knowing the ins and outs and strengths and weaknesses of both will give you a leg up when working as a data analyst."],
        },
    ];

    req.context.main.curriculum = curriculum.map((section) => {
        let s = { ...section, id: uuid() };

        if (_.isArray(s.description)) {
            let temp = `<ul>`;

            s.description.forEach((item) => {
                temp += `<li>${item}</li>`;
            });

            temp += `</ul>`;

            s.description = [temp];
        }

        return s;
    });

    next();
}

export function render(
    req: express.Request,
    res: express.Response,
    next: express.NextFunction,
) {
    res.render('data-analytics', req.context, (err, html) => {
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
