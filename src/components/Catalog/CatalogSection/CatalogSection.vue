<template>
  <div
    v-if="productStore.getPending"
    class="w-100 h-100 position-relative"
  >
    <custom-loader
      :width="6"
      :size="72"
    />
  </div>
  <template v-if="!productStore.getPending && productStore.getProducts.length">
    <CatalogList :list="productStore.getProducts" />
    <div class="text-center mt-12">
      <v-pagination
        v-if="productStore.getCount > MAX_PRODUCT_COUNT"
        v-model="currentPage"
        :length="Math.ceil(productStore.getCount / MAX_PRODUCT_COUNT)"
        @update:modelValue="updateProducts"
      />
    </div>
  </template>
  <div v-if="!productStore.getPending && !productStore.getProducts.length">
    Sorry there is no products right now :(
  </div>
</template>

<script setup lang='ts'>
import CatalogList from '@/components/Catalog/CatalogList/CatalogList.vue';
import { useProductsStore } from '@/store/useProductsStore';
import { onMounted, ref } from 'vue';
import CustomLoader from '@/components/CustomLoader/CustomLoader.vue';

const productStore = useProductsStore();
const MAX_PRODUCT_COUNT = 8;
const updateProducts = (page: number):void => {
  console.log(page);
  productStore.getProductsFromApiToStore(page, 8);
};

const currentPage = ref(1);

onMounted(() => {
  updateProducts(currentPage.value);
});
</script>

<style scoped>
</style>
