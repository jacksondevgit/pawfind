<template>
  <div class="row">
    <div class="col-12">
      <q-separator></q-separator>
      <div v-if="posts.length == 0">No post available</div>
      <div
        class="post-item-wrapper"
        v-for="(post, index) in posts"
        :key="index"
        v-else
      >
        <q-item class="q-px-none q-py-lg">
          <q-item-section side>
            <q-avatar circle size="48px">
              <img src="https://cdn.quasar.dev/img/avatar.png" />
              <!-- <q-badge floating color="teal">new</q-badge> -->
            </q-avatar>
          </q-item-section>
          <q-item-section>
            <q-item-label>{{ post.user.fullname }}</q-item-label>
            <q-item-label caption
              ><q-btn
                rounded
                dense
                color="primary"
                size="xs"
                :label="tag"
                class="q-px-lg q-mr-sm"
                v-for="(tag, indexTag) in post.tags"
                :key="indexTag"
            /></q-item-label>
          </q-item-section>
        </q-item>

        <q-card class="my-card q-mb-lg" flat bordered>
          <img :src="post.photo" v-if="post.photo" />

          <q-card-actions align="right">
            <q-btn flat round color="red" icon="favorite" />
            <q-btn flat round color="teal" icon="bookmark" />
            <q-btn flat round color="primary" icon="share" />
          </q-card-actions>
        </q-card>
      </div>
      <q-separator></q-separator>
    </div>
  </div>
</template>

<script setup lang="ts">
import { usePostStore } from 'src/stores/post-store';
import { computed } from 'vue';

const PostStore = usePostStore();

const posts = computed(() => PostStore.posts);
</script>

<style scoped></style>
