<script setup lang="ts">
import {useI18n} from "vue-i18n";

const {locale, setLocale} = useI18n({useScope: "global"});


function changeLang() {
    if (locale.value !== "pt") {
        setLocale("pt");
        return
    }

    setLocale("en");
}
</script>

<template>
    <div class="cursor-pointer transition-all fade" @click="changeLang()">
        <img :src="`/flags/${locale}.png`" :alt="locale" class="h-6">
    </div>
</template>

<style scoped>
.p-dropdown {
    border: none !important;
}
</style>
