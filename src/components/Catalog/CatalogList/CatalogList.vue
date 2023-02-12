<template>
  <v-row>
    <v-col
      v-for="item in props.list"
      :key="item.id"
      cols="12"
      sm="6"
      lg="4"
      xl="3"
    >
      <CatalogItem :product="item" />
    </v-col>
  </v-row>
</template>

<script setup lang='ts'>
import { PropType } from 'vue';
import CatalogItem from '@/components/Catalog/CatalogItem/CatalogItem.vue';
import Products from '@/types/products';

const props = defineProps({
  list: {
    type: Array as PropType<Products>,
    required: true,
  }
});
</script>

<style scoped>
</style>
