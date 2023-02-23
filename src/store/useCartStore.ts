import { defineStore } from 'pinia';
import { computed, reactive, ref } from 'vue';
import { useCustomNotifyStore } from '@/store/useCustomNotifyStore';
import { addProductToCartApi, deleteProductFromCartApi, getCartFromApi, updateCartFromApi } from '@/api/useCartApi';
import CartResponse from '@/types/response/cartResponse';
import { AxiosError, AxiosResponse } from 'axios';
import CartProduct from '@/types/cartProduct';
import TypedCartResponse from '@/types/response/typedCartResponse';

export const useCartStore = defineStore('cart-store', () => {
  const products = ref<CartProduct[]>([]);
  const pending = reactive({
    get: false,
    update: false,
    add: false,
    delete: false,
  });

  const customNotifyStore = useCustomNotifyStore();

  const getProducts = computed((): CartProduct[] => products.value);
  const getPending = computed(() => pending);

  // We specially divide all the functionality of the store for further interaction (instead only update cart method)

  const processProductData = (data: TypedCartResponse<CartResponse[]>) => {
    return data.cart.map((item) => {
      return {
        ...item.product,
        count: item.count,
        type: item.product.type.map((item) => item.type),
      };
    });
  };

  const getCartFromApiToStore = async () => {
    try {
      pending.get = true;
      const { data } = await getCartFromApi() as AxiosResponse<TypedCartResponse<CartResponse[]>>;
      console.log(data);
      products.value = processProductData(data);
      console.log(data);

      customNotifyStore.addNotify('Cart loaded successfully!', 'Success');
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

  const addProductToCart = async (productId: number) => {
    try {
      pending.add = true;
      const { data } = await addProductToCartApi(productId) as AxiosResponse<TypedCartResponse<CartResponse[]>>;
      console.log(data);
      products.value = processProductData(data);

      customNotifyStore.addNotify('Product added successfully!', 'Success');
    } catch (e) {
      if (e instanceof AxiosError) {
        customNotifyStore.addNotify(e.response?.data?.message, 'Error');
        return;
      }
      customNotifyStore.addNotify('Something went wrong', 'Error');
    } finally {
      pending.add = false;
    }
  };

  const updateCartFromApiToStore = async (productId: number, count: number) => {
    try {
      pending.update = true;
      const { data } = await updateCartFromApi(productId, count) as AxiosResponse<TypedCartResponse<CartResponse[]>>;
      console.log(data);
      products.value = processProductData(data);

      customNotifyStore.addNotify('Cart updated successfully!', 'Success');
    } catch (e) {
      if (e instanceof AxiosError) {
        customNotifyStore.addNotify(e.response?.data?.message, 'Error');
        return;
      }
      customNotifyStore.addNotify('Something went wrong', 'Error');
    } finally {
      pending.update = false;
    }
  };

  const deleteProductFromCart = async (productId: number) => {
    try {
      pending.delete = true;
      const { data } = await deleteProductFromCartApi(productId) as AxiosResponse<TypedCartResponse<CartResponse[]>>;
      console.log(data);
      products.value = processProductData(data);
      console.log(products.value);

      customNotifyStore.addNotify('Cart loaded successfully!', 'Success');
    } catch (e) {
      if (e instanceof AxiosError) {
        customNotifyStore.addNotify(e.response?.data?.message, 'Error');
        return;
      }
      customNotifyStore.addNotify('Something went wrong', 'Error');
    } finally {
      pending.delete = false;
    }
  };

  return {
    getPending,
    getProducts,
    addProductToCart,
    deleteProductFromCart,
    updateCartFromApiToStore,
    getCartFromApiToStore,
  };
});
