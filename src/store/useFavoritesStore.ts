import { defineStore } from 'pinia';
import { computed, reactive, ref } from 'vue';
import { useCustomNotifyStore } from '@/store/useCustomNotifyStore';
import Product from '@/types/product/product';
import {
  addProductToFavoritesApi,
  clearFavoritesApi,
  deleteProductFromFavoritesApi,
  getFavoritesFromApi
} from '@/api/useFavoritesApi';
import { AxiosError, AxiosResponse } from 'axios';
import TypedFavoritesResponse from '@/types/response/typedFavoritesResponse';
import FavoritesResponse from '@/types/response/favoritesResponse';

export const useFavoritesStore = defineStore('favorites-store', () => {
  const products = ref<Product[]>([]);
  const pending = reactive({
    get: false,
    update: false,
  });
  const pendingProducts = ref<number[]>([]);

  const customNotifyStore = useCustomNotifyStore();

  const getProducts = computed((): Product[] => products.value);
  const getPending = computed(() => pending);
  const getPendingProducts = computed((): number[] => pendingProducts.value);

  const processProductData = (data: TypedFavoritesResponse<FavoritesResponse[]>) => {
    return data.favorites.map((item) => {
      return {
        ...item.product,
        type: item.product.type.map((item) => item.type),
      };
    });
  };

  const clear = () => {
    products.value = [];
  };

  const getFavoritesFromApiToStore = async () => {
    try {
      pending.get = true;

      const { data } = await getFavoritesFromApi() as AxiosResponse<TypedFavoritesResponse<FavoritesResponse[]>>;
      products.value = processProductData(data);

      customNotifyStore.addNotify('Favorites loaded successfully!', 'Success');
    } catch (e) {
      if (e instanceof AxiosError) {
        customNotifyStore.addNotify(e.response?.data?.message, 'Error');
        return;
      }
      customNotifyStore.addNotify('Something went wrong', 'Error');
    } finally {
      pending.get = false;
    }
  };

  const addProductToFavorites = async (productId: number) => {
    try {
      pending.update = true;
      pendingProducts.value.push(productId);

      const { data } = await addProductToFavoritesApi(productId) as AxiosResponse<TypedFavoritesResponse<FavoritesResponse[]>>;
      products.value = processProductData(data);

      customNotifyStore.addNotify('Product added successfully!', 'Success');
    } catch (e) {
      if (e instanceof AxiosError) {
        customNotifyStore.addNotify(e.response?.data?.message, 'Error');
        return;
      }
      customNotifyStore.addNotify('Something went wrong', 'Error');
    } finally {
      pending.update = false;
      pendingProducts.value = pendingProducts.value.filter((item) => item !== productId);
    }
  };

  const deleteProductFromFavorites = async (productId: number) => {
    try {
      pending.update = true;
      pendingProducts.value.push(productId);

      const { data } = await deleteProductFromFavoritesApi(productId) as AxiosResponse<TypedFavoritesResponse<FavoritesResponse[]>>;
      products.value = processProductData(data);

      customNotifyStore.addNotify('Product added successfully!', 'Success');
    } catch (e) {
      if (e instanceof AxiosError) {
        customNotifyStore.addNotify(e.response?.data?.message, 'Error');
        return;
      }
      customNotifyStore.addNotify('Something went wrong', 'Error');
    } finally {
      pending.update = false;
      pendingProducts.value = pendingProducts.value.filter((item) => item !== productId);
    }
  };

  const clearFavorites = async () => {
    try {
      pending.get = true;

      const { data } = await clearFavoritesApi() as AxiosResponse<TypedFavoritesResponse<FavoritesResponse[]>>;
      products.value = processProductData(data);

      customNotifyStore.addNotify('Favorites cleared!', 'Success');
    } catch (e) {
      if (e instanceof AxiosError) {
        customNotifyStore.addNotify(e.response?.data?.message, 'Error');
        return;
      }
      customNotifyStore.addNotify('Something went wrong', 'Error');
    } finally {
      pending.get = false;
    }
  };


  return {
    getPending,
    getProducts,
    getPendingProducts,
    clear,
    clearFavorites,
    getFavoritesFromApiToStore,
    addProductToFavorites,
    deleteProductFromFavorites,
  };
});
