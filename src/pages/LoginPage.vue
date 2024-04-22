<template>
  <q-layout view="lHh Lpr lFf">
    <q-page-container>
      <q-page class="row items-center justify-evenly bg-primary text-white"
        ><div id="login-form-wrapper" class="col-12 text-center">
          <h3>PawFind</h3>
          <div class="row">
            <div class="col-12 q-mb-md">
              <q-input
                name="account"
                label="Account number"
                v-model="accountNumber"
                outlined
                filled
                type="text"
              ></q-input>
            </div>
            <div class="col-12">
              <q-input
                name="password"
                label="Password"
                v-model="password"
                outlined
                filled
                :type="isPwd ? 'password' : 'text'"
              >
                <template v-slot:append>
                  <q-icon
                    :name="isPwd ? 'visibility_off' : 'visibility'"
                    class="cursor-pointer"
                    @click="isPwd = !isPwd"
                  /> </template
              ></q-input>
            </div>
          </div>
        </div>
        ></q-page
      >
    </q-page-container>
  </q-layout>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const accountNumber = ref<string>();
const password = ref<string>();
const isPwd = ref<boolean>(true);

defineOptions({
  name: 'LoginPage',
});
</script>

<style scoped>
#login-form-wrapper {
  padding: 0 5%;
}
</style>
