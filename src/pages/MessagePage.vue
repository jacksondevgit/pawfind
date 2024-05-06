<template>
  <q-page class="row justify-evenly q-pa-md">
    <div class="row">
      <div
        class="col-12"
        v-for="(notification, index) in notifications"
        :key="index"
      >
        <q-card class="q-mb-md">
          <q-card-section>
            <q-btn
              round
              flat
              :color="iconColor(notification.icon)"
              :icon="notification.icon"
              class="q-mr-md"
            />
            {{ notification.content }}
          </q-card-section>
        </q-card>
      </div>
    </div>
  </q-page>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const notifications = ref([
  {
    icon: 'mood',
    type: 'ask',
    content:
      'Chen has a question. Can you share your insight? Join the conversation now!',
  },
  {
    icon: 'info',
    type: 'inform',
    content: 'Chen shared an information. Check it now!',
  },
  {
    icon: 'pets',
    type: 'adopt',
    content:
      "Looking to adopt? Check out the newest fury friend up for adoption. They might just be the companion you've been searching for!",
  },
  {
    icon: 'campaign',
    type: 'announcement',
    content:
      "Attention: An important update has been shared by the authorities. Don't miss our the latest information. View details now",
  },
  {
    icon: 'error',
    type: 'rescue',
    content:
      'Rescue Alert: A dog in your area needs immediate help! Your quick response could save a life. Act now!',
  },
]);

const iconColor = (icon: string) => {
  switch (icon) {
    case 'mood':
      return 'yellow';
    case 'info':
      return 'blue';
    case 'pets':
      return 'orange';
    case 'campaign':
      return 'grey';
    case 'error':
      return 'red';
  }
};
</script>

<style scoped></style>
