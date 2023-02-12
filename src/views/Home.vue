<template>
  <div>
    <div>
      <MainCarousel />
    </div>
    <div class="py-2 text-center text-h6 text-md-h4 bg-shades-white font-weight-bold">
      <v-container>
        <span class="pa-3 d-inline-block">
          Quality
        </span>
        <span class="pa-3 d-inline-block">
          Reliability
        </span>
        <span class="pa-3 rounded-sm d-inline-block bg-shades-black text-shades-white">
          Availability
        </span>
      </v-container>
    </div>
  </div>
</template>

<script lang="ts" setup>
import MainCarousel from '@/components/MainCarousel/MainCarousel.vue';
</script>
