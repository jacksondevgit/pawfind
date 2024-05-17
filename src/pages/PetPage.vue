<template>
  <q-page class="row q-pa-none">
    <div class="col-12">
      <img src="images/pets/labrador.png" style="width: 100%" />
      <q-card flat bordered class="my-card">
        <q-card-section>
          <div class="text-h6">
            Wayne
            <q-btn
              style="position: relative; top: -4px"
              flat
              icon="male"
              size="lg"
            />
          </div>
        </q-card-section>

        <q-card-section class="q-pt-none">
          <q-btn
            style="position: relative; top: -4px"
            flat
            icon="location_on"
            size="md"
          />Poblacion, Dalaguete, Cebu
        </q-card-section>

        <q-separator inset />

        <q-card-section class="row">
          <div class="col-3 text-center">
            <h6 class="q-ma-none text-subtitle2">Retriever</h6>
            <i>Breed</i>
          </div>
          <div class="col-3 text-center">
            <h6 class="q-ma-none text-subtitle2">Brown</h6>
            <i>Color</i>
          </div>
          <div class="col-3 text-center">
            <h6 class="q-ma-none text-subtitle2">20kg</h6>
            <i>Weight</i>
          </div>
          <div class="col-3 text-center">
            <h6 class="q-ma-none text-subtitle2">3years</h6>
            <i>Age</i>
          </div>
          <div class="col-12 q-mt-xl">
            <q-btn
              style="position: relative; top: -4px"
              flat
              icon="pets"
              size="sm"
            />
            <b>Health</b>
            <p class="q-mb-none pet-content">Fully Vaccinated</p>
            <p class="pet-content">Neutered</p>
          </div>
          <div class="col-12">
            <q-btn
              style="position: relative; top: -4px"
              flat
              icon="pets"
              size="sm"
            />
            <b>Characteristics</b>
            <p class="q-mb-none pet-content">Playful</p>
            <p class="q-mb-none pet-content">Gentle</p>
            <p class="pet-content">Active</p>
          </div>
          <div class="col-12">
            <q-btn
              style="position: relative; top: -4px"
              flat
              icon="pets"
              size="sm"
            />
            <b>Documents</b>
            <p class="q-mb-none pet-content">N/A</p>
          </div>
        </q-card-section>
      </q-card>
    </div>
  </q-page>
</template>

<script setup lang="ts"></script>

<style scoped>
.pet-content {
  padding-left: 50px;
}
</style>
