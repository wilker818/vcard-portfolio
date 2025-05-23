<script setup lang="ts">
import {useI18n} from 'vue-i18n'
import {computed} from 'vue'
import {useHead} from '#imports'

const {t, locale, getLocaleMessage} = useI18n({useScope: 'global'})


const educations = computed(() => {
    const msgs = getLocaleMessage(locale.value)
    return msgs?.pages?.resume?.educations || []
})

const experiences = computed(() => {
    const msgs = getLocaleMessage(locale.value)
    return msgs?.pages?.resume?.experiences || []
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
                <li v-for="(edu, i) in educations" :key="i" class="timeline-item">
                    <h4 class="h4 timeline-item-title">{{ edu.title?.body.static }}</h4>
                    <span>{{ edu.date.static?.body.static }}</span>
                    <p class="timeline-text">
                        {{ edu.subTitle?.body.static }}<br/>
                        {{ edu.description?.body.static }}
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
                <li v-for="(exp, i) in experiences" :key="i" class="timeline-item">
                    <h4 class="h4 timeline-item-title">{{ exp.title?.body.static }}</h4>
                    <span>{{ exp.companyAndDate?.body.static }}</span>
                    <p class="timeline-text">{{ exp.description?.body.static }}</p>
                </li>
            </ol>
        </section>
    </article>
</template>


