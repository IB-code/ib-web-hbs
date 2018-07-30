import * as express from 'express';
import * as uuid from 'uuid/v4';
import parse from '../middleware/parse';
import * as _ from 'lodash';
import { ICurriculumSection } from '../references';

export function context(
    req: express.Request,
    res: express.Response,
    next: express.NextFunction,
) {
    req.context = {
        head: {
            title: 'Courses | Generation IT Hardware Bootcamp',
            meta: {
                description: 'Learn to build a computer.',
            },
        },
        main: {
            curriculum: [],
        },
    };

    let curriculum: Array<ICurriculumSection> = [
        {
            icon: 'fa fa-cloud',
            headline: 'Class Orientation and Introduction',
            timeline: 'Week 1',
            description: [
                'Introduction to Industry, Role, and Pathway',
                'Customer Focus',
                'Introduction to Computers',
                'The Inside of a Computer',
            ],
        },
        {
            icon: 'fa fa-laptop',
            headline: 'Motherboard, RAM, and CPU',
            timeline: 'Week 2',
            description: [
                'Motherboards',
                'Troubleshooting',
                'Addressing a Client',
                'RAM',
                'CPU',
            ],
        },
        {
            icon: 'fa fa-code',
            headline:
                'Drives, Power Supplies, Peripherals, Connectors and Custom Configurations',
            timeline: 'Week 3',
            description: [
                'Drives',
                'Power Supplies',
                'Peripherals and Connectors',
                'Display Devices',
                'Custom Configurations',
                'Tickets and Ticketing Systems',
                'Intro to 901 Exam',
            ],
        },
        {
            icon: 'fa fa-database',
            headline: 'Networking and Mobile Devices',
            timeline: 'Week 4',
            description: [
                'Prioritizing and Elevating Tickets',
                'Introduction to Networking',
                'TCP/IP',
                'SOHO Routers',
                'Printers',
                'Remote Support',
            ],
        },
        {
            icon: 'fa fa-project-diagram',
            headline: 'Laptop and Mobile Devices',
            timeline: 'Week 5',
            description: [
                'Laptop Hardware',
                'Mobile Devices',
                'Common Issues on Mobile Devices',
            ],
        },
        {
            icon: 'fa fa-project-diagram',
            headline: '901 Exam',
            timeline: 'Weeks 6 - 7',
            description:
                'Students will prepare for to take the CompTIA+ 901 exam.',
        },
        {
            icon: 'fa fa-project-diagram',
            headline: 'Windows',
            timeline: 'Week 8',
            description: [
                'Introduction to Windows',
                'Installing Windows',
                'Configuring Windows',
                'Implementing Hard Drives',
                'Client Side Virtualization',
                'Maintaining Windows',
                'Troubleshooting Windows',
            ],
        },
        {
            icon: 'fa fa-project-diagram',
            headline: 'Other Operating Systems and Intro to Security',
            timeline: 'Week 9',
            description: [
                'Introduction to Other Operating Systems',
                'The Cloud',
                'Network Servers',
                'Introduction to Mobile Operating Systems',
                'Installing and Configuring Mobile Device Connectivity',
                'Configuring Email on a Mobile Device',
                'Mobile Device Synchronization',
                'Introduction to Security',
                'Prevention Methods',
                'Windows Security Settings',
            ],
        },
        {
            icon: 'fa fa-project-diagram',
            headline: 'Security',
            timeline: 'Week 10',
            description: [
                'Securing and Workstation Best Practices',
                'Securing Mobile Devices',
                'Destruction and Disposal Methods',
                'Securing and SOHO Wireless and Wired Network',
                'Software Troubleshooting',
                'Operational Procedures',
            ],
        },
        {
            icon: 'fa fa-project-diagram',
            headline: '902 Exam & Career Prep and Interviewing',
            timeline: 'Weeks 11 - 12',
            description:
                'Students will prepare for to take the CompTIA+ 902 exam.',
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

            s.description = temp;
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
    res.render('hardware', req.context, (err, html) => {
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
