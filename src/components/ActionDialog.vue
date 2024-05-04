<template>
  <q-dialog
    v-model="toggleDialog"
    persistent
    :maximized="true"
    transition-show="slide-left"
    transition-hide="slide-right"
  >
    <q-card class="bg-primary text-white">
      <q-bar class="q-py-lg">
        <q-btn dense flat square icon="west" v-close-popup size="lg"></q-btn>
        <b class="q-ml-lg">{{ props.title }}</b>
      </q-bar>

      <q-card-section>
        <q-page-container
          id="dialog-page-container"
          class="row items-center justify-evenly q-pa-md q-mt-lg text-black"
        >
          <slot></slot>
        </q-page-container>
      </q-card-section>
    </q-card>
  </q-dialog>
</template>

<script setup lang="ts">
import { computed } from 'vue';
const props = defineProps<{
  show: boolean;
  title?: string;
}>();

const toggleDialog = computed(() => props.show);
</script>

<style scoped>
:deep(#dialog-page-container.q-page-container) {
  padding-top: 0 !important;
  padding-bottom: 0 !important;
}
</style>
