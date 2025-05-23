<script setup lang="ts">
import { computed } from "vue";

const props = defineProps({
    item: {
        type: Object,
        default: {},
    },
    locale: {
        type: String,
        default: "pt",
    },
    activeModal: {
        type: Boolean,
        default: false,
    },
    activeOverlay: {
        type: Boolean,
        default: false,
    },
});
const emit = defineEmits(["closeModal"]);

const formattedLocale = computed(() => {
    if (props.locale === "en") {
        return "en-US";
    }
    return "pt-BR";
});

const formattedDate = computed(() => {
    return new Intl.DateTimeFormat(formattedLocale.value, {
        day: "2-digit",
        month: "long",
        year: "numeric",
    }).format(new Date(props.item?.date));
});
</script>
<template>
    <div class="modal-container" :class="{ active: props.activeModal }">
        <div
            v-show="props.activeModal"
            class="overlay"
            :class="{ active: activeOverlay }"
        />

        <section class="testimonials-modal block">
            <button class="modal-close-btn" @click="emit('closeModal')">
                <ion-icon name="close-outline" />
            </button>

            <div>
                <figure>
                    <img
                        :src="props.item?.image"
                        :alt="props.item?.alt"
                        class="rounded-lg"
                    />
                </figure>
            </div>

            <div class="modal-content space-y-3 mt-4">
                <h4 class="h3 modal-title">
                    {{ props.item?.title }}
                </h4>

                <small
                    class="flex items-center justify-start gap-2 text-gray-500"
                >
                    <span>{{ formattedDate }}</span>
                    |
                    <span>
                        {{
                            props.locale === "en"
                                ? props.item?.category?.title?.en
                                : props.item?.category?.title?.pt
                        }}
                    </span>
                    |
                    <a
                        v-if="props.item?.linkToProject"
                        :href="props.item?.linkToProject"
                        target="_blank"
                    >
                        View Project
                    </a>
                </small>

                <p
                    class="text-justify"
                    v-html="
                        props.locale === 'en'
                            ? props.item?.content?.en
                            : props.item?.content?.pt
                    "
                />
            </div>
        </section>
    </div>
</template>
