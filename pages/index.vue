<script setup lang="ts">
import { onMounted } from "vue";
import { useI18n } from "vue-i18n";

import { useLocaleStore } from "~/composables/locale";

const { t } = useI18n({ useScope: "global" });

useHead({});

onMounted(() => {
    useLocaleStore();
});
</script>

<template>
    <article class="about active" data-page="about">
        <header>
            <h2 class="h2 article-title">
                {{ t("pages.index.title") }}
            </h2>
        </header>

        <section class="about-text">
            <p>
                {{ t("pages.index.textAbout") }}
            </p>

            <p>
                {{ t("pages.index.textAbout2") }}
            </p>
            <p>
                {{ t("pages.index.textAbout3") }}
            </p>
            <p>
                {{ t("pages.index.textAbout4") }}
            </p>
            <p>
                {{ t("pages.index.textAbout5") }}
            </p>
            <p>
                {{ t("pages.index.textAbout6") }}
            </p>
            <p>
                {{ t("pages.index.textAbout7") }}
            </p>
        </section>
    </article>
</template>
