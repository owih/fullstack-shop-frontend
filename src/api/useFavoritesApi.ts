import useUrlBackendPaths from '@/composibles/useUrlBackendPaths';
import Api from '@/api/api';

const userPathUrl = useUrlBackendPaths.favorites;

export const getFavoritesFromApi = () => {
  const path = `${userPathUrl}/`;
  return Api.request('get', path);
};

export const addProductToFavoritesApi = (productId: number) => {
  const data = { productId };
  const path = `${userPathUrl}/`;
  return Api.request('put', path, data);
};

export const deleteProductFromFavoritesApi = (productId: number) => {
  const path = `${userPathUrl}/${productId}`;
  return Api.request('delete', path);
};

export const clearFavoritesApi = () => {
  const path = `${userPathUrl}/`;
  return Api.request('delete', path);
};
