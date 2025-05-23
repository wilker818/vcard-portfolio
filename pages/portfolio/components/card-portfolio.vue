<script setup lang="ts">
const props = defineProps({
    item: {
        type: Object,
        default: {},
    },
    locale: {
        type: String,
        default: "pt",
    },
    activeCategory: {
        type: Number,
        default: 0,
    },
});
const emit = defineEmits(["showItem"]);
</script>

<template>
    <div
        :class="{
            active:
                props.activeCategory === item.category.id ||
                props.activeCategory === 0,
        }"
        class="project-item"
    >
        <a class="cursor-pointer" @click="emit('showItem', item)">
            <figure class="project-img">
                <div class="project-item-icon-box">
                    <ion-icon name="eye-outline" />
                </div>
                <img :src="item.image" :alt="item.alt" />
            </figure>

            <h3 class="project-title">{{ item.title }}</h3>

            <p class="project-category">
                {{
                    props.locale === "en"
                        ? item.category.title?.en
                        : item.category.title?.pt
                }}
            </p>
        </a>
    </div>
</template>

<style scoped></style>
