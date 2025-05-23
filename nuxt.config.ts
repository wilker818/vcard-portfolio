// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    compatibilityDate: "2025-05-15",
    devtools: {enabled: true},
    modules: [
        "@nuxt/content",
        "@nuxt/eslint",
        "@nuxt/image",
        '@pinia/nuxt',
        "@nuxtjs/i18n",
        '@nuxtjs/tailwindcss',
        '@primevue/nuxt-module',
        "@vueuse/nuxt"
    ],
    app: {
        head: {
            script: [
                {
                    src: 'https://unpkg.com/ionicons@7.2.0/dist/ionicons/ionicons.esm.js',
                    type: 'module'
                },
                {
                    src: 'https://unpkg.com/ionicons@7.2.0/dist/ionicons/ionicons.js',
                    nomodule: true
                }
            ]
        }
    },
    vue: {
        compilerOptions: {
            isCustomElement: (tag) => tag.startsWith('ion-') // 👈 isso precisa estar fora de `app`
        }
    },
    tailwindcss: {
        cssPath: "~/assets/css/tailwind.css",
        configPath: "tailwind.config.js",
        exposeConfig: true,
        viewer: true,
    },
    css: [
        "primeicons/primeicons.css",
        "/assets/css/style.css",
    ],
    i18n: {
        lazy: false,
        locales: [
            {code: 'pt', file: 'pt.json'},
            {code: 'en', file: 'en.json'}
        ],
        defaultLocale: 'pt',
    },
    plugins: [{src: "~/plugins/vercel.ts", mode: "client"}],
});
