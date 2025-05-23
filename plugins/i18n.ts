import { createI18n } from "vue-i18n";
import { useLocaleStore } from "~/composables/locale";
import { defineNuxtPlugin } from "nuxt/app";

import pt from "~/locales/pt.json";
import en from "~/locales/en.json";

export default defineNuxtPlugin(() => {
    const localeStore = useLocaleStore();

    const i18n = createI18n({
        legacy: false,
        globalInjection: true,
        locale: localeStore.getLocale || "pt",
        fallbackLocale: "pt",
        messages: {
            pt,
            en,
        },
    });

    return {
        provide: {
            i18n,
        },
    };
});
