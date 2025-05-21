<script setup lang="ts">
import { onMounted } from "vue";
import Dropdown from "primevue/dropdown";

import { useLocaleStore } from "~/composables/locale";

const cookieLocale = useLocaleStore();

onMounted(() => {
    const elements = document.getElementsByClassName("p-dropdown-trigger");
    while (elements.length > 0) {
        const parent = elements[0]?.parentNode;
        if (parent) {
            parent.removeChild(elements[0]);
        }
    }
    useLocaleStore();
});

function changeLocation(ev: any) {
    cookieLocale.setLocale(ev.value);
    localStorage.setItem("locale", ev.value);
}
</script>

<template>
    <Dropdown
        v-model="$i18n.locale"
        class="bg-gray-400 text-gray-800 dark:bg-gray-800 dark:text-gray-400"
        input-class="border-0"
        :options="$i18n.availableLocales"
        @change="changeLocation"
    >
        <template #value="slotProps">
            <div>
                <img
                    :alt="slotProps.value"
                    :src="`/flags/${slotProps.value}.png`"
                    class="h-6"
                />
            </div>
        </template>
        <template #option="slotProps">
            <div>
                <img
                    :alt="slotProps.option"
                    :src="`/flags/${slotProps.option}.png`"
                    class="h-6"
                />
            </div>
        </template>
    </Dropdown>
</template>

<style scoped>
.p-dropdown {
    border: none !important;
}
</style>
