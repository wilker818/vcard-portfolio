<script setup lang="ts">
import { ref, onMounted } from "vue";
import { useI18n } from "vue-i18n";

import CardPortfolio from "~/pages/portfolio/components/card-portfolio.vue";
import ModalPortfolio from "~/pages/portfolio/components/modal-portfolio.vue";

import { Project } from "~/interfaces/projects";

const { t, locale } = useI18n({ useScope: "global" });
const { data: projects } = await useFetch("/api/projects");
const { data: categories } = await useFetch("/api/categories");

const projectList = ref<Project[]>([]);
if (projects.value) {
    projectList.value = projects.value;
}
const activeCategory = ref(0);

const activeItem = ref<Project | undefined>(undefined);
const activeModal = ref(false);
const activeOverlay = ref(false);

useHead({
    title: "Portfolio",
});

onMounted(() => {
    projects;
    categories;
});

function showItem(item: Project) {
    activeItem.value = item;
    activeModal.value = true;
    activeOverlay.value = true;
}

function closeItem() {
    activeItem.value = undefined;
    activeModal.value = false;
    activeOverlay.value = false;
}
</script>

<template>
    <article class="portfolio active" data-page="portfolio">
        <header>
            <h2 class="h2 article-title">
                {{ t("pages.portfolio.title") }}
            </h2>
        </header>

        <section class="projects">
            <div class="project-list">
                <tempalte v-for="project in projectList" :key="project.id">
                    <card-portfolio
                        :item="project"
                        :locale="locale"
                        :activeCategory="activeCategory"
                        @showItem="showItem"
                    />
                </tempalte>
            </div>

            <modal-portfolio
                v-if="activeModal"
                :item="activeItem"
                :locale="locale"
                :activeModal="activeModal"
                :activeOverlay="activeOverlay"
                @closeModal="closeItem"
            />
        </section>
    </article>
</template>
