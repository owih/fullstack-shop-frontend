import useUrlBackendPaths from '@/composibles/useUrlBackendPaths';
import Api from '@/api/api';
import ProductFilter from '@/types/product/productFilter';

const urlProductPath = useUrlBackendPaths.product;

export const getProductsFromApi = (page?: number, limit?: number) => {
  if (page && limit) {
    const path = `${urlProductPath}/?page=${page}&limit=${limit}`;
    return Api.request('get', path);
  }
  const path = `${urlProductPath}/`;
  return Api.request('get', path);
};

export const getFilteredProductsFromApi = (filterData: ProductFilter, page?: number, limit?: number) => {
  if (page && limit) {
    const path = `${urlProductPath}/?page=${page}&limit=${limit}&name=${filterData.name || ''}&type=${filterData.type || ''}`;
    return Api.request('get', path);
  }
  const path = `${urlProductPath}/?name=${filterData.name || ''}&type=${filterData.type || ''}`;
  return Api.request('get', path);
};

export const getProductFromApi = (id: number) => {
  const path = `${urlProductPath}/${String(id)}`;
  return Api.request('get', path);
};
