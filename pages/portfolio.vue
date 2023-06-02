<script setup lang="ts">
import { ref, onMounted } from "vue";
import { useI18n, Locale } from "vue-i18n";
import { CategoryLocalesTitle } from "~/interfaces/categories";

import { Project } from "~/interfaces/projects";

const { t } = useI18n({ useScope: "global" });
const { data: projects } = await useFetch("/api/projects");
const { data: categories } = await useFetch("/api/categories");

const locale = ref<Locale>("");

const projectList = ref<Project[]>([]);
if (projects.value) {
  projectList.value = projects.value;
}
const activeCategory = ref(0);
const filterMenu = ref(false);
const activeCategoryName = ref<CategoryLocalesTitle | string>("");

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

function changeFilter(id: number) {
  activeCategory.value = id;
  if (id !== 0) {
    const category = categories.value?.find((item) => item.id === id);
    if (category) {
      activeCategoryName.value = category.title;
    }
  } else {
    activeCategoryName.value = "";
  }
  filterMenu.value = !filterMenu.value;
}

function showItem(id: number) {
  activeItem.value = projects.value?.find((item) => item.id === id);
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
      <ul class="filter-list">
        <li class="filter-item">
          <button
            :class="{ active: activeCategory === 0 }"
            @click="changeFilter(0)"
          >
            {{ t("pages.portfolio.buttonAll") }}
          </button>
        </li>

        <li
          v-for="category in categories"
          :key="category.id"
          class="filter-item"
          @click="changeFilter(category.id)"
        >
          <button :class="{ active: activeCategory === category.id }">
            {{ locale === "en" ? category.title?.en : category.title?.pt }}
          </button>
        </li>
      </ul>

      <div class="filter-select-box">
        <button
          :class="{ active: filterMenu }"
          class="filter-select"
          @click="filterMenu = !filterMenu"
        >
          <div class="select-value">
            {{
              activeCategory !== 0
                ? locale === "en"
                  ? typeof activeCategoryName === "object" &&
                    activeCategoryName.en
                  : typeof activeCategoryName === "object" &&
                    activeCategoryName.pt
                : "Select Category"
            }}
          </div>

          <div class="select-icon">
            <ion-icon name="chevron-down" />
          </div>
        </button>

        <ul class="select-list">
          <li class="select-item">
            <button @click="changeFilter(0)">All</button>
          </li>

          <li
            v-for="category in categories"
            :key="category.id"
            class="select-item"
          >
            <button @click="changeFilter(category.id)">
              {{ locale === "en" ? category.title?.en : category.title?.pt }}
            </button>
          </li>
        </ul>
      </div>

      <ul class="project-list">
        <li
          v-for="project in projectList"
          :key="project.id"
          :class="{
            active:
              activeCategory === project.category.id || activeCategory === 0,
          }"
          class="project-item"
        >
          <a class="cursor-pointer" @click="showItem(project.id)">
            <figure class="project-img">
              <div class="project-item-icon-box">
                <ion-icon name="eye-outline" />
              </div>
              <img :src="project.image" :alt="project.title" />
            </figure>

            <h3 class="project-title">{{ project.title }}</h3>

            <p class="project-category">
              {{
                locale === "en"
                  ? project.category.title?.en
                  : project.category.title?.pt
              }}
            </p>
          </a>
        </li>
      </ul>

      <div class="modal-container" :class="{ active: activeModal }">
        <div
          v-show="activeModal"
          class="overlay"
          :class="{ active: activeOverlay }"
        />

        <section class="testimonials-modal block">
          <button class="modal-close-btn" @click="closeItem">
            <ion-icon name="close-outline" />
          </button>

          <div>
            <figure>
              <img
                :src="activeItem?.image"
                class="rounded-lg"
                :alt="activeItem?.title"
              />
            </figure>
          </div>

          <div class="modal-content space-y-3 mt-4">
            <h4 class="h3 modal-title">
              {{ activeItem?.title }}
            </h4>

            <small class="flex items-center justify-start gap-2 text-gray-500">
              <span>20 May, 2023</span> |
              <span>{{
                locale === "en"
                  ? activeItem?.category?.title?.en
                  : activeItem?.category?.title?.pt
              }}</span>
              |
              <a :href="activeItem?.linkToProject" target="_blank"
                >View Project</a
              >
            </small>

            <p
              class="text-justify"
              v-html="
                locale === 'en'
                  ? activeItem?.content?.en
                  : activeItem?.content?.pt
              "
            />
          </div>
        </section>
      </div>
    </section>
  </article>
</template>
