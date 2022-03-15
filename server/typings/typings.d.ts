declare module Express {
    export interface Request {
        context: {
            [key: string]: any;
            head?: {
                [key: string]: any;
                title?: string;
                meta?: {
                    [key: string]: any;
                    description?: string;
                    baseUrl?: string;
                    breadcrumbs?: Array<{ url: string; index: number; name: string; }>;
                    canonical?: string;
                    images?: Array<models.IMediaType>;
                    videos?: Array<models.IMediaType>;
                }
            },
            main?: any;
        };
        botInfo: {
            isBot: boolean,
            nameBot?: string
        };
    }
}

declare module models {
    export interface IMediaType {
        url: string;
        type?: string;
        width?: number;
        height?: number;
    }
}