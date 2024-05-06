<template>
  <q-layout view="lHh Lpr lFf" class="bg-primary">
    <q-header>
      <q-toolbar class="row q-pt-md">
        <div class="col-3"></div>
        <div class="col-5">
          <FormInput v-model="search" label="Search"></FormInput>
        </div>
        <div class="col-1">
          <q-btn
            icon="notifications"
            @click="showActionDialog('Notifications', AppNotifications)"
          ></q-btn>
        </div>
        <div class="col-3"></div>
      </q-toolbar>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>
    <q-footer class="q-mb-sm">
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
          @click="showActionDialog('Create Post', CreatePost)"
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
      :title="toggleDialogTitle"
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

import FormInput from 'src/components/FormInput.vue';
import ActionDialog from 'src/components/ActionDialog.vue';
import CreatePost from 'src/pages/CreatePost.vue';
import AppNotifications from 'src/pages/AppNotifications.vue';

// import ReadMessage from 'src/pages/ReadMessage.vue';

const UserStore = useUserStore();
const toggleDialog = ref(false);
const toggleDialogTitle = ref('');
const toggleDialogContent = shallowRef();
const search = ref('');

const isAuthorized = computed(() => UserStore.isAuthorized);

const showActionDialog = (title: string, component: unknown) => {
  toggleDialogTitle.value = title;
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
