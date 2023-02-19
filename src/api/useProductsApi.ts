import axios from 'axios';
import useUrlBackendPaths from '@/composibles/useUrlBackendPaths';

const baseBackendUrl = import.meta.env.VITE_BACKEND_URL;
const urlProductPath = useUrlBackendPaths.product;

console.log(baseBackendUrl + urlProductPath);
export const getProductsFromApi = (page?: number, limit?: number) => {
  if (page && limit) {
    return axios.get(`${baseBackendUrl}${urlProductPath}/?page=${page}&limit=${limit}`);
  }
  return axios.get(`${baseBackendUrl}${urlProductPath}/`);
};

export const getProductFromApi = (id: number) => {
  return axios.get(`${baseBackendUrl}${urlProductPath}/${String(id)}`);
};
