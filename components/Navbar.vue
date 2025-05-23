<script setup lang="ts">
import {useI18n} from "vue-i18n";

const {t} = useI18n({useScope: "global"});
</script>

<template>
    <nav class="navbar">
        <ul class="navbar-list">
            <li class="navbar-item">
                <NuxtLink to="/" class="navbar-link">
                    {{ t("pageTitles.about") }}
                </NuxtLink>
            </li>

            <li class="navbar-item">
                <NuxtLink to="/resume" class="navbar-link">
                    {{ t("pageTitles.resume") }}
                </NuxtLink>
            </li>

            <li class="navbar-item">
                <NuxtLink to="/portfolio" class="navbar-link">
                    {{ t("pageTitles.portfolio") }}
                </NuxtLink>
            </li>

            <li class="navbar-item">
                <a
                    href="https://www.linkedin.com/in/wilker-ferreira/"
                    target="_blank"
                    class="navbar-link"
                >
                    {{ t("pageTitles.contact") }}
                </a>
            </li>
        </ul>
    </nav>
</template>

<style scoped>
a.router-link-active {
    font-weight: bold;
}

a.router-link-exact-active {
    color: var(--vegas-gold);
}
</style>
