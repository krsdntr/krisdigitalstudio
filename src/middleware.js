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

        console.log(`[Astro Middleware] Intercepted Request to: ${context.url.pathname}`);
        console.log(`[Astro Middleware] Context Locals Runtime Env Extracted.`);

        keysToInject.forEach(key => {
            if (cfEnv[key]) {
                process.env[key] = cfEnv[key];
                // Hide actual secret but log its length to verify it's loaded
                console.log(`[Astro Middleware] ✅ Injected ${key} | Length: ${cfEnv[key].length}`);
            } else {
                console.log(`[Astro Middleware] ❌ MISSING ENV: ${key} is NOT found in Cloudflare runtime vars!`);
            }
        });

        // Log specifically if we are on the oauth route to diagnose Keystatic auth
        if (context.url.pathname.includes('/api/keystatic/github/oauth')) {
            console.log(`[Astro Middleware] 🔑 OAuth Route Triggered. Verifying process.env secrets...`);
            console.log(`[Astro Middleware] process.env.KEYSTATIC_GITHUB_CLIENT_SECRET exists:`, !!process.env.KEYSTATIC_GITHUB_CLIENT_SECRET);
        }
    } else {
        console.log(`[Astro Middleware] ⚠️ Warning: context.locals.runtime.env is UNDEFINED. Are you local or Cloudflare is missing bindings?`);
    }

    return next();
});
