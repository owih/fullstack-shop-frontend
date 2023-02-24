import useUrlBackendPaths from '@/composibles/useUrlBackendPaths';
import Api from '@/api/api';

const userPathUrl = useUrlBackendPaths.cart;

export const getCartFromApi = () => {
  const path = `${userPathUrl}/`;
  return Api.request('get', path);
};

export const updateCartFromApi = (productId: number, count: number) => {
  const data = { productId, count };
  const path = `${userPathUrl}/`;
  return Api.request('post', path, data);
};

export const addProductToCartApi = (productId: number) => {
  const data = { productId };
  const path = `${userPathUrl}/`;
  return Api.request('put', path, data);
};

export const deleteProductFromCartApi = (productId: number) => {
  const path = `${userPathUrl}/${productId}`;
  return Api.request('delete', path);
};
