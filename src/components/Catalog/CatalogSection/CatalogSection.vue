<template>
  <catalog-filter
    v-if="productStore.getProducts.length"
    :disabled="productStore.getPending"
    @submitFilter="onSubmitFilter"
    @clearFilter="onClearFilter"
  />
  <div
    v-if="productStore.getPending"
    class="w-100 h-100 position-relative"
  >
    <custom-loader
      :width="6"
      :size="92"
    />
  </div>
  <template v-if="!productStore.getPending && productStore.getProducts.length">
    <catalog-list
      class="pt-8"
      :list="isFiltered ? productStore.getFilteredProducts : productStore.getProducts"
    />
    <div class="text-center mt-12">
      <v-pagination
        v-if="productStore.getCount > MAX_PRODUCT_COUNT"
        v-model="currentPage"
        :length="Math.ceil(productStore.getCount / MAX_PRODUCT_COUNT)"
        @update:modelValue="updateProducts"
      />
    </div>
  </template>
  <div v-if="!isFiltered && !productStore.getPending && !productStore.getProducts.length">
    Sorry there is no products right now :(
  </div>
  <div v-if="isFiltered && !productStore.getPending && !productStore.getFilteredProducts.length">
    Sorry there is no products with "{{ Object.values(filterData).join(' ') }}" :(
  </div>
</template>

<script setup lang='ts'>
import CatalogList from '@/components/Catalog/CatalogList/CatalogList.vue';
import { useProductsStore } from '@/store/useProductsStore';
import { onMounted, reactive, ref } from 'vue';
import CustomLoader from '@/components/CustomLoader/CustomLoader.vue';
import CatalogFilter from '@/components/Catalog/CatalogFilter/CatalogFilter.vue';
import ProductFilter from '@/types/product/productFilter';

const productStore = useProductsStore();
const MAX_PRODUCT_COUNT = 8;

const updateProducts = (page: number):void => {
  if (isFiltered.value) {
    productStore.getFilteredProductsFromApiToStore(filterData, currentPage.value, MAX_PRODUCT_COUNT);
    return;
  }
  productStore.getProductsFromApiToStore(page, MAX_PRODUCT_COUNT);
};

const currentPage = ref<number>(1);
const isFiltered = ref<boolean>(false);
const filterData = reactive<ProductFilter>({
  name: '',
  type: '',
});

const onSubmitFilter = (e: ProductFilter) => {
  isFiltered.value = true;
  filterData.name = e.name;
  filterData.type = e.type;
  productStore.getFilteredProductsFromApiToStore(filterData, 1, MAX_PRODUCT_COUNT);
  currentPage.value = 1;
};
const onClearFilter = () => {
  filterData.name = '';
  filterData.type = '';
  productStore.clearFiltered();
  isFiltered.value = false;
};

onMounted(() => {
  updateProducts(currentPage.value);
});
</script>
