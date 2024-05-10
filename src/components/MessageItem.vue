<template>
  <div style="width: 100%">
    <q-chat-message
      name="Jane"
      avatar="https://cdn.quasar.dev/img/avatar2.jpg"
      :text="['hey, Can I ask something?']"
    />
    <q-chat-message
      name="me"
      avatar="https://cdn.quasar.dev/img/avatar1.jpg"
      :text="['hey, how are you?']"
      sent
    />
    <q-chat-message
      name="Jane"
      avatar="https://cdn.quasar.dev/img/avatar2.jpg"
      :text="['doing fine, how r you?']"
    />
    <q-chat-message
      v-for="(chat, index) in chats"
      :key="index"
      :name="chat.sent ? `me` : 'Jane'"
      :avatar="`https://cdn.quasar.dev/img/${
        chat.sent ? 'avatar1' : 'avatar2'
      }.jpg`"
      :text="[`${chat.message}`]"
      :sent="chat.sent"
    />
  </div>
  <div style="width: 100%" class="row q-mt-md">
    <div class="col-11">
      <form-input label="Type your message..." v-model="chat"></form-input>
    </div>
    <div class="col-1">
      <q-btn
        square
        color="secondary"
        icon="send"
        style="height: 56px"
        flat
        @click="sendChat"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import FormInput from './FormInput.vue';

const chat = ref<string>();
const chats = ref<Array<{ message: string; sent: boolean }>>([]);

const sendChat = () => {
  if (chat.value) {
    chats.value?.push({ message: chat.value, sent: true });
    chats.value?.push({
      message: 'Sorry, I have some unfinished tasks yet',
      sent: false,
    });

    chat.value = '';
  }
};
</script>

<style scoped></style>
