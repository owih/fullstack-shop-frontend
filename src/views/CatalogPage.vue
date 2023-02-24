<template>
  <v-container class="h-100 d-flex flex-column">
    <h1 class="mt-4 mt-lg-8 mb-4">
      Catalog
    </h1>
    <catalog-section />
  </v-container>
</template>

<script lang="ts" setup>
import CatalogSection from '@/components/Catalog/CatalogSection/CatalogSection.vue';
</script>
