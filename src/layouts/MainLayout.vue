<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-toolbar-title> {{ $t('APP.TITLE') }} </q-toolbar-title>

        <div>Quasar v{{ $q.version }}</div>
      </q-toolbar>
      <!-- <q-toolbar>
        <div style="flex: 1 1 0%; display: flex">
          <q-btn square flat color="white" icon="west" />
        </div>
        <div
          style="
            flex: 1 1 0%;
            text-align: right;
            overflow: auto;
            text-align: center;
          "
        >
          <h5 class="q-ma-none">{{ pageTitle }}</h5>
        </div>
        <div
          style="
            flex: 1 1 0%;
            text-align: right;
            overflow: auto;
            background-color: blue;
            text-center
          "
        ></div>
      </q-toolbar> -->
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
        <q-btn
          round
          dense
          outline
          icon="add"
          size="lg"
          class="q-mx-md"
          @click="showActionDialog(CreatePost)"
        />
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
    <action-dialog
      :show="toggleDialog"
      @update:model-value="toggleDialog = false"
    >
      <component :is="toggleDialogContent"></component>
    </action-dialog>
  </q-layout>
</template>

<script setup lang="ts">
import { useUserStore } from 'src/stores/user-store';
import { computed, onMounted, ref, shallowRef } from 'vue';
import { useRouter } from 'vue-router';

import ActionDialog from 'src/components/ActionDialog.vue';
import CreatePost from 'src/pages/CreatePost.vue';

// import ReadMessage from 'src/pages/ReadMessage.vue';

const UserStore = useUserStore();
const toggleDialog = ref(false);
const toggleDialogContent = shallowRef();

const isAuthorized = computed(() => UserStore.isAuthorized);

const showActionDialog = (component: unknown) => {
  toggleDialogContent.value = component;
  toggleDialog.value = true;
};

onMounted(() => {
  if (!isAuthorized.value) {
    useRouter().replace('/login');
  }
});

defineOptions({
  name: 'MainLayout',
});
</script>
