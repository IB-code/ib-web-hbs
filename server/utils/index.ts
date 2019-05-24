import * as fs from 'fs-extra';
import * as path from 'path';
import * as express from 'express';
import * as moment from 'moment-timezone';
import * as Promise from 'promise';
import * as _ from 'lodash';
import { PARTNER_STATUS, PARTNERS, IPartner } from '../references';
import * as cache from '../utils/cache';
import config from '../config';
import * as url from 'url';

const fm = require('front-matter');
const sort = require('stable');

export function getPartnersOfType(
    types: Array<number> = [],
    randomize: boolean = false,
): Promise<Array<IPartner>> {
    return getPartners(randomize).then((partners) => {
        if (types.length == 0) {
            return partners;
        }

        return partners.reduce((ret: Array<IPartner>, partner: IPartner) => {
            const includesType = types.some((type: number) => {
                return partner.status.includes(type);
            });

            if (includesType) {
                ret.push(partner);
            }

            return ret;
        }, []);

        // return partners.reduce((ret: Array<IPartner>, partner: IPartner) => {
        //     types.forEach((type: number) => {
        //         if (partner.status.includes(type)) {
        //             ret.push(partner);
        //         }
        //     });

        //     return ret;
        // }, []);
    });
}

export function getPartners(randomize: boolean = false) {
    let partners = _.cloneDeep(PARTNERS);

    if (randomize) {
        return Promise.resolve(
            partners.sort(() => {
                return 0.5 - Math.random();
            }),
        );
    }

    return Promise.resolve(partners);
}

export function readTime(str: string = '') {
    let wordCount = str.trim().split(' ');
    let length = wordCount.length;
    let time = length / 200;
    let minutes = Math.floor(time);
    let seconds = Math.floor((time % 1) * 60);

    return minutes;
}

export function isEmptyString(value: any) {
    return (
        _.isNull(value) ||
        _.isUndefined(value) ||
        (_.isString(value) && _.isEmpty(value))
    );
}

export function isExpired(date: string): boolean;
export function isExpired(date: Date): boolean;
export function isExpired(date: moment.Moment): boolean;
export function isExpired(date: any): boolean {
    if (!_.isDate(date) && _.isEmpty(date)) {
        return true;
    }

    return moment.utc(date).isBefore();
}

export function toString(value: any): string {
    if (!_.isString(value)) {
        return value;
    }

    value = value.trim();

    if (_.isEmpty(value)) {
        return;
    }

    return value;
}

export function pluralize(str: string): string {
    let last = str.slice(-2);

    if (last[1] === 'y') {
        return str.slice(0, -1) + 'ies';
    } else if (/(?:.[s|z|x]|ch|sh)$/.test(last)) {
        return str + 'es';
    }

    return str + 's';
}

export function readDir(dir: string): Promise<Array<string>> {
    return new Promise((resolve, reject) => {
        if (!_.isString(dir)) {
            resolve([]);
            return;
        }

        fs.readdir(dir, (err, files) => {
            if (_.isObject(err)) {
                return reject(err);
            }

            resolve(files);
        });
    });
}

export function readFile(filename: string): Promise<string> {
    return new Promise((resolve, reject) => {
        if (!_.isString(filename)) {
            resolve();
            return;
        }

        fs.readFile(filename, (err, buffer) => {
            if (_.isObject(err)) {
                return reject(err);
            }

            resolve(buffer.toString());
        });
    });
}

export function fileExists(path: string): Promise<any> {
    return new Promise((resolve, reject) => {
        fs.lstat(path, (err: NodeJS.ErrnoException, stats: fs.Stats) => {
            if (err) {
                return reject(err);
            }

            if (stats.isFile) {
                resolve();
            }
        });
    });
}

export function wait(ms: number = 0, value?: any): Promise<void> {
    return new Promise<void>((resolve) => {
        setTimeout(resolve, ms, value);
    });
}

export function mapAsync<T, R>(
    collection: ArrayLike<T>,
    iterator: (value: T, key: any, obj: any) => Promise<R>,
): Promise<Array<R>> {
    return Promise.all<R>(<any>_.map(collection, iterator));
}

export function findBlogFiles(
    req: express.Request,
): Promise<Array<{ file: string; attributes: any }>> {
    let blogPath = path.resolve(config.root, 'server/blogs');

    let files: Array<{ file: string; attributes: any }> = cache.fetch(
        'blog-files',
    );

    let promise = Promise.resolve(files);

    if (!!files) {
        return promise;
    }

    let host = req.hostname;
    let protocol = req.protocol;

    if (config.ENV.prod) {
        host = 'innovatebham.com';
        protocol = 'https';
    }

    const baseUrl = url.format({
        protocol,
        host,
    });

    return readDir(blogPath)
        .then((files) => {
            return mapAsync(files, (file) => {
                if (file.indexOf('.md') === -1) {
                    return;
                }

                let filePath = path.resolve(blogPath, file);

                return readFile(filePath).then((contents) => {
                    const frontMatter = fm(contents);
                    const attributes = frontMatter.attributes;
                    const body = frontMatter.body;
                    const slug = file.replace('.md', '');

                    attributes.body = body;
                    attributes.url = baseUrl + '/blog/' + slug + '/';
                    attributes.fullImage = baseUrl + attributes.image;
                    attributes.slug = slug;
                    attributes.created = new Date(attributes.created);
                    attributes.readTime = readTime(body);

                    return { file: filePath, attributes };
                });
            }).then((newFiles) => {
                return _.map(
                    sort(_.filter(newFiles, _.isObject), (a, b) => {
                        return a.attributes.created <= b.attributes.created;
                    }),
                );
            });
        })
        .then((files: Array<{ file: string; attributes: any }>) => {
            files = _.filter(files, (file) => {
                return file.attributes.published !== false;
            });

            if (config.ENV.prod) {
                cache.store('blog-files', files);
            }

            return <any>files;
        })
        .catch((err) => {
            console.log(err);
            return [];
        });
}
