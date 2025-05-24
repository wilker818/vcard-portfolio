<script setup lang="ts">
import {type Ref, onBeforeMount, onMounted, ref} from "vue";

const loadingPage: Ref<boolean | undefined> = ref();

onBeforeMount(() => {
    loadingPage.value = false;
});

onMounted(() => {
    setTimeout(() => {
        loadingPage.value = true;
    }, 1000);
});
</script>

<template>
    <LoadingPage v-show="!loadingPage"/>
    <NuxtLayout>
        <NuxtPage transition/>
    </NuxtLayout>
</template>

<style>
.v-enter-active,
.v-leave-active {
    transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
    opacity: 0;
}
</style>
