<script setup lang="ts">
import { computed } from "vue";
import { useI18n } from "vue-i18n";

const { locale } = useI18n({ useScope: "global" });

const lang = computed(() => locale.value);

useHead({
  htmlAttrs: {
    lang: lang.value as string,
  },
  titleTemplate: (pageTitle) => {
    return pageTitle
      ? `${pageTitle} - Wilker Ferreira - Developer`
      : "Wilker Ferreira - Developer";
  },
  meta: [
    { charset: "utf-8" },
    { name: "viewport", content: "width=devide-width, initial-scale=1" },
    {
      hid: "keywords",
      name: "keywords",
      content:
        "developer, software enginner, front-end developer, wilker developer, wilker ferreira, wilker front-end, fron-end, desenvolvedor front-end",
    },
    {
      hid: "og:title",
      property: "og:title",
      content: "Wilker Ferreira - Developer",
    },
    {
      hid: "og:description",
      property: "og:description",
      content:
        "Descubra meu portfólio de desenvolvimento de sistemas, onde crio soluções funcionais e impactantes. Com experiência em diversas áreas, como desenvolvimento web e aplicações empresariais, ofereço soluções criativas para impulsionar seus projetos. Explore meu trabalho e dê vida às suas ideias com tecnologia.",
    },
    { hid: "og:image", property: "og:image", content: "/favicon.png" },
  ],
  link: [
    {
      rel: "icon",
      type: "image/png",
      href: "/favicon.png",
    },
    {
      rel: "preconnect",
      href: "https://fonts.googleapis.com",
    },
    {
      rel: "preconnect",
      href: "https://fonts.gstatic.com",
    },
    {
      rel: "stylesheet",
      href: "https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600&display=swap",
      crossorigin: "",
    },
  ],
  script: [
    {
      src: "https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js",
      type: "module",
    },
    {
      src: "https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js",
      nomodule: true,
    },
  ],
});
</script>

<template>
  <main class="relative">
    <Sidebar />
    <div class="main-content">
      <Navbar />
      <slot />
    </div>
    <CookieBar />
  </main>
</template>
