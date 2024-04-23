<template>
  <q-layout view="lHh Lpr lFf">
    <q-page-container>
      <q-page class="row items-center justify-evenly bg-primary text-white"
        ><div class="col-12 text-center login-form-wrapper">
          <h3>PawFind</h3>
          <div class="row">
            <div class="col-12 q-mb-md">
              <FormSelect
                :options="userTypes"
                label="Register as"
                v-model="userType"
                option-value="value"
              ></FormSelect>
            </div>
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
            <div class="col-12 q-mb-md">
              <FormInput
                name="fullname"
                label="Full Name"
                v-model="fullname"
                type="text"
              ></FormInput>
            </div>
            <div class="col-12 q-mb-md">
              <FormInput
                name="contactNo"
                label="Contact Number"
                v-model="contactNo"
                type="text"
              ></FormInput>
            </div>
            <div class="col-12 q-mb-md" v-if="userType === 'adopter'">
              <FormInput
                name="applicationId"
                label="Application ID"
                type="text"
              ></FormInput>
            </div>
            <div class="col-12 q-mb-md" v-if="userType === 'rescuer'">
              <FormInput
                name="organization"
                label="Organization (optional)"
                type="text"
              ></FormInput>
            </div>
            <div class="col-12 q-mb-md" v-if="userType === 'rescuer'">
              <FormInput
                name="yearsOfExperience"
                label="Years of experience"
                type="number"
              ></FormInput>
            </div>
            <div class="col-12 q-mb-md" v-if="userType === 'vet'">
              <FormInput
                name="registrationNo"
                label="Registration Number"
                type="text"
              ></FormInput>
            </div>
            <div class="col-12 q-mb-md" v-if="userType === 'gov'">
              <FormInput
                name="employeeNo"
                label="Employee Number"
                type="text"
              ></FormInput>
            </div>
            <div class="col-12 q-mb-md" v-if="userType === 'gov'">
              <FormInput
                name="department"
                label="Department"
                type="text"
              ></FormInput>
            </div>
            <div class="col-12 q-mb-md">
              <q-btn label="Register" class="q-btn-fullwidth q-mt-md"></q-btn>
            </div>
          </div>
        </div>
      </q-page>
    </q-page-container>
  </q-layout>
</template>

<script setup lang="ts">
import FormInput from 'src/components/FormInput.vue';
import FormSelect from 'src/components/FormSelect.vue';
import { ref } from 'vue';

const userType = ref<string>();
const email = ref<string>();
const password = ref<string>();
const fullname = ref<string>();
const contactNo = ref<string>();
const userTypes = [
  { label: 'General User', value: 'genuser' },
  { label: 'Adopter', value: 'adopter' },
  { label: 'Rescuer', value: 'rescuer' },
  { label: 'Licensed Veterinarian', value: 'vet' },
  { label: 'Government Official', value: 'gov' },
];

defineOptions({
  name: 'RegisterPage',
});
</script>

<style scoped></style>
