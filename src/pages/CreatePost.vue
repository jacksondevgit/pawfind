<template>
  <q-form ref="createPostForm" class="col-12" @submit.prevent="createPost">
    <div class="row">
      <div class="col-12 bg-green q-mb-lg" v-if="isPostCreated">
        <p class="q-ma-none q-pa-lg">Post created successfully!</p>
      </div>
      <div class="col-12 q-mb-md">
        <FormInput
          name="title"
          label="Title"
          type="text"
          v-model="title"
          required
        ></FormInput>
      </div>
      <div class="col-12 q-mb-md">
        <FormInput
          name="description"
          label="Description"
          type="textarea"
          v-model="description"
          required
        ></FormInput>
      </div>
      <div class="col-12">
        <p>Tags:</p>
      </div>
      <div class="col-12">
        <tag-button
          label="Ask"
          :outline="!tagsMap.ask"
          @click="tagsMap.ask = !tagsMap.ask"
        />
        <tag-button
          label="Inform"
          :outline="!tagsMap.inform"
          @click="tagsMap.inform = !tagsMap.inform"
        />
        <tag-button
          label="Adopt"
          :outline="!tagsMap.adopt"
          @click="tagsMap.adopt = !tagsMap.adopt"
        />
        <tag-button
          label="Announcement"
          :outline="!tagsMap.announcement"
          @click="tagsMap.announcement = !tagsMap.announcement"
        />
        <tag-button
          label="Rescue"
          :outline="!tagsMap.rescue"
          @click="tagsMap.rescue = !tagsMap.rescue"
        />
      </div>
      <div class="col-12 q-mt-md">
        <p>Photo</p>
        <input type="file" accept="image/*" @change="previewImage" />
        <div v-if="imageUrl">
          <img :src="imageUrl" alt="Preview" />
        </div>
      </div>
      <div class="col-12 q-mt-md">
        <p>Gender</p>
      </div>
      <div class="col-12">
        <q-btn
          rounded
          color="black"
          :outline="!isMale"
          icon="male"
          class="q-mr-sm"
          @click="gender = 'm'"
        />
        <q-btn
          rounded
          color="black"
          :outline="isMale"
          icon="female"
          @click="gender = 'f'"
        />
      </div>
      <div class="col-12">
        <q-btn
          label="Create Post"
          class="q-btn-fullwidth q-mt-md"
          type="submit"
          color="info"
        ></q-btn>
      </div>
    </div>
  </q-form>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue';
import FormInput from 'src/components/FormInput.vue';
import TagButton from 'src/components/TagButton.vue';
import { useUserStore } from 'src/stores/user-store';
import { usePostStore, Post } from 'src/stores/post-store';
import { QForm } from 'quasar';

const UserStore = useUserStore();
const PostStore = usePostStore();
const createPostForm = ref<QForm>();

const isPostCreated = ref(false);
const title = ref('');
const description = ref('');

const tagsMap = ref({
  ask: false,
  inform: false,
  adopt: false,
  announcement: false,
  rescue: false,
});

const gender = ref('m');
const imageUrl = ref();

const isMale = computed(() => gender.value === 'm');

const getPostTags = () => {
  const tags = Object.entries(tagsMap.value)
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    .filter(([tag, value]) => value === true)
    .map(([tag]) => tag);

  return tags;
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/no-unused-vars
const previewImage = (event: any) => {
  const file = event.target.files[0];
  if (!file) return;

  const reader = new FileReader();
  reader.onload = (e) => {
    imageUrl.value = e.target?.result;
  };
  reader.readAsDataURL(file);
};

const resetForm = () => {
  title.value = '';
  description.value = '';

  gender.value = 'm';
  imageUrl.value = '';

  tagsMap.value = {
    ask: false,
    inform: false,
    adopt: false,
    announcement: false,
    rescue: false,
  };
};

const createPost = () => {
  const post = {
    user: UserStore.currentUser,
    title: title.value,
    description: description.value,
    tags: getPostTags(),
    photo: imageUrl.value,
    gender: gender.value,
  } as Post;

  if (createPostForm.value?.validate()) {
    PostStore.create(post);
    isPostCreated.value = true;
    resetForm();
  }
};
</script>

<style scoped>
.tag-btn {
  min-width: 70px;
}
</style>
