import { defineStore } from 'pinia';
import { computed, ref } from 'vue';
import Product from '@/types/product';
import { getProductFromApi, getProductsFromApi } from '@/api/useProductsApi';
import { useCustomNotifyStore } from '@/store/useCustomNotifyStore';

export const useProductsStore = defineStore('products-store', () => {
  const products = ref<Product[]>([]);
  const product = ref<Product>();
  const count = ref<number>(0);
  const pending = ref<boolean>(false);

  const customNotifyStore = useCustomNotifyStore();

  const getProducts = computed(():Product[] => products.value);
  const getProduct = computed(():Product | null => product.value || null);
  const getPending = computed(():boolean => pending.value);
  const getCount = computed(():number => count.value);

  const getProductsFromApiToStore = async (page?: number, limit?: number) => {
    try {
      pending.value = true;
      const  { data } = await getProductsFromApi(page, limit);
      products.value = data.products;
      count.value = data.count;
      pending.value = false;
      console.log(products.value);

      customNotifyStore.addNotify('Products fetched', 'Success');
    } catch (e) {
      pending.value = false;
      customNotifyStore.addNotify('Error while product fetching', 'Error');
    }
  };

  const getProductFromApiToStore = async (id:number) => {
    try {
      pending.value = true;
      const { data } = await getProductFromApi(id);
      product.value = data.product;
      pending.value = false;
    } catch (e) {
      pending.value = false;
      customNotifyStore.addNotify('Error while product fetching', 'Error');
    }
  };

  return {
    getProducts,
    getPending,
    getCount,
    getProduct,
    getProductFromApiToStore,
    getProductsFromApiToStore,
  };
});
