<template>
  <v-footer class="p-0 flex-grow-0">
    <v-container class="d-flex flex-column flex-md-row justify-space-between">
      <div class="d-flex align-center ma-n2 order-md-1">
        <v-btn
          v-for="icon in socialMock"
          :key="icon.icon"
          class="pa-2 text-md-h6"
          :icon="icon.icon"
          :href="icon.url"
          variant="text"
        />
      </div>
      <div class="mt-3 mb-lg-0">
        <div class="pt-0">
          Phasellus feugiat arcu sapien, et iaculis ipsum elementum sit amet.
        </div>
        2023 — <strong>This shop</strong>
      </div>
    </v-container>
  </v-footer>
</template>

<script setup lang='ts'>
const socialMock = [
  {
    icon: 'mdi-instagram',
    url: '#',
  },
  {
    icon: 'mdi-whatsapp',
    url: '#',
  },
  {
    icon: 'mdi-at',
    url: '#',
  },
  {
    icon: 'mdi-phone',
    url: '#',
  },
];
</script>

<style scoped>
</style>
