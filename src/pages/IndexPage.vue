<template>
  <q-page class="row items-center justify-evenly q-pa-md">
    <post-list-item></post-list-item>
  </q-page>
</template>

<script setup lang="ts">
import PostListItem from 'components/PostListItem.vue';

defineOptions({
  name: 'IndexPage',
});
</script>
