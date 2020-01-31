export interface ICurriculumSection {
    icon?: string;
    headline: string;
    timeline?: string;
    description?: Array<string>;
    children?: Array<{
        icon: string;
        headline: string;
        description: string;
    }>;
}

export interface IPartner {
    name: string;
    logo: string;
    url: string;
    status: Array<number>;
    __logoPath?: string;
}

export const enum PARTNER_STATUS {
    EMPLOYER,
    NETWORK,
    HIRED,
}

export const PARTNERS: Array<IPartner> = [
    // {
    //     name: 'Focus IT',
    //     logo: 'focusit.png',
    //     url: 'https://www.focusitinc.com/',
    //     status: [PARTNER_STATUS.HIRED]
    // },
    {
        name: 'Brooksource',
        logo: 'brooksource.png',
        url: 'https://www.brooksource.com/',
        status: [PARTNER_STATUS.NETWORK]
    },
    {
        name: 'Altec Industries',
        logo: 'altec.png',
        url: 'https://altec.com/',
        status: [PARTNER_STATUS.HIRED, PARTNER_STATUS.EMPLOYER]
    },
    {
        name: 'Syntropy Group',
        logo: 'syntropygroup.png',
        url: 'https://syntropygroup.com/',
        status: [PARTNER_STATUS.EMPLOYER]
    },
    {
        name: 'HC3',
        logo: 'HC3.png',
        url: 'https://www.hc3.io',
        status: [PARTNER_STATUS.EMPLOYER]
    },
    {
        name: 'United Way',
        logo: 'United_Way.png',
        url: 'https://www.unitedway.org/#',
        status: [PARTNER_STATUS.NETWORK]
    },
    {
        name: 'The Wellhouse',
        logo: 'wellhouse.png',
        url: 'http://the-wellhouse.org/',
        status: [PARTNER_STATUS.NETWORK]
    },
    {
        name: 'Goodwill Alabama',
        logo: 'goodwill-al.png',
        url: 'http://algoodwill.org/',
        status: [PARTNER_STATUS.NETWORK]
    },
    {
        name: 'Pelham City Schools',
        logo: 'pelham.png',
        url: 'https://www.pelhamcityschools.org/',
        status: [PARTNER_STATUS.NETWORK]
    },
    {
        name: 'Alabama Public Television',
        logo: 'aptv.jpg',
        url: 'http://aptv.org/',
        status: [PARTNER_STATUS.NETWORK]
    },
    {
        name: 'Shelby County Schools',
        logo: 'shelby.png',
        url: 'https://www.shelbyed.k12.al.us/',
        status: [PARTNER_STATUS.NETWORK]
    },
    {
        name: 'Sigao Studios',
        logo: 'sigao.png',
        url: 'https://sigao.io',
        status: [PARTNER_STATUS.HIRED, PARTNER_STATUS.EMPLOYER]
    },
    {
        name: 'Shipt',
        logo: 'shipt.png',
        url: 'https://shipt.com',
        status: [PARTNER_STATUS.HIRED],
    },
    {
        name: 'Sparkhound',
        logo: 'sparkhound.png',
        url: 'https://www.sparkhound.com/',
        status: [PARTNER_STATUS.HIRED]
    },
    {
        name: 'Two Ravens',
        logo: 'tworavens.png',
        url: 'https://www.2rvns.com/',
        status: [PARTNER_STATUS.NETWORK]
    },
    {
        name: 'Wyndy',
        logo: 'wyndy.png',
        url: 'https://www.wyndy.com/',
        status: [PARTNER_STATUS.HIRED]
    },
    {
        name: 'Apple',
        logo: 'apple.png',
        url: 'https://apple.com',
        status: [PARTNER_STATUS.HIRED],
    },
    {
        name: 'Forty Five Inc',
        logo: '45inc.jpeg',
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
        logo: 'burr-forman.jpeg',
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
        logo: 'cadence.jpg',
        url: 'https://cadencebank.com/',
        status: [PARTNER_STATUS.HIRED, PARTNER_STATUS.EMPLOYER],
    },
    // {
    //     name: 'Quantalytix',
    //     logo: '',
    //     url: 'https://quantalytix.com/',
    //     status: [PARTNER_STATUS.HIRED],
    // },
    {
        name: 'RGIS',
        logo: 'rgis.png',
        url: 'http://www.rgis.com/',
        status: [PARTNER_STATUS.HIRED],
    },
    {
        name: 'Southern Company',
        logo: 'southern-company.png',
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
        name: 'Tek Systems',
        logo: 'teksystems.jpg',
        url: 'https://www.teksystems.com/',
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
        logo: 'xpertdox.jpeg',
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
        name: 'Airship',
        logo: 'airship.png',
        url: 'http://teamairship.com',
        status: [PARTNER_STATUS.HIRED],
    },
    {
        name: 'Alabama Power',
        logo: 'alabama-power.jpg',
        url: 'http://alabamapower.com',
        status: [PARTNER_STATUS.HIRED, PARTNER_STATUS.EMPLOYER],
    },
    {
        name: 'Alabama Power Foundation',
        logo: 'alabama-power-foundation.png',
        url: 'http://powerofgood.com',
        status: [PARTNER_STATUS.NETWORK],
    },
    {
        name: 'Alabama Capital Network',
        logo: 'acn.jpg',
        url: 'https://alabamacapitalnetwork.com',
        status: [],
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
        status: [],
    },
    {
        name: 'BBVA Compass',
        url: 'https://www.bbvacompass.com/',
        logo: 'bbva.png',
        status: [PARTNER_STATUS.HIRED, PARTNER_STATUS.EMPLOYER],
    },
    {
        name: 'Blue Cross Blue Shield of Alabama',
        url: 'https://www.bcbsal.org/web/index.html',
        logo: 'bcbs.jpg',
        status: [PARTNER_STATUS.HIRED, PARTNER_STATUS.EMPLOYER],
    },
    {
        name: 'City of Birmingham',
        logo: 'birmingham-seal.jpg',
        url: 'https://www.birminghamal.gov/',
        status: [PARTNER_STATUS.EMPLOYER, PARTNER_STATUS.NETWORK],
    },
    {
        name: 'Birmingham Venture Club',
        url: 'http://birminghamventure.com/',
        logo: 'bvc.png',
        status: [],
    },
    {
        name: 'Generation',
        url: 'https://www.generation.org/',
        logo: 'generation_logo.png',
        status: [PARTNER_STATUS.NETWORK],
    },
    {
        name: 'Central Six',
        url: 'https://alabamaworks.com/centralsix/',
        logo: 'central-six.jpg',
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
        status: [],
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
        status: [PARTNER_STATUS.EMPLOYER],
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
        name: 'Keysys',
        logo: 'keysys_sm.png',
        url: 'https://www.keysys.io/',
        status: [PARTNER_STATUS.EMPLOYER, PARTNER_STATUS.HIRED],
    },
    {
        name: 'Mayer Electric Supply',
        logo: 'mayer.jpg',
        url: 'https://www.mayerelectric.com/',
        status: [PARTNER_STATUS.EMPLOYER],
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
        url: 'http://www.motionmobs.com',
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
    // {
    //     name: 'Platypi',
    //     logo: 'platypi.jpg',
    //     url: 'https://platypi.io',
    //     status: [PARTNER_STATUS.EMPLOYER],
    // },
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
        status: [PARTNER_STATUS.HIRED, PARTNER_STATUS.EMPLOYER],
    },
    {
        name: 'Regions',
        logo: 'regions.jpg',
        url: 'https://www.regions.com/personal-banking/',
        status: [PARTNER_STATUS.HIRED, PARTNER_STATUS.EMPLOYER],
    },
    {
        name: 'Rev Birmingham',
        logo: 'rev.jpg',
        url: 'http://revbirmingham.org/',
        status: [],
    },
    {
        name: 'Southern Research',
        logo: 'southern-research.jpg',
        url: 'https://southernresearch.org/',
        status: [PARTNER_STATUS.EMPLOYER],
    },
    {
        name: 'Steris IMS',
        logo: 'steris.jpg',
        url: 'http://www.imsready.com/',
        status: [PARTNER_STATUS.HIRED, PARTNER_STATUS.EMPLOYER],
    },
    {
        name: 'Tech Birmingham',
        logo: 'tech-birmingham.jpeg',
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
    {
        name: 'Covalence',
        logo: 'covalence.png',
        url: 'https://covalence.io/',
        status: [PARTNER_STATUS.NETWORK],
    },
    {
        name: 'Jefferson State Community College',
        logo: 'jeff-state.jpg',
        url: 'http://www.jeffersonstate.edu/',
        status: [PARTNER_STATUS.NETWORK],
    },
    {
        name: 'Lawson State Community College',
        logo: 'lawson-state.jpg',
        url: 'http://www.lawsonstate.edu/',
        status: [PARTNER_STATUS.NETWORK],
    },
    {
        name: 'The Dannon Project',
        logo: 'dannon.jpeg',
        url: 'http://www.dannonproject.org/',
        status: [PARTNER_STATUS.NETWORK],
    },
    {
        name: 'Birmingham Education Foundation',
        logo: 'ed-foundation.jpeg',
        url: 'https://edbirmingham.org/',
        status: [PARTNER_STATUS.NETWORK, PARTNER_STATUS.HIRED],
    },
    {
        name: 'I Am Bham',
        logo: 'iambham.jpg',
        url: 'https://innovatebham.com/',
        status: [PARTNER_STATUS.NETWORK, PARTNER_STATUS.HIRED],
    },
    {
        name: "Alabama Possible's Cash For College Program",
        logo: 'cash-for-college.jpg',
        url: 'alabamapossible.org/programs/cash-for-college/',
        status: [PARTNER_STATUS.NETWORK],
    },
    {
        name: "ThinkData Solutions",
        logo: 'think-data.png',
        url: 'http://www.thinkdatasol.com/',
        status: [PARTNER_STATUS.NETWORK]
    },
    {
        name: "TEALS",
        logo: 'teals.png',
        url: 'http://www.thinkdatasol.com/',
        status: [PARTNER_STATUS.NETWORK]
    },
];
