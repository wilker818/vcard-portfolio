import { defineStore } from "pinia";
import { computed, ref } from "vue";
import { inject } from "vue";
import { type CookieRef, useCookie } from "nuxt/app";

interface Cookies {
  set(key: string, value: boolean, options: unknown): void;
}

export const useCookieStore = defineStore("cookieStore", () => {
  const cookie: CookieRef<boolean> = ref(useCookie("accept-cookie"));
  const $cookies = inject<Cookies>("$cookies");

  function setCookie() {
    $cookies.set("accept-cookie", true, { expires: "30d" });
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
