import * as express from 'express';
import parse from '../middleware/parse';

export function context(
    req: express.Request,
    res: express.Response,
    next: express.NextFunction,
) {
    req.context = {
        head: {
            title: 'Accelerated Career Development Programs Innovate Birmingham | Innovate Birmingham',
            meta: {
                description:
                    'Other accelerated, bootcamp related programs and classes offered by higher learning institutions in Jefferson County.',
                images: [
                    {
                        url: '/static/img/accelerated/hero.jpg',
                    },
                ],
            },
        },
        main: {
            courses: [
                {
                    id: 9,
                    title: 'Full Stack Software Development',
                    img: '/static/img/logos/iambham.jpg',
                    courseLength: 'Mon - Fri (14 weeks)',
                    courseTime: '9 am - 5 pm',
                    courseLocation: 'Innovation Depot',
                    courseCost: 'Free',
                    courseDescription: 'A course provided by Innovate Birmingham in partnership with Covalence, I Am Bham is a 14-week coding bootcamp designed to teach Full Stack Software Engineering through short-term, fast-track, intensive training.',
                    courseCertifications: 'UAB Collat School of Business Certificate of Completion in Software Development',
                    redirectURL: "/courses/software"
                },
                {
                    id: 10,
                    title: 'Data Analytics',
                    img: '/static/img/logos/think-data.png',
                    courseLength: 'Mon - Fri (14 weeks)',
                    courseTime: '9 am - 5 pm',
                    courseLocation: 'Innovation Depot',
                    courseCost: 'Free',
                    courseDescription: 'A course provided by Innovate Birmingham in partnership with ThinkData Solutions, our Data Analytics course is a 14-week tech bootcamp designed to train future technology professionals in the fundamentals of data analysis.',
                    courseCertifications: 'UAB Collat School of Business Certificate of Completion in Data Analytics',
                    redirectURL: "/courses/data-analytics/"
                },
                {
                    id: 12,
                    title: '#BHM SCRUM Bootcamp Course',
                    img: '/static/img/logos/sigao.png',
                    courseLength: 'May 25 – 30, 2020',
                    courseTime: 'Half-Day',
                    courseLocation: 'Online',
                    courseCost: '$2,499.00',
                    courseDescription: 'This five half-day course will guide participants through the world of Scrum Mastery and Product Ownership. Participants will gain hands-on knowledge and will grow their ability to embrace Scrum and guide their teams to doing twice the work in half the time. At the end of the class, participants will be eligible to sit for the LSM/LSPO certifications, the Scrum-worlds only certifications that are recognized by Scrum co-founder Jeff Sutherland.',
                    courseCertifications: 'LSM/LSPO Certification',
                    redirectURL: "https://sigao.io/product/bhm-cohort005/"
                },
                {
                    id: 8,
                    title: 'Agile Project Management',
                    img: '/static/img/accelerated/uab.png',
                    note: '(Open Enrollment through UAB)',
                    courseLength: 'Oct. 16, 2020 - Oct. 30, 2020',
                    courseTime: '8:30 am - 4:30 pm, Fridays',
                    courseLocation: 'UAB Collat School of Business, Online',
                    courseCost: '$1,200 or $900 if UAB employee/student or company with 3 or more students in the same class.',
                    courseDescription: 'A project management certificate course provided by the Collat School of Professional Education that combines face-to-face and online instruction totaling the 36 contact hours needed to meet the education requirement to sit for the CAPM and PMP exams.',
                    courseCertifications: 'Agile Certified Practitioner (ACP)',
                    redirectURL: "https://prostudies.uab.edu/search/publicCourseSearchDetails.do?method=load&courseId=20531746&selectedProgramAreaId=19004&selectedProgramStreamId="
                },
                {
                    id: 11,
                    title: 'Digital Marketing',
                    note: '(Open Enrollment through UAB)',
                    img: '/static/img/accelerated/uab.png',
                    courseLength: 'Online Offering: May 21 - June 11, 2020 Thursdays, 12pm - 2pm || On-site Fall offering: September 11, 18, 25, October 2, 2020',
                    courseTime: '9:00 am - 4:00 pm',
                    courseLocation: 'UAB Collat School of Business',
                    courseCost: '$2,800 or $2,000 if UAB employee/student, veteran or company with 3 or more students.',
                    courseDescription: 'A program provided by the Collat School of Professional Education to help participants develop a better understanding of the digital marketing landscape in 2020.',
                    courseCertifications: 'N/A',
                    redirectURL: "https://prostudies.uab.edu/search/publicCourseSearchDetails.do?method=load&courseId=22104708&selectedProgramAreaId=19004&selectedProgramStreamId="
                },
                {
                    id: 1,
                    title: 'Full Stack Web Development with PHP',
                    img: '/static/img/accelerated/jeffstate.jpg',
                    courseLength: 'Mon, Tues, Thurs (12 weeks)',
                    courseTime: '6 pm - 9 pm',
                    courseLocation: 'Jeff State',
                    courseCost: '',
                    courseDescription: 'Full Stack Developers are developers that design complete websites. Companies rely on these developers to build, support and maintain their web applications. Set yourself apart from the rest when you train as a Full Stack Developer! This program provides 15 weeks of traditional classroom instruction designed to aid participants in gaining the skills necessary to secure an entry-level position as a Front-End and Back-End web developer in today’s job market.',
                    courseCertifications: 'None',
                    redirectURL: "https://www.jeffersonstate.edu/workforce-education-2/informationtechnologyacademy/?fbclid=IwAR08Lnxz8RGTIO5a7ahxv6lm2PMoRdB1KPlGzmQYFZ5Ubd8awVe-RpeG32Y"
                },
                {
                    id: 2,
                    title: 'I.T. Help Desk Support',
                    img: '/static/img/accelerated/jeffstate.jpg',
                    courseLength: '12 weeks',
                    courseTime: 'N/A',
                    courseLocation: 'Jeff State',
                    courseCost: '',
                    courseDescription: 'This course provides an overview of information technology that illuminates IT skills and knowledge needed to perform basic tasks commonly performed by end-users and entry-level IT professionals. This includes features of operation systems, troubleshooting, problem solving, successful communication with users, determining a client’s specific needs, and hardware/software fundamentals. The course also provides opportunities to develop the skills to establish network connectivity, database and computer programming, and best practices to secure data and enhance web security. This course is an excellent resource for those in--or preparing for--the technical-support field.',
                    courseCertifications: 'CompTIA IT Fundamentals (ITF+) certification ',
                    redirectURL: "https://www.jeffersonstate.edu/workforce-education-2/informationtechnologyacademy/?fbclid=IwAR08Lnxz8RGTIO5a7ahxv6lm2PMoRdB1KPlGzmQYFZ5Ubd8awVe-RpeG32Y"
                },
                {
                    id: 3,
                    title: 'Comp TIA A+ Certification Prep',
                    img: '/static/img/accelerated/jeffstate.jpg',
                    courseLength: 'Tues, Thurs (21 Weeks)',
                    courseTime: '6:30 pm - 9:30 pm',
                    courseLocation: 'Jeff State',
                    courseCost: 'N/A',
                    courseDescription: 'Set yourself apart from the rest when you train as a Computer Technician! This program provides 21 weeks of traditional classroom instruction to lay a solid foundation for students to sit for and pass the Computing Technology Industry Association (CompTIA) certification. The comprehensive curriculum is approved by ComptTIA and is specifically designed to prepare students to work with hardware, software, networks, and security issues, gain knowledge and skills needed to earn CompTIA A+ certification.',
                    courseCertifications: 'CompTIA A+ ',
                    redirectURL: "https://www.jeffersonstate.edu/workforce-education-2/informationtechnologyacademy/?fbclid=IwAR08Lnxz8RGTIO5a7ahxv6lm2PMoRdB1KPlGzmQYFZ5Ubd8awVe-RpeG32Y"
                },
                {
                    id: 4,
                    title: 'SCRUM',
                    img: '/static/img/accelerated/jeffstate.jpg',
                    courseLength: 'Mon, Wed (6 Weeks)',
                    courseTime: '6:30 pm - 8:30 pm',
                    courseLocation: 'Jeff State',
                    courseCost: '',
                    courseDescription: 'The Scrum Fast-Track training course will lay the foundation for understanding and building successful agile teams using the Scrum Framework. Topics include the concepts, principles and methods of the Scrum framework.',
                    courseCompetencies: 'Understand the Agile Manifesto. Describe Scrum Framework. Define empirical process control and list the three pillars. Understand Scrum roles, ceremonies and artifacts. Plan, execute, monitor and track Scrum projects. Discuss how the Daily Scrum differs from a traditional status meeting. Understand advanced Scrum topics. Absorb Agile philosophy and gain deep knowledge of Scrum. Effectively apply Scrum in your organizations.',
                    courseCertifications: 'SCRUM Master Certification',
                    redirectURL: "https://www.jeffersonstate.edu/workforce-education-2/informationtechnologyacademy/?fbclid=IwAR08Lnxz8RGTIO5a7ahxv6lm2PMoRdB1KPlGzmQYFZ5Ubd8awVe-RpeG32Y"
                },
                {
                    id: 5,
                    title: 'Cybersecurity',
                    img: '/static/img/accelerated/jeffstate.jpg',
                    courseLength: 'Tues, Thurs (14 weeks)',
                    courseTime: 'N/A',
                    courseLocation: 'Jeff State',
                    courseCost: '$1200',
                    courseDescription: 'This course provides the foundation for understanding the key issues associated with protecting information assets. The purpose of the course is to provide the student with an overview of the field of information security and assurance.',
                    courseCompetencies: 'Determine the levels of protection and response to security incidents. Design a consistent, reasonable information security system, with appropriate intrusion detection and reporting features. Identify the spectrum of security activities, methods, methodologies, and procedures. Perform inspection and protection of information assets. Detect and react to threats to information assets. Examine pre- and post-incident procedures. Provide technical and managerial responses.',
                    courseCertifications: 'Security +',
                    redirectURL: "https://www.jeffersonstate.edu/workforce-education-2/informationtechnologyacademy/?fbclid=IwAR08Lnxz8RGTIO5a7ahxv6lm2PMoRdB1KPlGzmQYFZ5Ubd8awVe-RpeG32Y"
                },
                {
                    id: 6,
                    title: 'Java',
                    img: '/static/img/accelerated/jeffstate.jpg',
                    courseLength: '12 weeks',
                    courseTime: 'N/A',
                    courseLocation: 'Jeff State',
                    courseCost: '',
                    courseDescription: 'This is designed to teach students how to utilize Eclipse or IntellJ. Some topics covered included Core Java, Object Oriented Programming and Spring Framework Basics.',  
                    courseCompetencies: 'Introduction to Java Programming, Getting Started with Java, Java Fundamentals, Java Helper Tools, Objects and Classes, Inheritance in Java, Advanced Inheritance and Abstraction, Exception Handling, Java Collections, Creating Web Apps with Java',
                    courseCertifications: 'N/A',
                    redirectURL: "https://www.jeffersonstate.edu/workforce-education-2/informationtechnologyacademy/?fbclid=IwAR08Lnxz8RGTIO5a7ahxv6lm2PMoRdB1KPlGzmQYFZ5Ubd8awVe-RpeG32Y"
                },
                {
                    id: 7,
                    title: 'UAB Coding Academy',
                    note: '(currently enrolled UAB students only)',
                    img: '/static/img/accelerated/uab.png',
                    courseLength: 'Mon, Wed (6 Weeks)',
                    courseTime: '6:30 pm - 9:30 pm',
                    courseLocation: 'UAB',
                    courseCost: '',
                    courseDescription: 'To provide young entrepreneurs the basis of what the software development process entails. What methodologies and tools are more commonly used and give them enough insight to be able to apply this knowledge towards their entrepreneurial ideas.',
                    courseCertifications: 'None',
                    redirectURL: "https://www.idtech.com/locations/alabama-summer-camps/the-university-of-alabama-at-birmingham"
                }
            ]
        }
    };

    next();
}

export function render(
    req: express.Request,
    res: express.Response,
    next: express.NextFunction,
) {
    res.render('accelerated', req.context, (err, html) => {
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
