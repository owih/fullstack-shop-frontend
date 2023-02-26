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
import CartItem from '@/components/Cart/CartItem/CartItem.vue';
import CartProduct from '@/types/product/cartProduct';

const props = defineProps({
  products: {
    type: Array as PropType<CartProduct[]>,
    required: true,
  }
});
</script>

<style scoped>
</style>
