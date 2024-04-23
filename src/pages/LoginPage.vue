<template>
  <q-layout view="lHh Lpr lFf">
    <q-page-container>
      <q-page class="row items-center justify-evenly bg-primary text-white"
        ><div class="col-12 text-center login-form-wrapper">
          <h3>PawFind</h3>
          <div class="row" v-if="!isAuthenticated && isSubmitted">
            <div class="col-12 bg-red q-mb-lg">
              <p class="q-ma-none q-pa-lg">
                Login failed. Invalid username or password!
              </p>
            </div>
          </div>
          <q-form ref="loginForm" class="row" @submit.prevent="login">
            <div class="col-12 q-mb-md">
              <q-input
                name="email"
                label="Email"
                v-model="email"
                outlined
                filled
                type="text"
                :rules="[(val : string, rules: any) => rules.email(val) || 'Please enter a valid email address']"
                @update:model-value="isSubmitted = false"
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
                :rules="[(val : string) => !!val || `Password is required`]"
                @update:model-value="isSubmitted = false"
              >
                <template v-slot:append>
                  <q-icon
                    :name="isPwd ? 'visibility_off' : 'visibility'"
                    class="cursor-pointer"
                    @click="isPwd = !isPwd"
                  /> </template
              ></q-input>
            </div>
            <div class="col-12">
              <q-btn
                label="Login"
                class="q-btn-fullwidth q-mt-md"
                type="submit"
              ></q-btn>
            </div>
            <div class="col-12 q-mt-md">
              Don't have an account?
              <router-link to="/register">Register now</router-link>
            </div>
          </q-form>
        </div>
      </q-page>
    </q-page-container>
  </q-layout>
</template>

<script setup lang="ts">
import { computed, onMounted, ref } from 'vue';
import { useUserStore } from 'src/stores/user-store';
import { useRouter } from 'vue-router';
import { QForm } from 'quasar';

const UserStore = useUserStore();
const router = useRouter();

const email = ref<string>();
const password = ref<string>();
const isPwd = ref<boolean>(true);
const loginForm = ref<QForm>();
const isAuthenticated = ref<boolean>(false);
const isSubmitted = ref<boolean>(false);

const isAuthorized = computed(() => UserStore.isAuthorized);

const login = () => {
  if (loginForm.value?.validate()) {
    isSubmitted.value = true;
    isAuthenticated.value = UserStore.login(
      email.value as string,
      password.value as string
    );

    if (isAuthenticated.value && UserStore.isAuthorized) {
      router.push('/');
    }
  }
};

onMounted(() => {
  if (isAuthorized.value) {
    router.push('/');
  }
});

defineOptions({
  name: 'LoginPage',
});
</script>
