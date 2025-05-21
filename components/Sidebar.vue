<script setup lang="ts">
import { ref, type Ref } from "vue";

const isOpen: Ref<boolean> = ref(false);

const socialMedia = ref([
    {
        label: "Email",
        icon: "mail-outline",
        name: "wilkerferreira818@gmail.com",
        link: "mailto:wilkerferreira818@gmail.com",
    },
    {
        label: "Github",
        icon: "logo-github",
        name: "wilker818",
        link: "https://github.com/wilker818",
        target: "_blank",
    },
    {
        label: "Linkedin",
        icon: "logo-linkedin",
        name: "Wilker Ferreira",
        link: "https://tr.linkedin.com/in/wilker-ferreira",
        target: "_blank",
    },
    {
        label: "Location",
        icon: "location-outline",
        name: "Ribeirão Preto, SP",
    },
]);
</script>

<template>
    <aside class="sidebar" :class="{ active: isOpen }">
        <div class="sidebar-info">
            <figure class="avatar-box">
                <img
                    src="/images/my-avatar.jpeg"
                    alt="Wilker Ferreira"
                    width="80"
                />
            </figure>

            <div class="info-content">
                <h1 class="name" title="Wilker Ferreira">Wilker Ferreira</h1>

                <p
                    class="title text-center xl:block flex items-center justify-center gap-1"
                >
                    <span class="xl:after:content-[''] after:content-[',']">
                        Software Engineer
                    </span>
                    <span>Front-end developer</span>
                </p>
            </div>

            <button class="info_more-btn" @click="isOpen = !isOpen">
                <span>Show Contacts</span>

                <ion-icon name="chevron-down" />
            </button>
        </div>

        <div class="sidebar-info_more">
            <div class="separator" />

            <ul class="contacts-list">
                <li
                    v-for="social in socialMedia"
                    :key="social.label"
                    class="contact-item"
                >
                    <div class="icon-box">
                        <ion-icon :name="social.icon" />
                    </div>

                    <div class="contact-info">
                        <p class="contact-title">{{ social.label }}</p>

                        <a
                            :href="social.link"
                            class="contact-link"
                            :target="social.target"
                        >
                            {{ social.name }}
                        </a>
                    </div>
                </li>
            </ul>

            <div class="separator" />
            <ul class="social-list">
                <LangSwitcher2 title="translate" />
            </ul>
        </div>
    </aside>
</template>
