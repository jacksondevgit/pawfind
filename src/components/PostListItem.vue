<template>
  <div class="row">
    <div class="col-12">
      <q-separator></q-separator>

      <q-item class="q-px-none q-py-lg">
        <q-item-section side>
          <q-avatar circle size="48px">
            <img src="https://cdn.quasar.dev/img/avatar.png" />
            <!-- <q-badge floating color="teal">new</q-badge> -->
          </q-avatar>
        </q-item-section>
        <q-item-section>
          <q-item-label>John Doe</q-item-label>
          <q-item-label caption
            ><q-btn
              rounded
              dense
              color="primary"
              size="xs"
              :label="`Adopt`"
              class="q-px-lg"
          /></q-item-label>
        </q-item-section>
      </q-item>

      <q-card class="my-card q-mb-lg" flat bordered>
        <img :src="`/images/posts/dog-1.png`" />

        <q-card-actions align="right">
          <q-btn flat round color="red" icon="favorite" />
          <q-btn flat round color="teal" icon="bookmark" />
          <q-btn flat round color="primary" icon="share" />
        </q-card-actions>
      </q-card>
      <q-separator></q-separator>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped></style>
