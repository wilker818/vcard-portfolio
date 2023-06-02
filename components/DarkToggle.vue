<script setup lang="ts">
import { computed } from "vue";

const color = useColorMode();

function toggleDark() {
  color.preference = color.value === "dark" ? "light" : "dark";
}
const themeColor = computed(() => {
  return color.value;
});
</script>

<template>
  <button
    :icon="themeColor === 'dark' ? 'pi pi-sun' : 'pi pi-moon'"
    @click="toggleDark"
  >
    teste
  </button>
</template>
