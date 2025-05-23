<script setup lang="ts">
import { computed } from "vue";
import { useI18n } from "vue-i18n";

const { t, tm } = useI18n({ useScope: "global" });

const experiences = computed(() => tm("pages.resume.experiences") as any[]);
const educations = computed(() => tm("pages.resume.educations") as any[]);

useHead({
    title: "Resume",
});
</script>

<template>
    <article class="resume active" data-page="resume">
        <header>
            <h2 class="h2 article-title">
                {{ t("pages.resume.title") }}
            </h2>
        </header>

        <section class="timeline">
            <div class="title-wrapper">
                <div class="icon-box">
                    <ion-icon name="book-outline" />
                </div>

                <h3 class="h3">
                    {{ t("pages.resume.titleEducation") }}
                </h3>
            </div>

            <ol class="timeline-list">
                <li
                    v-for="(edu, i) in educations"
                    :key="i"
                    class="timeline-item"
                >
                    <h4 class="h4 timeline-item-title">
                        {{ edu.title?.source }}
                    </h4>

                    <span>{{ edu.date?.source }}</span>

                    <p class="timeline-text">
                        {{ edu.subTitle?.source }}
                        <br />
                        {{ edu.description?.source }}
                    </p>
                </li>
            </ol>
        </section>

        <section class="timeline">
            <div class="title-wrapper">
                <div class="icon-box">
                    <ion-icon name="book-outline" />
                </div>

                <h3 class="h3">
                    {{ t("pages.resume.titleExperience") }}
                </h3>
            </div>

            <ol class="timeline-list">
                <li
                    v-for="(exp, i) in experiences"
                    :key="i"
                    class="timeline-item"
                >
                    <h4 class="h4 timeline-item-title">
                        {{ exp.title?.source }}
                    </h4>
                    <span>{{ exp.companyAndDate?.source }}</span>
                    <p class="timeline-text">
                        {{ exp.description?.source }}
                    </p>
                </li>
            </ol>
        </section>
    </article>
</template>
