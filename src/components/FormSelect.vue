<template>
  <q-select filled :model-value="value" map-options emit-value />
</template>

<script setup lang="ts">
import { ref } from 'vue';

const value = ref<[]>();
</script>

<style scoped></style>
