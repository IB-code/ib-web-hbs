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
            title:
                'Become an IT Professional | Generation IT Hardware Bootcamp',
            meta: {
                description:
                    'Learn the technical and nontechnical skills you need to get a job as an IT professional.',
                images: [
                    {
                        url: '/static/img/home/hero.png',
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
            icon: 'fas fa-play',
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
            icon: 'fas fa-memory',
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
            icon: 'fas fa-plug',
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
            icon: 'fas fa-mobile-alt',
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
            icon: 'fas fa-laptop',
            headline: 'Laptop and Mobile Devices',
            timeline: 'Week 5',
            description: [
                'Laptop Hardware',
                'Mobile Devices',
                'Common Issues on Mobile Devices',
            ],
        },
        {
            icon: 'fa fa-file',
            headline: '901 Exam',
            timeline: 'Weeks 6 - 7',
            description:
                'Students will prepare for to take the CompTIA+ 901 exam.',
        },
        {
            icon: 'fab fa-windows',
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
            icon: 'fab fa-linux',
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
            icon: 'fas fa-user-secret',
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
            icon: 'fa fa-file',
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
