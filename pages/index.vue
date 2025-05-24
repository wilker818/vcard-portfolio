<script setup lang="ts">
import {useI18n} from "vue-i18n";

import type {Skill} from "~/interfaces/skills";

const {t} = useI18n({useScope: "global"});
const {data: skillsList} = await useFetch<Skill[]>("/api/skills");

useHead({});
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
        </section>

        <section class="skill">
            <h3 class="h3 skills-title">
                {{ t("pages.resume.titleSkills") }}
            </h3>

            <div class="skills-list content-card">
                <div
                    v-for="(skill, i) in skillsList"
                    :key="i"
                    class="skills-item"
                    :title="t(skill.descriptionKey)"
                >
                    <img
                        :src="skill.icon"
                        :alt="skill.title"
                        width="100"
                        height="100"
                    />
                </div>
            </div>
        </section>
    </article>
</template>
