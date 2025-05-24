<script setup lang="ts">
import {computed} from 'vue'
import {useI18n} from 'vue-i18n'
import {useHead} from '#imports'

import type {EduacationLocale, Eduacation} from "~/interfaces/educations";
import type {ExperienceLocale, Experience} from "~/interfaces/experiences";

const {t, locale} = useI18n({useScope: 'global'})
const {data: educations} = await useFetch<EduacationLocale>("/api/educations");
const {data: experiences} = await useFetch<ExperienceLocale>("/api/experiences");

const educationsList = computed(() => {
    if (!educations.value) return [] as Eduacation[]

    return educations.value[locale.value] as Eduacation []
})

const experiencesList = computed(() => {
    if (!experiences.value) return [] as Experience[]

    return experiences.value[locale.value] as Experience[]
})

useHead({
    title: "Resume",
});
</script>

<template>
    <article class="resume active" data-page="resume">
        <header>
            <h2 class="h2 article-title">{{ t('pages.resume.title') }}</h2>
        </header>

        <section class="timeline">
            <div class="title-wrapper">
                <div class="icon-box">
                    <ion-icon name="book-outline"/>
                </div>
                <h3 class="h3">{{ t('pages.resume.titleEducation') }}</h3>
            </div>

            <ol class="timeline-list">
                <li v-for="(edu ) in educationsList" :key="edu.id" class="timeline-item">
                    <h4 class="h4 timeline-item-title">{{ edu.title }}</h4>
                    <span>{{ edu.date }}</span>
                    <p class="timeline-text">
                        {{ edu.subTitle }}
                        <br/>
                        {{ edu.description }}
                    </p>
                </li>
            </ol>
        </section>

        <section class="timeline">
            <div class="title-wrapper">
                <div class="icon-box">
                    <ion-icon name="book-outline"/>
                </div>
                <h3 class="h3">{{ t('pages.resume.titleExperience') }}</h3>
            </div>

            <ol class="timeline-list">
                <li v-for="(exp) in experiencesList" :key="exp.id" class="timeline-item">
                    <h4 class="h4 timeline-item-title">{{ exp.title }}</h4>
                    <span>{{ exp.companyAndDate }}</span>
                    <p class="timeline-text">{{ exp.description }}</p>
                </li>
            </ol>
        </section>
    </article>
</template>


