export interface ICurriculumSection {
    icon: string;
    headline: string;
    timeline: string;
    description?: string | Array<string>;
    children?: Array<{
        icon: string;
        headline: string;
        description: string;
    }>;
}

export const enum PARTNER_STATUS {
    EMPLOYER,
    NETWORK,
    HIRED,
}

export const PARTNERS: Array<{
    name: string;
    logo: string;
    url: string;
    status: Array<number>;
}> = [
    {
        name: 'Forty Five Inc',
        logo: '45inc.png',
        url: 'https://45incbirmingham.com/',
        status: [PARTNER_STATUS.HIRED],
    },
    {
        name: 'Deshazo',
        logo: 'deshazo.png',
        url: 'http://deshazo.com/automation/',
        status: [PARTNER_STATUS.HIRED],
    },
    {
        name: 'UPS',
        logo: 'ups.jpg',
        url: 'https://www.ups.com',
        status: [PARTNER_STATUS.HIRED],
    },
    {
        name: 'Birmingham Education Foundation',
        logo: 'ed-foundation.jpg',
        url: 'https://edbirmingham.org/',
        status: [PARTNER_STATUS.HIRED],
    },
    {
        name: 'SLK Group',
        logo: 'slk.png',
        url: 'http://www.slkgroup.com/',
        status: [PARTNER_STATUS.HIRED],
    },
    {
        name: 'EA Renfroe',
        logo: 'ea-renfroe.png',
        url: 'https://www.earenfroe.com/',
        status: [PARTNER_STATUS.HIRED],
    },
    {
        name: 'Burr Forman',
        logo: 'burr-forman.png',
        url: 'http://www.burr.com/',
        status: [PARTNER_STATUS.HIRED],
    },
    {
        name: 'Hibbett Sports',
        logo: 'hibbett.png',
        url: 'https://www.hibbett.com/',
        status: [PARTNER_STATUS.HIRED],
    },
    {
        name: 'Cadence Bank',
        logo: 'cadence.png',
        url: 'https://cadencebank.com/',
        status: [PARTNER_STATUS.HIRED],
    },
    {
        name: 'RGIS',
        logo: 'rgis.png',
        url: 'http://www.rgis.com/',
        status: [PARTNER_STATUS.HIRED],
    },
    {
        name: 'Southern Company',
        logo: 'southern-company.jpg',
        url: 'https://www.southerncompany.com/',
        status: [PARTNER_STATUS.HIRED],
    },
    {
        name: 'Dataperk',
        logo: 'dataperk.png',
        url: 'https://dataperk.com/',
        status: [PARTNER_STATUS.HIRED],
    },
    {
        name: 'Sycle',
        logo: 'sycle.png',
        url: 'https://web.sycle.net/login/',
        status: [PARTNER_STATUS.HIRED],
    },
    {
        name: 'Encompass Health',
        logo: 'encompass.jpg',
        url: 'https://www.encompasshealth.com/',
        status: [PARTNER_STATUS.HIRED],
    },
    {
        name: 'ITAC Solutions',
        logo: 'itac.png',
        url: 'https://itacsolutions.com/',
        status: [PARTNER_STATUS.HIRED],
    },
    {
        name: 'Whiteboard IT',
        logo: 'whiteboard.png',
        url: 'http://whiteboard-it.com/',
        status: [PARTNER_STATUS.HIRED],
    },
    {
        name: 'XpertDox',
        logo: 'xpertdox.png',
        url: 'https://www.xpertdox.com/',
        status: [PARTNER_STATUS.HIRED],
    },
    {
        name: 'Cornerstone Schools',
        logo: 'cornerstone.png',
        url: 'https://csalabama.org/',
        status: [PARTNER_STATUS.HIRED],
    },
    {
        name: 'Starnes Media',
        logo: 'starnes.png',
        url: 'https://starnes.media/',
        status: [PARTNER_STATUS.HIRED],
    },
    {
        name: 'Alabama Power',
        logo: 'alabama-power.jpg',
        url: 'http://alabamapower.com',
        status: [
            PARTNER_STATUS.HIRED,
            PARTNER_STATUS.EMPLOYER,
            PARTNER_STATUS.NETWORK,
        ],
    },
    {
        name: 'Alabama Capital Network',
        logo: 'acn.jpg',
        url: 'https://alabamacapitalnetwork.com',
        status: [PARTNER_STATUS.NETWORK],
    },
    {
        name: 'Autotec',
        logo: 'autotec.jpg',
        url: 'https://www.autotec.com',
        status: [PARTNER_STATUS.EMPLOYER],
    },
    {
        name: 'Birmingham Business Alliance',
        logo: 'bba.jpeg',
        url: 'https://www.birminghambusinessalliance.com/',
        status: [PARTNER_STATUS.EMPLOYER, PARTNER_STATUS.NETWORK],
    },
    {
        name: 'Birmingham Civil Rights Institute',
        logo: 'bcri.jpg',
        url: 'https://www.bcri.org/',
        status: [PARTNER_STATUS.NETWORK],
    },
    {
        name: 'BBVA Compass',
        url: 'https://www.bbvacompass.com/',
        logo: 'bbva.jpg',
        status: [
            PARTNER_STATUS.HIRED,
            PARTNER_STATUS.EMPLOYER,
            PARTNER_STATUS.NETWORK,
        ],
    },
    {
        name: 'Blue Cross Blue Shield of Alabama',
        url: 'https://www.bcbsal.org/web/index.html',
        logo: 'bcbs.jpg',
        status: [PARTNER_STATUS.HIRED, PARTNER_STATUS.EMPLOYER],
    },
    {
        name: 'Birmingham Forward',
        logo: 'birmingham-forward.jpg',
        url: 'https://www.birminghamal.gov/',
        status: [PARTNER_STATUS.EMPLOYER, PARTNER_STATUS.NETWORK],
    },
    {
        name: 'Birmingham Venture Club',
        url: 'http://birminghamventure.com/',
        logo: 'bvc.png',
        status: [PARTNER_STATUS.NETWORK],
    },
    {
        name: 'Brasefield Gorrie',
        logo: 'brasfield-gorrie.jpg',
        url: 'https://www.brasfieldgorrie.com/',
        status: [PARTNER_STATUS.EMPLOYER],
    },
    {
        name: 'CGI',
        logo: 'cgi.jpg',
        url: 'https://www.cgi.com/en/',
        status: [PARTNER_STATUS.EMPLOYER],
    },
    {
        name: 'Coca Cola',
        logo: 'coca-cola.jpg',
        url: 'https://us.coca-cola.com/',
        status: [PARTNER_STATUS.EMPLOYER],
    },
    {
        name: 'Community Foundation of Greater Birmingham',
        logo: 'cfgb.jpg',
        url: 'https://www.cfbham.org/',
        status: [PARTNER_STATUS.NETWORK],
    },
    {
        name: 'Daxko',
        logo: 'daxko.jpeg',
        url: 'https://daxko.com/',
        status: [PARTNER_STATUS.EMPLOYER],
    },
    {
        name: 'Ebsco',
        logo: 'ebsco.jpg',
        url: 'https://www.ebsco.com/',
        status: [PARTNER_STATUS.EMPLOYER],
    },
    {
        name: 'Economic Partnership Development of Alabama',
        logo: 'edpa.jpg',
        url: 'https://www.edpa.org/',
        status: [PARTNER_STATUS.EMPLOYER, PARTNER_STATUS.NETWORK],
    },
    {
        name: 'Fetch',
        logo: 'fetch.jpg',
        url: 'https://www.getfetched.com/',
        status: [PARTNER_STATUS.EMPLOYER],
    },
    {
        name: 'Help Lightning',
        logo: 'help-lightning.jpg',
        url: 'https://helplightning.com/',
        status: [PARTNER_STATUS.EMPLOYER],
    },
    {
        name: 'Honda',
        logo: 'honda.jpg',
        url: 'https://www.honda.com/',
        status: [PARTNER_STATUS.EMPLOYER, PARTNER_STATUS.HIRED],
    },
    {
        name: 'Innovation Depot',
        logo: 'innovation-depot.jpeg',
        url: 'https://innovationdepot.org/',
        status: [PARTNER_STATUS.NETWORK],
    },
    {
        name: 'Jefferson County',
        logo: 'jefferson-county.jpg',
        url: 'https://www.jccal.org/',
        status: [PARTNER_STATUS.NETWORK],
    },
    {
        name: 'Mayer Electric Supply',
        logo: 'mayer.jpg',
        url: 'https://www.mayerelectric.com/',
        status: [PARTNER_STATUS.EMPLOYER, PARTNER_STATUS.NETWORK],
    },
    {
        name: 'McWane',
        logo: 'mcwane.jpg',
        url: 'http://www.mcwane.com/',
        status: [PARTNER_STATUS.EMPLOYER],
    },
    {
        name: 'McLeod Software',
        logo: 'mcleod.jpg',
        url: 'http://www.mcleodsoftware.com/',
        status: [PARTNER_STATUS.EMPLOYER],
    },
    {
        name: 'Mercedes Benz',
        logo: 'mercedes.jpg',
        url: 'https://www.mbusa.com/en/home',
        status: [PARTNER_STATUS.EMPLOYER],
    },
    {
        name: 'Motion Mobs',
        logo: 'motion-mobs.jpg',
        url: 'www.motionmobs.com',
        status: [PARTNER_STATUS.EMPLOYER],
    },
    {
        name: 'Pack Health',
        logo: 'pack-health.jpg',
        url: 'https://packhealth.com/',
        status: [PARTNER_STATUS.EMPLOYER],
    },
    {
        name: 'Phish Me',
        logo: 'phish-me.jpg',
        url: 'https://cofense.com/',
        status: [PARTNER_STATUS.EMPLOYER],
    },
    {
        name: 'Platypi',
        logo: 'platypi.jpg',
        url: 'https://platypi.io',
        status: [PARTNER_STATUS.EMPLOYER],
    },
    {
        name: 'ProAssurance',
        logo: 'proassurance.jpg',
        url: 'https://www.proassurance.com/',
        status: [PARTNER_STATUS.EMPLOYER],
    },
    {
        name: 'Protective Life',
        logo: 'protective.png',
        url: 'https://www.protective.com/',
        status: [
            PARTNER_STATUS.HIRED,
            PARTNER_STATUS.EMPLOYER,
            PARTNER_STATUS.NETWORK,
        ],
    },
    {
        name: 'Regions',
        logo: 'regions.jpg',
        url: 'https://www.regions.com/personal-banking/',
        status: [
            PARTNER_STATUS.HIRED,
            PARTNER_STATUS.EMPLOYER,
            PARTNER_STATUS.NETWORK,
        ],
    },
    {
        name: 'Rev Birmingham',
        logo: 'rev.jpg',
        url: 'http://revbirmingham.org/',
        status: [PARTNER_STATUS.NETWORK],
    },
    {
        name: 'Southern Research',
        logo: 'southern-research.jpg',
        url: 'https://southernresearch.org/',
        status: [PARTNER_STATUS.EMPLOYER, PARTNER_STATUS.NETWORK],
    },
    {
        name: 'Steris IMS',
        logo: 'steris.jpeg',
        url: 'http://www.imsready.com/',
        status: [PARTNER_STATUS.HIRED, PARTNER_STATUS.EMPLOYER],
    },
    {
        name: 'Tech Birmingham',
        logo: 'tech-birmingham.jpg',
        url: 'https://www.techbirmingham.com/',
        status: [PARTNER_STATUS.EMPLOYER, PARTNER_STATUS.NETWORK],
    },
    {
        name: 'University of Alabama at Birmingham',
        logo: 'uab.png',
        url: 'https://www.uab.edu/home/',
        status: [
            PARTNER_STATUS.HIRED,
            PARTNER_STATUS.EMPLOYER,
            PARTNER_STATUS.NETWORK,
        ],
    },
    {
        name: 'Viperline Solutions',
        logo: 'viperline.jpg',
        url: 'https://www.viperline.com/',
        status: [PARTNER_STATUS.EMPLOYER],
    },
];
