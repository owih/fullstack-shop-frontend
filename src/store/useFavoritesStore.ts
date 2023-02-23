import { defineStore } from 'pinia';
import { computed, reactive, ref } from 'vue';
import { useCustomNotifyStore } from '@/store/useCustomNotifyStore';
import Product from '@/types/product';
import { getFavoritesFromApi } from '@/api/useFavoritesApi';

export const useFavoritesStore = defineStore('favorites-store', () => {
  const products = ref<Product[]>([]);
  const pending = reactive({
    get: false,
    update: false,
  });

  const customNotifyStore = useCustomNotifyStore();

  const getProducts = computed((): Product[] => products.value);
  const getPending = computed(() => pending);


  const getFavoritesFromApiToStore = async () => {
    try {
      pending.get = true;
      const  { data } = await getFavoritesFromApi();
      console.log(data);
      products.value = data.cart.products;

      pending.get = false;
      customNotifyStore.addNotify('Favorites loaded successfully!', 'Success');
    } catch (e) {
      pending.get = false;
      customNotifyStore.addNotify('Error while get cart', 'Error');
    }
  };

  return {
    getPending,
    getProducts,
    getFavoritesFromApiToStore,
  };
});
