<template>
  <q-form class="col-12">
    <div class="row">
      <div class="col-12">
        <FormInput name="title" label="Title" type="text" required></FormInput>
      </div>
      <div class="col-12">
        <FormInput
          name="description"
          label="Description"
          type="textarea"
          required
        ></FormInput>
      </div>
      <div class="col-12">
        <p>Tags:</p>
      </div>
      <div class="col-12">
        <tag-button label="Ask" />
        <tag-button label="Inform" />
        <tag-button label="Adopt" />
        <tag-button label="Announcement" />
        <tag-button label="Rescue" />
      </div>
      <div class="col-12 q-mt-md">
        <p>Photo</p>
      </div>
      <div class="col-12 q-mt-md">
        <p>Gender</p>
      </div>
    </div>
  </q-form>
</template>

<script setup lang="ts">
import FormInput from 'src/components/FormInput.vue';
import TagButton from 'src/components/TagButton.vue';
</script>

<style scoped>
.tag-btn {
  min-width: 70px;
}
</style>
