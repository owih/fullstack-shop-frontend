<template>
  <h2 class="pb-3 px-3 px-lg-0 pb-lg-5">
    Cart {{ `(${catalogListMock.length})` }}
  </h2>
  <div class="overflow-auto px-3">
    <CartList :products="catalogListMock" />
  </div>
  <div class="d-flex justify-space-between pt-3 pt-lg-5">
    <v-btn
      block
      color="primary"
    >
      Checkout
    </v-btn>
  </div>
</template>

<script setup lang='ts'>
import Product from '@/types/product';
import CartList from '@/components/Cart/CartList/CartList.vue';

const catalogListMock: Product[] = [
  {
    id: (Math.random() * 10),
    name: 'T-shirt',
    price: 333,
    description: 'Some text description',
    type: 'T-shirt',
    sale: 30,
    stock: 33,
    sizes: ['s', 'm', 'l', 'xl', '2xl', '3xl', '4xl'],
  },
  {
    id: (Math.random() * 10),
    name: 'T-shirt',
    price: 112,
    description: 'Some text description Some text description Some text description Some text description',
    type: 'T-shirt',
    stock: 33,
    sizes: ['s', 'm', 'l', 'xl', '2xl', '3xl', '4xl'],
  },
  {
    id: (Math.random() * 10),
    name: 'T-shirt',
    price: 144,
    description: 'Some text description',
    type: 'T-shirt',
    sale: 15,
    stock: 33,
    sizes: ['s', 'm', 'l', 'xl', '2xl', '3xl', '4xl'],
  },
  {
    id: (Math.random() * 10),
    name: 'T-shirt',
    price: 144,
    description: 'Some text description',
    type: 'T-shirt',
    sale: 15,
    stock: 33,
    sizes: ['s', 'm', 'l', 'xl', '2xl', '3xl', '4xl'],
  },
  {
    id: (Math.random() * 10),
    name: 'T-shirt',
    price: 144,
    description: 'Some text description',
    type: 'T-shirt',
    sale: 15,
    stock: 33,
    sizes: ['s', 'm', 'l', 'xl', '2xl', '3xl', '4xl'],
  },
  {
    id: (Math.random() * 10),
    name: 'T-shirt',
    price: 144,
    description: 'Some text description',
    type: 'T-shirt',
    sale: 15,
    stock: 33,
    sizes: ['s', 'm', 'l', 'xl', '2xl', '3xl', '4xl'],
  },
];
</script>

<style scoped>
</style>
