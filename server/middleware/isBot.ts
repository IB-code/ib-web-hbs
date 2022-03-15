import * as express from 'express';

export default (req: express.Request, res: express.Response, next: express.NextFunction) => {
    const knownBotsToPattern = new Map([
        ['Headless Chrome', /HeadlessChrome/],
        ['Wget', /[wW]get/],
        ['Python urllib', /Python\-urllib/],
        ['PHP crawl', /phpcrawl/],
        ['PhantomJS', /PhantomJS/]
    ]);

    // Detect if an incoming request belongs to a bot using its user agent
    const isKnownBotUserAgent = (userAgent: string) => {
        for (const [knownBot, pattern] of knownBotsToPattern.entries()) {
            if (userAgent.match(pattern)) {
                return {
                    isBot: true,
                    // In case the request comes from a bot,
                    // we also returns the name of the bot
                    nameBot: knownBot
                }
            }
        }

        return {
            isBot: false
        }
    }

    // We enrich the incoming request object (req)
    // with information regarding bot detection
    req.botInfo = isKnownBotUserAgent(req.header('User-Agent'));

    if (req.botInfo.isBot) {
        res.sendStatus(403);
    } else {
        next();
    }
}