import useUrlBackendPaths from '@/composibles/useUrlBackendPaths';
import Api from '@/api/api';

const userPathUrl = useUrlBackendPaths.favorites;

export const getFavoritesFromApi = () => {
  const path = `${userPathUrl}/`;
  return Api.request('get', path);
};
