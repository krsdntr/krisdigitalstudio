import { defineMiddleware } from "astro:middleware";

export const onRequest = defineMiddleware((context, next) => {
    // Tangkap env vars dari runtime Cloudflare Pages
    // Di environment produksi Cloudflare Pages, context.locals.runtime.env berisi env variables
    const cfEnv = context.locals?.runtime?.env;

    if (cfEnv) {
        // Karena paket @keystatic/astro (dan @keystatic/core) membaca konfigurasi Github
        // dengan mengasumsikan keberadaan global process.env, 
        // kita perlu mem-bypass environment variables ke process.env secara dinamis.

        // Ensure process.env is defined (Astro usually polyfills this in dev, but safety first in prod runtime)
        if (typeof process === 'undefined') {
            globalThis.process = { env: {} };
        } else if (!process.env) {
            process.env = {};
        }

        const keysToInject = [
            'KEYSTATIC_GITHUB_CLIENT_ID',
            'KEYSTATIC_GITHUB_CLIENT_SECRET',
            'KEYSTATIC_SECRET',
            'PUBLIC_KEYSTATIC_GITHUB_APP_SLUG'
        ];

        keysToInject.forEach(key => {
            if (cfEnv[key]) {
                process.env[key] = cfEnv[key];
            }
        });
    }

    return next();
});
