<template>
  <CatalogList :list="catalogListMock" />
  <div class="text-center mt-12">
    <v-pagination
      :length="6"
    />
  </div>
</template>

<script setup lang='ts'>
import CatalogList from '@/components/Catalog/CatalogList/CatalogList.vue';
import Products from '@/types/products';
const catalogListMock: Products = [
  {
    id: Math.floor(Math.random() * 10),
    name: 'T-shirt',
    price: 333,
    description: 'Some text description',
    type: 'T-shirt',
    sale: 30,
    stock: 33,
    sizes: ['s', 'm', 'l', 'xl', '2xl', '3xl', '4xl'],
  },
  {
    id: Math.floor(Math.random() * 10),
    name: 'T-shirt',
    price: 112,
    description: 'Some text description Some text description Some text description Some text description',
    type: 'T-shirt',
    stock: 33,
    sizes: ['s', 'm', 'l', 'xl', '2xl', '3xl', '4xl'],
  },
  {
    id: Math.floor(Math.random() * 10),
    name: 'T-shirt',
    price: 144,
    description: 'Some text description',
    type: 'T-shirt',
    sale: 15,
    stock: 33,
    sizes: ['s', 'm', 'l', 'xl', '2xl', '3xl', '4xl'],
  },
  {
    id: Math.floor(Math.random() * 10),
    name: 'T-shirt',
    price: 230,
    description: 'Some text description',
    type: 'T-shirt',
    stock: 33,
    sizes: ['s', 'm', 'l', 'xl', '2xl', '3xl', '4xl'],
  },
  {
    id: Math.floor(Math.random() * 10),
    name: 'T-shirt',
    price: 150,
    description: 'Some text description',
    type: 'T-shirt',
    stock: 33,
    sizes: ['s', 'm', 'l', 'xl', '2xl', '3xl', '4xl'],
  },
];
</script>

<style scoped>
</style>
