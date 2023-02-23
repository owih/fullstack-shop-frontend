<template>
  <div
    v-if="productStore.getPending"
    class="w-100 h-100 position-relative"
  >
    <custom-loader
      :width="6"
      :size="92"
    />
  </div>
  <catalog-detail-item
    v-if="productStore.getProduct && !productStore.getPending"
    :product="productStore.getProduct"
  />
  <div v-if="!productStore.getPending && !productStore.getProduct">
    Product is not found ;(
  </div>
</template>

<script setup lang='ts'>
import CustomLoader from '@/components/CustomLoader/CustomLoader.vue';
import { onMounted } from 'vue';
import { useProductsStore } from '@/store/useProductsStore';
import { useRoute } from 'vue-router';
import CatalogDetailItem from '@/components/CatalogDetail/CatalogDetailItem/CatalogDetailItem.vue';

const route = useRoute();
const productStore = useProductsStore();
const updateProducts = (id: number):void => {
  productStore.getProductFromApiToStore(id);
};

onMounted(() => {
  updateProducts(Number(route.params.id));
});
</script>

<style scoped lang="scss">
.image-mock {
  height: 300px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
