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
        <div class="text-h6">Alert</div>
      </q-card-section>

      <q-card-section class="q-pt-none">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum
        repellendus sit voluptate voluptas eveniet porro. Rerum blanditiis
        perferendis totam, ea at omnis vel numquam exercitationem aut, natus
        minima, porro labore.
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

<style scoped></style>
