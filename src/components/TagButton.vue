<template>
  <q-btn
    rounded
    color="black"
    size="sm"
    outline
    :label="props.label"
    class="tag-btn q-mr-sm"
  />
</template>

<script setup lang="ts">
const props = defineProps<{ label: string }>();
</script>

<style scoped></style>
