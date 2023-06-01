<script setup lang="ts">
import { type Ref, onBeforeMount, onMounted, ref } from "vue";
import { useI18n } from "vue-i18n";

import { useLocaleStore } from "./composables/locale";

const { locale } = useI18n({ useScope: "global" });
const cookieLocale = useLocaleStore();

locale.value = cookieLocale.getLocale || "pt";

const loadingPage: Ref<boolean> = ref();

onBeforeMount(() => {
  loadingPage.value = false;
});

onMounted(() => {
  setTimeout(() => {
    loadingPage.value = true;
  }, 1000);
});
</script>

<template>
  <!--  <LoadingPage v-show="!loadingPage" /> -->
  <!-- <NuxtLayout>
    <NuxtPage transition />
  </NuxtLayout> -->

  <NuxtWelcome />
</template>

<style>
.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
