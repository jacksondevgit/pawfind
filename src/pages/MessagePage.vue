<template>
  <q-page class="row justify-evenly q-pa-md">
    <div class="col-12" v-for="(message, index) in messages" :key="index">
      <q-card
        class="q-mb-md message-wrapper"
        @click="showActionDialog(`${message.user}`, MessageItem)"
      >
        <q-item class="q-py-lg">
          <q-item-section side>
            <q-avatar circle size="48px">
              <img src="https://cdn.quasar.dev/img/avatar.png" />
              <!-- <q-badge floating color="teal">new</q-badge> -->
            </q-avatar>
          </q-item-section>
          <q-item-section>
            <q-item-label>{{ message.user }}</q-item-label>
            <q-item-label caption>{{ message.preview }}</q-item-label>
          </q-item-section>
        </q-item>
      </q-card>
    </div>

    <action-dialog
      :show="toggleDialog"
      :title="toggleDialogTitle"
      @update:model-value="toggleDialog = false"
    >
      <component :is="toggleDialogContent"></component>
    </action-dialog>
  </q-page>
</template>

<script setup lang="ts">
import { ref, shallowRef } from 'vue';
import ActionDialog from 'src/components/ActionDialog.vue';
import MessageItem from 'src/components/MessageItem.vue';

const toggleDialog = ref(false);
const toggleDialogTitle = ref('');
const toggleDialogContent = shallowRef();

const messages = ref([
  {
    user: 'Chen',
    preview: 'Want to adopt',
  },
  {
    user: 'Andrew',
    preview: 'Pa adopt',
  },
  {
    user: 'Nerie',
    preview: 'What breed?',
  },
]);

const showActionDialog = (title: string, component: unknown) => {
  toggleDialogTitle.value = title;
  toggleDialogContent.value = component;
  toggleDialog.value = true;
};
</script>

<style scoped>
.message-wrapper {
  min-width: 400px;
}
</style>
