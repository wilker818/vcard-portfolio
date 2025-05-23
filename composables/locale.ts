import { computed, ref } from "vue";
import { defineStore } from "pinia";
import { useCookie } from "nuxt/app";

export const useLocaleStore = defineStore("localeStore", () => {
    const locale = ref(useCookie("locale"));

    function setLocale(val: string) {
        return (locale.value = val);
    }
    const getLocale = computed(() => {
        return locale.value;
    });

    return { locale, setLocale, getLocale };
});
