<template>
  <q-layout view="lHh Lpr lFf">
    <q-page-container>
      <q-page class="row items-center justify-evenly bg-primary text-white"
        ><div class="col-12 text-center login-form-wrapper">
          <h3>PawFind</h3>

          <div class="row" v-if="isRegistered">
            <div class="col-12 bg-green">
              <p class="q-ma-none q-pa-lg">
                Registration successful. You may now
                <router-link to="/login">login.</router-link>
              </p>
            </div>
          </div>
          <q-form
            class="row"
            @submit.prevent="register"
            ref="registerForm"
            v-else
          >
            <div class="col-12 q-mb-md">
              <FormSelect
                :options="userTypes"
                label="Register as"
                v-model="userType"
                option-value="value"
                :rules="[(val : string) => !!val || `User type is required`]"
              ></FormSelect>
            </div>
            <div class="col-12 q-mb-md">
              <FormInput
                name="email"
                label="E-mail"
                v-model="email"
                type="text"
                :rules="[(val : string, rules: any) => rules.email(val) || 'Please enter a valid email address']"
              ></FormInput>
            </div>
            <div class="col-12 q-mb-md">
              <FormInput
                name="password"
                label="Password"
                v-model="password"
                type="password"
                :rules="[(val : string) => !!val || `Password is required`]"
              ></FormInput>
            </div>
            <div class="col-12 q-mb-md">
              <FormInput
                name="fullname"
                label="Full Name"
                v-model="fullname"
                type="text"
                :rules="[(val : string) => !!val || `Full name is required`]"
              ></FormInput>
            </div>
            <div class="col-12 q-mb-md">
              <FormInput
                name="contactNumber"
                label="Contact Number"
                v-model="contactNumber"
                type="text"
              ></FormInput>
            </div>
            <div class="col-12 q-mb-md" v-if="userType === 'adopter'">
              <FormInput
                name="applicationId"
                label="Application ID"
                type="text"
                v-model="applicationId"
              ></FormInput>
            </div>
            <div class="col-12 q-mb-md" v-if="userType === 'rescuer'">
              <FormInput
                name="organization"
                label="Organization (optional)"
                type="text"
                v-model="organization"
              ></FormInput>
            </div>
            <div class="col-12 q-mb-md" v-if="userType === 'rescuer'">
              <FormInput
                name="yearsOfExperience"
                label="Years of experience"
                type="number"
                v-model="yearsOfExperience"
              ></FormInput>
            </div>
            <div class="col-12 q-mb-md" v-if="userType === 'vet'">
              <FormInput
                name="registrationNumber"
                label="Registration Number"
                type="text"
                v-model="registrationNumber"
              ></FormInput>
            </div>
            <div class="col-12 q-mb-md" v-if="userType === 'gov'">
              <FormInput
                name="employeeNumber"
                label="Employee Number"
                type="text"
                v-model="employeeNumber"
              ></FormInput>
            </div>
            <div class="col-12 q-mb-md" v-if="userType === 'gov'">
              <FormInput
                name="department"
                label="Department"
                type="text"
                v-model="department"
              ></FormInput>
            </div>
            <div class="col-12 q-mb-md">
              <q-btn
                label="Register"
                class="q-btn-fullwidth q-mt-md"
                type="submit"
              ></q-btn>
            </div>
          </q-form>
        </div>
      </q-page>
    </q-page-container>
  </q-layout>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { User, useUserStore } from 'src/stores/user-store';

import FormInput from 'src/components/FormInput.vue';
import FormSelect from 'src/components/FormSelect.vue';
import { QForm } from 'quasar';

const UserStore = useUserStore();
const userType = ref<string>();
const email = ref<string>();
const password = ref<string>();
const fullname = ref<string>();
const contactNumber = ref<string>();
const applicationId = ref<string>();
const organization = ref<string>();
const yearsOfExperience = ref<number>();
const registrationNumber = ref<string>();
const employeeNumber = ref<string>();
const department = ref<string>();

const isRegistered = ref<boolean>(false);

const userTypes = [
  { label: 'General User', value: 'genuser' },
  { label: 'Adopter', value: 'adopter' },
  { label: 'Rescuer', value: 'rescuer' },
  { label: 'Licensed Veterinarian', value: 'vet' },
  { label: 'Government Official', value: 'gov' },
];

const registerForm = ref<QForm>();

const register = () => {
  if (registerForm.value?.validate()) {
    isRegistered.value = true;

    UserStore.register({
      userType: userType.value,
      email: email.value,
      password: password.value,
      fullname: fullname.value,
      contactNumber: contactNumber.value,
      applicationId: applicationId.value,
      organization: organization.value,
      yearsOfExperience: yearsOfExperience.value,
      registrationNumber: registrationNumber.value,
      employeeNumber: employeeNumber.value,
      department: department.value,
    } as User);
    manualResetForm();
  }
};

const manualResetForm = () => {
  userType.value = '';
  email.value = '';
  password.value = '';
  fullname.value = '';
  contactNumber.value = '';
};

defineOptions({
  name: 'RegisterPage',
});
</script>

<style scoped></style>
