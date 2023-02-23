<template>
  <v-container class="h-100 d-flex flex-column">
    <h1 class="mt-4 mt-lg-8 mb-4">
      Profile
    </h1>
    <section class="h-100 position-relative">
      <profile-section />
    </section>
  </v-container>
</template>

<script lang="ts" setup>
import ProfileSection from '@/components/Profile/ProfileSection/ProfileSection.vue';
</script>
