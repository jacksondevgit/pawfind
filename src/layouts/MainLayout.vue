<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-toolbar-title> {{ $t('APP.TITLE') }} </q-toolbar-title>

        <div>Quasar v{{ $q.version }}</div>
      </q-toolbar>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>
    <q-footer reveal class="q-mb-sm">
      <div id="sticky-nav" class="text-center bg-primary text-black q-pa-sm">
        <q-btn flat round dense icon="home" size="md" to="/" />
        <q-btn
          flat
          round
          dense
          icon="message"
          size="md"
          class="q-ml-md"
          to="/message"
        />
        <q-btn round dense outline icon="add" size="lg" class="q-mx-md" />
        <q-btn
          flat
          round
          dense
          icon="shopping_cart"
          size="md"
          class="q-mr-md"
          to="shop"
        />
        <q-btn flat round dense icon="account_circle" size="md" to="account" />
      </div>
    </q-footer>
  </q-layout>
</template>

<script setup lang="ts">
import { useUserStore } from 'src/stores/user-store';
import { computed, onMounted } from 'vue';
import { useRouter } from 'vue-router';

const UserStore = useUserStore();

const isAuthorized = computed(() => UserStore.isAuthorized);

onMounted(() => {
  if (!isAuthorized.value) {
    useRouter().replace('/login');
  }
});

defineOptions({
  name: 'MainLayout',
});
</script>
