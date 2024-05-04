<template>
  <q-input
    :model-value="value"
    outlined
    filled
    v-bind="{ ...attrs }"
    class="q-mb-md"
  ></q-input>
</template>

<script setup lang="ts">
import { ref, useAttrs } from 'vue';

const attrs = useAttrs();
const value = ref<string | number>();
</script>

<style scoped></style>
