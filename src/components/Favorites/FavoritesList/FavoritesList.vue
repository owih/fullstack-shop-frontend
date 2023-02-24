<template>
  <v-row class="ma-0 flex-column">
    <v-col
      v-for="item in props.products"
      :key="item.id"
      class="px-0 py-2"
    >
      <favorites-item :product="item" />
    </v-col>
  </v-row>
</template>

<script setup lang='ts'>
import { PropType } from 'vue';
import Product from '@/types/product/product';
import FavoritesItem from '@/components/Favorites/FavoritesItem/FavoritesItem.vue';

const props = defineProps({
  products: {
    type: Array as PropType<Product[]>,
    required: true,
  }
});
</script>

<style scoped>
</style>
