<template>
  <v-row class="ma-n3 flex-column">
    <v-col
      v-for="item in props.products"
      :key="item.id"
      class="pa-3"
    >
      <CartItem :product="item" />
    </v-col>
  </v-row>
</template>

<script setup lang='ts'>
import { PropType } from 'vue';
import Products from '@/types/products';
import CartItem from '@/components/Cart/CartItem/CartItem.vue';

const props = defineProps({
  products: {
    type: Array as PropType<Products>,
    required: true,
  }
});
</script>

<style scoped>
</style>
