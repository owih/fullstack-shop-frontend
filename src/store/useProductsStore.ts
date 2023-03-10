import { defineStore } from 'pinia';
import { computed, ref } from 'vue';
import Product from '@/types/product/product';
import { getFilteredProductsFromApi, getProductFromApi, getProductsFromApi } from '@/api/useProductsApi';
import { useCustomNotifyStore } from '@/store/useCustomNotifyStore';
import { AxiosError, AxiosResponse } from 'axios';
import ProductResponse from '@/types/response/productResponse';
import TypedProductsResponse from '@/types/response/typedProductsResponse';
import ProductFilter from '@/types/product/productFilter';

export const useProductsStore = defineStore('products-store', () => {
  const products = ref<Product[]>([]);
  const filteredProducts = ref<Product[]>([]);
  const product = ref<Product>();
  const count = ref<number>(0);
  const pending = ref<boolean>(false);

  const customNotifyStore = useCustomNotifyStore();

  const getProducts = computed(():Product[] => products.value);
  const getFilteredProducts = computed(():Product[] => filteredProducts.value);
  const getProduct = computed(():Product | null => product.value || null);
  const getPending = computed(():boolean => pending.value);
  const getCount = computed(():number => count.value);

  const clearFiltered = () => {
    filteredProducts.value = [];
  };

  const getProductsFromApiToStore = async (page?: number, limit?: number) => {
    try {
      pending.value = true;

      const  { data } = await getProductsFromApi(page, limit) as AxiosResponse<TypedProductsResponse<ProductResponse[], number>>;
      products.value = data.products.map((item) => {
        return {
          ...item,
          type: item.type.map((item) => item.type),
        };
      });
      count.value = data.count;

      customNotifyStore.addNotify('Products fetched', 'Success');
    } catch (e) {
      if (e instanceof AxiosError) {
        customNotifyStore.addNotify(e.response?.data?.message, 'Error');
        return;
      }
      customNotifyStore.addNotify('Error while product fetching', 'Error');
    } finally {
      pending.value = false;
    }
  };

  const getProductFromApiToStore = async (id:number) => {
    try {
      pending.value = true;

      const { data } = await getProductFromApi(id);
      product.value = data.product;

      customNotifyStore.addNotify('Product fetched', 'Success');
    } catch (e) {
      if (e instanceof AxiosError) {
        customNotifyStore.addNotify(e.response?.data?.message, 'Error');
        return;
      }
      customNotifyStore.addNotify('Error while product fetching', 'Error');
    } finally {
      pending.value = false;
    }
  };

  const getFilteredProductsFromApiToStore = async (filterData: ProductFilter, page?: number, limit?: number) => {
    try {
      pending.value = true;

      const  { data } = await getFilteredProductsFromApi(filterData, page, limit) as AxiosResponse<TypedProductsResponse<ProductResponse[], number>>;
      filteredProducts.value = data.products.map((item) => {
        return {
          ...item,
          type: item.type.map((item) => item.type),
        };
      });
      count.value = data.count;

      customNotifyStore.addNotify('Filtered products fetched', 'Success');
    } catch (e) {
      if (e instanceof AxiosError) {
        customNotifyStore.addNotify(e.response?.data?.message, 'Error');
        return;
      }
      customNotifyStore.addNotify('Error while search product', 'Error');
    } finally {
      pending.value = false;
    }
  };

  return {
    getProducts,
    getPending,
    getCount,
    getProduct,
    getFilteredProducts,
    clearFiltered,
    getProductFromApiToStore,
    getProductsFromApiToStore,
    getFilteredProductsFromApiToStore,
  };
});
