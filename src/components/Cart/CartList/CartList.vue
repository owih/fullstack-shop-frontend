<template>
  <v-row class="ma-n3 flex-column">
    <v-col
      v-for="item in props.products"
      :key="item.id"
      class="pa-3"
    >
      <cart-item :product="item" />
    </v-col>
  </v-row>
</template>

<script setup lang='ts'>
import { PropType } from 'vue';
import Product from '@/types/product';
import CartItem from '@/components/Cart/CartItem/CartItem.vue';

const props = defineProps({
  products: {
    type: Array as PropType<Product[]>,
    required: true,
  }
});
</script>

<style scoped>
</style>
