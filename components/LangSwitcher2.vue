<script setup lang="ts">
import { onMounted } from "vue";
import { useI18n } from "vue-i18n";

import { useLocaleStore } from "../composables/locale";

const { locale } = useI18n({ useScope: "global" });

const cookieLocale = useLocaleStore();

onMounted(() => {
  useLocaleStore();
});

function changeLang() {
  if (locale.value === "pt") {
    cookieLocale.setLocale("en");
    locale.value = "en";
  } else {
    cookieLocale.setLocale("pt");
    locale.value = "pt";
  }
}
</script>

<template>
  <div class="cursor-pointer transition-all fade" @click="changeLang()">
    <img :src="`/flags/${locale}.png`" class="h-6" />
  </div>
</template>

<style scoped>
.p-dropdown {
  border: none !important;
}
</style>
