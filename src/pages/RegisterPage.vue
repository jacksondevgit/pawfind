<template>
  <q-layout view="lHh Lpr lFf">
    <q-page-container>
      <q-page class="row items-center justify-evenly bg-primary text-white"
        ><div class="col-12 text-center login-form-wrapper">
          <h3>PawFind</h3>
          <div class="row">
            <div class="col-12 q-mb-md">
              <FormInput
                name="email"
                label="E-mail"
                v-model="email"
                type="text"
              ></FormInput>
            </div>
            <div class="col-12 q-mb-md">
              <FormInput
                name="password"
                label="Password"
                v-model="password"
                type="password"
              ></FormInput>
            </div>
          </div>
        </div>
      </q-page>
    </q-page-container>
  </q-layout>
</template>

<script setup lang="ts">
import FormInput from 'src/components/FormInput.vue';
import { ref } from 'vue';

const email = ref<string>();
const password = ref<string>();

defineOptions({
  name: 'RegisterPage',
});
</script>

<style scoped></style>
