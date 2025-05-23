import {defineStore} from "pinia";
import {computed, ref} from "vue";
import {useCookie} from "nuxt/app";

export const useCookieStore = defineStore("cookieStore", () => {

    const cookie = useCookie<boolean>("accept-cookie", {
        maxAge: 60 * 60 * 24 * 30,
    });

    function setCookie() {

        return (cookie.value = true);
    }

    const getCookie = computed(() => {
        return cookie.value;
    });

    return {
        cookie,
        setCookie,
        getCookie,
    };
});
